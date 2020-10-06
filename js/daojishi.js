var endTime=new Date(2020,8,17,12,35,20);


	function GETMILLISECONDS(){
		var currentTime=new Date();
		var rest=endTime.getTime()-currentTime.getTime();
		rest=Math.round(rest/1000);
		if(rest>=0){
			return rest;
		}else{
			return 0;
		}	
	}
	
	function update(){
		var MILLISECONDS=GETMILLISECONDS();
		var hours=parseInt(MILLISECONDS/3600);
		var minutes=parseInt((MILLISECONDS-hours*3600)/60);
		var seconds=MILLISECONDS%60;
		var span=document.getElementsByClassName("timespan")
		span[0].innerHTML=hours+" :";
		span[1].innerHTML=minutes+" :";
		span[2].innerHTML=seconds;
		
	}
	
	
	setInterval(update,1000);
	
	
	
			