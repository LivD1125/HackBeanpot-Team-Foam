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
			    	//var topics = ["Bernie Sanders", "Hillary Clinton", "Democratic", "Election"];
			    	var percentageEl = document.getElementById('percentage');
			        var imageEl = document.getElementById('picture');

			    	document.getElementById('time').innerHTML = minutes + " minute read";

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
			    		 topicsList += " - "
			    		}
			    		topicsList += topics[x];
			    	}
			    	document.getElementById('keywords').innerHTML = topicsList;
			    	//alert(result);
			    });


    });
}
);

