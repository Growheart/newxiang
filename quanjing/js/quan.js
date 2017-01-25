$(function(){
	var a=true;
	$(".dropdown-toggle").mouseover(function(){
		if(a){
				$(".dropdown-menu").show('slow');
			a=false;
		}else{
			$(".dropdown-menu").hide('slow');
			a=true;
		}
	})
	
//	var b=true;
//	$(".xianshi").each(function(index){
//		$(this).click(function(){
//			if(b){
//				$(".fengxiang").eq(index).slideDown('slow');
//				b=false;
//			}else{
//				$(".fengxiang").eq(index).slideUp('slow');
//				b=true;
//			}
//		})
//	})
	
	 
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

  


	
	var app=angular.module('app',['ngRoute']);
		  app.config(['$routeProvider',function($routeProvider){
		  	$routeProvider
		  	  .when('/fenlei',{
		  		templateUrl:'fenlei',
		  		controller:'souController'
		  	  })
		  	  .when('/chuangyi',{
		  	  	templateUrl:'chuangyi',
		  		controller:'chuangController'
		  	  })
		  	  .when('/bianji',{
		  		templateUrl:'bianji',
		  		controller:'bianController'
		  	  })
		  	  .when('/hualang',{
		  		templateUrl:'hualang',
		  		controller:'huaController'
		  	  })
		  	  .when('/taocan',{
		  		templateUrl:'taocan',
		  		controller:'taoController'
		  	  })
		  	  .when('/sheying',{
		  		templateUrl:'sheying',
		  		controller:'sheController'
		  	  })
		  	  .when('/zhuce',{
		  		templateUrl:'zhuce',
		  		controller:'zhuceController'
		  	  })
		  	  .when('/denglu',{
		  		templateUrl:'denglu',
		  		controller:'dengluController'
		  	  })
		  	  .otherwise({//指定默认显示的
		  	  	redirectTo:'/fenlei'
		  	  })
		  	  
		  }])
		  
		  app.controller('souController',['$scope',function($scope){
		  	 $scope.content='fenlei';
		  }])
		  
		  app.controller('chuangController',['$scope',function($scope){
		  	$scope.content='chuangyi';
		  }])
		  
		  app.controller('bianController',['$scope',function($scope){
		  	$scope.content='chuangyi';
		  }])
		  
		  app.controller('huaController',['$scope',function($scope){
		  	$scope.content='chuangyi';
		  }])
		  
		  app.controller('taoController',['$scope',function($scope){
		  	$scope.content='chuangyi';
		  	$scope.datas=[
				{
				   num:10,
       	 	       price:60
				},{
				   num:30,
				   price:55
				},{
				   num:50,
				   price:50
				},{
				   num:100,
				   price:45
				},{
					num:500,
					price:40
				},{
					num:1000,
					price:30
				}
				]
		  	$scope.items=[
				{
				   num:5,
       	 	       price:190
				},{
				   num:10,
				   price:180
				},{
				   num:30,
				   price:170
				},{
				   num:50,
				   price:160
				},{
					num:100,
					price:150
				}
				]
		  	
		  		var canvas=document.getElementById("canvas");
				var _can=canvas.getContext('2d');
				_can.strokeStyle="#CCCCCC";
				_can.lineWidth=1;
				_can.rect(0,0,995,515);
				_can.stroke();
				
				_can.beginPath();
				_can.moveTo(800,0);
				_can.lineTo(995,0);
				_can.lineTo(995,515);
				_can.lineTo(800,515);
				_can.lineTo(700,257);
				_can.lineTo(800,0);
				_can.stroke();
				_can.closePath();
				
				
				
				var canvas1=document.getElementById("canvas1");
				var _vas=canvas1.getContext('2d');
				_vas.strokeStyle="#CCCCCC";
				_vas.rect(0,0,995,515);
				_vas.stroke();
				_vas.beginPath();
				_vas.moveTo(800,0);
				_vas.lineTo(995,0);
				_vas.lineTo(995,515);
				_vas.lineTo(800,515);
				_vas.lineTo(700,257);
				_vas.lineTo(800,0);
				_vas.stroke();
				_vas.closePath();

				

		  }])
		  
		  app.controller('sheController',['$scope',,function($scope){
		  	
		  }])
		  
		  app.factory('MyService',function(){
				return{
					name:'admin',
					password:'admin',
					addFlag:false
				}
		  })
		  
          app.controller('zhuceController',['$scope','MyService',function($scope,MyService){
          	$scope.changezc=MyService;
		  	$scope.zcphone="";
		  	$scope.zcemail="";
		  	$scope.zcpas="";
		  	$scope.zcque="";
		  	var zcphone=document.getElementById("zcphone");
			  	$scope.zhutel=function(telphone){
			  		if(telphone==null){
					  $scope.zcphone='手机号不能为空！';
				    }else if(!(/^1[34578]\d{9}$/.test(telphone))){
					  $scope.zcphone='输入不正确！';
				    }else{
					  $scope.zcphone='√';
					  zcphone.style.color="forestgreen";
				   }
		  	    }
		  	    var zcemail=document.getElementById("zcemail");
		  	    $scope.zhucemail=function(mail){
		  	    	if(mail==null){
					  $scope.zcemail='Email不能为空';
				    }else if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(mail))){
					  $scope.zcemail='Email填写错误';
				    }else{
					  $scope.zcemail='√';
					  zcemail.style.color="forestgreen";
				   }
		  	    }
		  	    var zcpas=document.getElementById("zcpas"); 
		  	    $scope.zhumima=function(pas){
		  	    	if(pas==null){
					  $scope.zcpas='密码不能为空';
				    }else if(!(/^\w+$/.test(pas))){
					  $scope.zcpas='只能输入数字字母和下划线';
				    }else{
						if(pas.length<6){
							$scope.zcpas='密码最少为6位！';
							 
						}else if(pas.length>10){
							$scope.zcpas='密码最多为10位！';
							 
						}else{
							$scope.zcpas='√';
						    zcpas.style.color="forestgreen";
						}
					}
		  	    }
		  	    
		  	    var zcque=document.getElementById("zcque");
		  	    $scope.zhuqueren=function(pass){
		  	    	if(pass==null){
		  	    		$scope.zcque='密码不能为空';
		  	    	}else{
		  	    		if(pass==$scope.pas){
		  	    			$scope.zcque='√';
		  	    			zcque.style.color="forestgreen";
		  	    		}else{
		  	    			$scope.zcque='俩次输入密码不一致，请重新输入';
		  	    		}
		  	    	}
		  	    }
		  	    
		  	    $scope.zhuce=function(telphone,mail,pas,pass){
		  	    	if(telphone!=null&&mail!=null&&pas!=null&&pass!=null){
		  	    		MyService.name=telphone;
		  	    		MyService.password=pas;
		  	    		window.location.href="#denglu"; 
		  	    	}else{
		  	    		alert("重新输入");
		  	    	}
		  	    }
		  	    
		  	    
		  	    
		  }])
          
          app.controller('dengluController',['$scope','MyService',function($scope,MyService){
		  	  $scope.changezc=MyService;
		  	  $scope.user='';
		  	  $scope.dengko='';
		  	  var user=document.getElementById("user");
		  	  var dengko=document.getElementById("dengko");
		  	  $scope.denghu=function(dengyong){
		  	  	  if(dengyong==MyService.name){
		  	  	  	 $scope.user='√';
		  	  	  	 user.style.color="forestgreen";
		  	  	  }else{
		  	  	  	 $scope.user='用户名与之前的不同，请重新输入';
		  	  	  }
		  	  }
		  	  $scope.dengma=function(dengmi){
		  	  	   if(dengmi==MyService.password){
		  	  	  	 $scope.dengko='√';
		  	  	  	 dengko.style.color="forestgreen";
		  	  	  }else{
		  	  	  	 $scope.dengko='密码与之前的不同，请重新输入';
		  	  	  }
		  	  }
		  	var chongxin=document.getElementById("chongxin");
		  	$scope.denglu=function(dengyong,dengmi){
		  		if(dengyong==MyService.name&&dengmi==MyService.password){
		  			window.location.href="#fenlei"; 
		  			chongxin.innerHTML="欢迎您！"+dengyong;
		  		}else{
		  			alert("重新输入");
		  		}
		  	}
		  	
		  	
		  }])