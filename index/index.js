		/**
		*开关 begin
		**/
		var pageOf={
					"bannerInterval":10000
		}
		/**
		*开关 end
		**/

		window.onload = function () {
		  //  appendTeamUser();
			//	scrollPic();
				initClass.initBanner();
				initClass.initScrollPic();
		}
		window.onscroll = function (){
				
		}
		
		/**
		*页面参数
		**/
		var pageParams={
			"bannerIndex":1  //记录当下banner下标
		}
		
		/**
		*初始化类 begin
		**/
		var initClass={
			 initBanner:function (){
				var bannerObj = banners[0];
				var urlName =  bannerObj.urlName;
				$("#banner").css("backgroundImage","url('index/img/bg/"+urlName+"')");
				$("#bannerTitle").html(bannerObj.title);
				$("#bannerText").html(bannerObj.text);
				setInterval("toolsClass.showBanner()",pageOf.bannerInterval);
			},
			initScrollPic:function(){
				toolsClass.appendTeamUser("teamUserUl");
				toolsClass.createScrollPic("scrollPic","LeftArr","RightArr");
			}
		}
		/**
		*初始化类 end
		**/
		
		/**
		*工具类 begin
		**/
		var toolsClass={
			showBanner:function (){
				var bannerObj = banners[pageParams.bannerIndex];
				var urlName =  bannerObj.urlName;
				$("#banner").css("backgroundImage","url('index/img/bg/"+urlName+"')");
				$("#bannerTitle").html(bannerObj.title);
				$("#bannerText").html(bannerObj.text);
				
				pageParams.bannerIndex++;
				if(pageParams.bannerIndex==banners.length){
					pageParams.bannerIndex=0;
				}
			},
			appendTeamUser:function(appendDivId){
					$.each(users,function(index,obj){
						var html='<li>'+
												 '<div class="teamDiv">'+
															'<div class="teamBodyDiv">'+
																'<div><img class="teamimg" src="index/img/team/'+obj.imgName+'" alt=""/></div>'+
																'<div class="teamUserName">'+obj.userName+'</div>'+
																'<div class="teamUserDesc">'+obj.userDesc+'</div>'+
															'</div>'+
															'<div><a href="https://github.com/'+obj.githubId+'"><img class="githubimg" src="index/img/logo/github.png"></img></a></div>'+
													'</div>'+
						            '</li>';
						$("#"+appendDivId).append(html);	
					})
				},
				createScrollPic:function(scrollContId,arrLeftId,arrRightId){
				    var scrollPic = new ScrollPic();
				    scrollPic.scrollContId   = scrollContId; //内容容器ID
				    scrollPic.arrLeftId      = arrLeftId;//左箭头ID
				    scrollPic.arrRightId     = arrRightId; //右箭头ID

				    scrollPic.frameWidth     = 800;//显示框宽度
				    //scrollPic.frameWidth     = document.body.clientWidth;
				    scrollPic.pageWidth      = 250; //翻页宽度

				    scrollPic.speed          = 10; //移动速度(单位毫秒，越小越快)
				    scrollPic.space          = 10; //每次移动像素(单位px，越大越快)
				    scrollPic.autoPlay       = false; //自动播放
				    scrollPic.autoPlayTime   = 300; //自动播放间隔时间(秒)

				    scrollPic.initialize(); //初始化
				}
				
		}
		/**
		*工具类 end
		**/
			
			
		/**
		*图片滚动
		*/
	/**	
		
		function logoChange(){
			var stop = document.documentElement.scrollTop || document.body.scrollTop;
			
			if(stop >= 30 ){
				
			}else{				
			}
	
		}
		
		**/
		
		
		