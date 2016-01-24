$(document).ready(function(){
    chrome.tabs.getSelected(null, function(tab){
        console.log(tab);
        console.log(tab.url);
        //document.getElementById('keyword-1').innerHTML = 'dogs';
        $.post(
			    'http://0.0.0.0:5000/',
			    {'url': tab.url}
			    ).then(function(result){
			    	console.log(result);
			    	var minutes = 10;
			    	var attitude = .83;
			    	var topics = ["Bernie Sanders", "Hillary Clinton", "Democratic", "Election"];
			    	var percentageEl = document.getElementById('percentage');
			        var imageEl = document.getElementById('picture');

			    	document.getElementById('time').innerHTML = minutes;

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
			    		 topicsList += "-"
			    		}
			    		topicsList += topics[x];
			    	}
			    	document.getElementById('keywords').innerHTML = topicsList;
			    	//alert(result);
			    });


    });
}
);

