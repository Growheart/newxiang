window.onload=function(){
	var swithover=document.getElementById("switchover");
	var swiLi=swithover.getElementsByTagName("li");
	var reveal=document.getElementsByClassName("reveal");
	for(var i=0;i<swiLi.length;i++){
		swiLi[i].index=i;
		swiLi[i].onclick=function(){
			for(var j=0;j<swiLi.length;j++){
				swiLi[j].className="";
				reveal[j].style.display="none";
			}
			this.className="active";
			reveal[this.index].style.display="block";
		}
	}
	//头部结束
	
	var saoma=document.getElementById("saoma");
	var close=document.getElementById("close");
	close.onmouseover=function(){
		close.style.color="#3c3c3c";
	}
	close.onmouseout=function(){
		close.style.color="#f1f1f1";
	}
	close.onclick=function(){
		saoma.style.display="none";
		close.style.display="none";
	}
	//扫码及搜索结束
	
	var banner=document.getElementById("banner");
	var banImg=banner.getElementsByTagName("img");
	var circle=document.getElementById("circle");
	var circleSpan=circle.getElementsByTagName("span");
	var bannerleft=document.getElementById("bannerleft");
	var bannerright=document.getElementById("bannerright");
	for(var i=0;i<circleSpan.length;i++){
		circleSpan[i].index=i;
		circleSpan[i].onclick=function(){
			for(var j=0;j<circleSpan.length;j++){
				circleSpan[j].className="";
				banImg[j].style.display="none";
			}
			this.className="auto";
			banImg[this.index].style.display="block";
		}
	}
	var move=0;
	setInterval(itself,2000);
	function itself(){
		for(var j=0;j<circleSpan.length;j++){
				circleSpan[j].className="";
				banImg[j].style.display="none";
		}
		move++;
		if(move>circleSpan.length-1){
			move=0;
		}
	    circleSpan[move].className="auto";
	    banImg[move].style.display="block"; 
	}
	
	bannerright.onclick=function(){
		itself();
	}
	bannerleft.onclick=function(){
		for(var j=0;j<circleSpan.length;j++){
			circleSpan[j].className="";
			banImg[j].style.display="none";
		}
		move--;
		if(move<0){
			move=circleSpan.length-1;
		}
		circleSpan[move].className="auto";
	    banImg[move].style.display="block"; 
	}
	//banner结束
	
	var banner2=document.getElementById("banner2");
	var bengin=document.getElementsByClassName("bengin");
	var change=document.getElementById("change");
	var circle2=document.getElementById("circle2");
	var circle2Span=circle2.getElementsByTagName("span");
	var banner2left=document.getElementById("banner2left");
	var banner2right=document.getElementById("banner2right");
	for(var i=0;i<circle2Span.length;i++){
		circle2Span[i].index=i;
		circle2Span[i].onclick=function(){
			bengin.innerHTML=i;
			for(var j=0;j<circle2Span.length;j++){
				circle2Span[j].className="";
				bengin[j].style.display="none";
			}
			this.className="auto";
			bengin[this.index].style.display="block";
		}
		
	}
	var movee=0;
	var yundong=setInterval(itself1,2000);
	function itself1(){
		for(var j=0;j<circle2Span.length;j++){
				circle2Span[j].className="";
				bengin[j].style.display="none";
		}
		movee++;
		change.innerHTML=movee;
		if(movee>circle2Span.length-1){
			movee=0;
		}
	    circle2Span[movee].className="auto";
	    bengin[movee].style.display="block"; 
	    change.innerHTML=movee+1;
	}
	banner2.onmouseover=function(){
		clearInterval(yundong);
	}
	banner2.onmouseout=function(){
	    yundong=setInterval(itself1,2000);
	}
	banner2right.onclick=function(){
		itself1();
	}
	banner2left.onclick=function(){
		for(var j=0;j<circle2Span.length;j++){
			circle2Span[j].className="";
			bengin[j].style.display="none";
		}
		movee--;
		if(movee<0){
			movee=circle2Span.length-1;
		}
		circle2Span[movee].className="auto";
	    bengin[movee].style.display="block"; 
	    change.innerHTML=movee+1;
	}
	
	
	
	
	
}
