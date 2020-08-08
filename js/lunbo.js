
		var div=document.getElementsByName("lunbodiv");
		var radio=document.getElementsByName("radio");
		var WIDTH=45;
		//document.getElementById("div").style.width=WIDTH+"px";
		for (var i = 0; i < div.length; i++) {
			div[i].style.left=i*WIDTH+"rem";
		}
		function gun(){

		for (var i = 0; i < div.length; i++) {
			
			var left = parseFloat(div[i].style.left);
			left-=0.25;
			if (left<-WIDTH) {
				left=2*WIDTH;
				if (i<2) {
					radio[i+1].checked="checked";
				}
				else{
					radio[0].checked="checked";
				}
				clearInterval(move);

			}	
			div[i].style.left=left+"rem";			
		}

	}
	function mova(){
		move=setInterval(gun,10);
	}
	//time=setInterval(mova,2000);
	function mova1(){
		time=setInterval(mova,2500);
	}
	function mova2(){
		clearInterval(time);
		
	}
	function gun1(){
			clearInterval(time);
			if (radio[0].checked) {
				
				div[0].style.left=0*WIDTH+"rem";
				div[1].style.left=1*WIDTH+"rem";
				div[2].style.left=2*WIDTH+"rem";
				
				
				
			}
			if (radio[1].checked) {
				
				div[1].style.left=0*WIDTH+"rem";
				div[2].style.left=1*WIDTH+"rem";
				div[0].style.left=2*WIDTH+"rem";
				
				
			}
			if (radio[2].checked) {

				div[2].style.left=0*WIDTH+"rem";
				div[0].style.left=1*WIDTH+"rem";
				div[1].style.left=2*WIDTH+"rem";
				
				
			}
			
		}
		
	
	function gun2(){
		clearInterval(time);
			
			if (radio[0].checked) {
				
				radio[2].checked="checked";
				div[2].style.left=0*WIDTH+"rem";
				div[0].style.left=1*WIDTH+"rem";
				div[1].style.left=2*WIDTH+"rem";
				
				
			}
			else if (radio[1].checked) {
				radio[0].checked="checked";
				div[0].style.left=0*WIDTH+"rem";
				div[1].style.left=1*WIDTH+"rem";
				div[2].style.left=2*WIDTH+"rem";
				
				
			}
			else if (radio[2].checked) {
				radio[1].checked="checked";
				div[1].style.left=0*WIDTH+"rem";
				div[2].style.left=1*WIDTH+"rem";
				div[0].style.left=2*WIDTH+"rem";
				
				
			}
			
			
		}
		function gun3(){
		
		clearInterval(time);
			if (radio[0].checked) {
				
				radio[1].checked="checked";
				div[1].style.left=0*WIDTH+"rem";
				div[2].style.left=1*WIDTH+"rem";
				div[0].style.left=2*WIDTH+"rem";
				
				
				
			}
			else if (radio[1].checked) {
				
				radio[2].checked="checked";
				div[2].style.left=0*WIDTH+"rem";
				div[0].style.left=1*WIDTH+"rem";
				div[1].style.left=2*WIDTH+"rem";
				
				
				
			}
			else if (radio[2].checked) {
				
				radio[0].checked="checked";
				div[0].style.left=0*WIDTH+"rem";
				div[1].style.left=1*WIDTH+"rem";
				div[2].style.left=2*WIDTH+"rem";
				
				
				

			}
			
		}
	
	
	//setInterval(mova1,2000)
		
	