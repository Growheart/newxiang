window.onload=function(){
//	var canvas=document.getElementById("canvas");
//	var _can=canvas.getContext('2d');
//	_can.strokeStyle="#CCCCCC";
//	_can.lineWidth=1;
//	_can.rect(0,0,995,515);
//	_can.stroke();
//	
//	_can.beginPath();
//	_can.moveTo(800,0);
//	_can.lineTo(995,0);
//	_can.lineTo(995,515);
//	_can.lineTo(800,515);
//	_can.lineTo(700,257);
//	_can.lineTo(800,0);
//	_can.stroke();
//	_can.closePath();
//	
//	
//	
//	var canvas1=document.getElementById("canvas1");
//	var _vas=canvas1.getContext('2d');
//	_vas.strokeStyle="#CCCCCC";
//	_vas.rect(0,0,995,515);
//	_vas.stroke();
//	_vas.beginPath();
//	_vas.moveTo(800,0);
//	_vas.lineTo(995,0);
//	_vas.lineTo(995,515);
//	_vas.lineTo(800,515);
//	_vas.lineTo(700,257);
//	_vas.lineTo(800,0);
//	_vas.stroke();
//	_vas.closePath();
	
	
}
$(function(){
	$(".tongji").each(function(index){
		$(this).click(function(){
				$("input").eq(index).attr("checked","true").siblings().removeAttr("checked","false");
			    $(this).addClass("tongtong").siblings().removeClass("tongtong");
		})
	})
	
	$(".xiantong").each(function(index){
		$(this).click(function(){
				$("input").eq(index).attr("checked","true").siblings().removeAttr("checked","false");
			    $(this).addClass("tongtong").siblings().removeClass("tongtong");
		})
	})
})