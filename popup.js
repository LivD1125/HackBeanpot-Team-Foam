$(document).ready(function(){
    chrome.tabs.getSelected(null, function(tab){
        console.log(tab);
       // console.log(tab.url);
        //document.getElementById('keyword-1').innerHTML = 'dogs';
        $.post(
			    'http://0.0.0.0:5000/',
			    {'url': tab.url}
			    ).then(function(result){
			    	//console.log(result);
			    	var obj = jQuery.parseJSON(result);
			    	console.log(obj);
			    	var minutes = obj.avg_time; //avg_time
			    	var attitude = obj.sentiment; //sentiment
			    	var topics = obj.keywords; //keywords
			    	var percentageEl = document.getElementById('percentage');
			        var imageEl = document.getElementById('picture');
			        var minutesEl = document.getElementById('time');
			        var hours = 0;
			        //minutesEl.innerHTML = minutes + " minute read";
			        console.log(minutes);

			        
			        if (minutes > 59){
			        	hours = Math.round(minutes/60);
			        	minutes = minutes % 60;
			        	minutesEl.innerHTML = hours + "hour" + minutes + " minute read";
			        }
			        else {
			        	minutesEl.innerHTML = minutes + " minute read";
			        }
			    	if (attitude > .5){
			    		percentageEl.className= "positive";
			    		imageEl.src = "pos.png";
			    	}
			    	else {
			    		percentageEl.className= "negative";
						imageEl.src = "neg.png";
			    	}

			    	percentageEl.innerHTML= Math.round(attitude * 100) + "%";
			    	var topicsList = "";
			    	for (var x=0; x < Math.min(5, topics.length); x++){
			    		if (x!=0){
			    		 topicsList += "<span class='dash'> - </span>"
			    		}
			    		topicsList += "<span id='keyword-" + x + "'>" + topics[x] + "</span>";
			    	}
			    	document.getElementById('keywords').innerHTML = topicsList;
			    	//alert(result);
			    });


    });
}
);

