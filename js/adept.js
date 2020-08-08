	var html=document.getElementsByTagName("html");
	var initScale=1/window.devicePixelRatio;
	// document.write('<meta name="viewport" content="width=device-width,initial-scale='+initScale+',minimum-scale='+initScale+',maximum-scale='+initScale+',user-scalable=no">')
	var initWidth=window.document.documentElement.clientWidth;
	var initWidth1=window.screen.width;
	html[0].style.fontSize=initWidth1/80+"px";
