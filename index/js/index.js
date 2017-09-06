		/**
		*===================================全局页面/开关===================================
		**/
		var pageOf={
					"bannerInterval":10000,
					"style-color":"#1ab394"
		}
		/**
		*开关 end
		**/

		window.onload = function () {
			
				var mc = new mobleClass();
				mc.bindClick();
				/**
				*菜单变化
				*/
				toolsClass.menuOnscroll();
				/**
				*海报init
				*/
				initClass.initBanner();
				initClass.initScrollPic();
				/**
				*页面图片懒加载
				*/
				toolsClass.imgLazy();
		}
		
		window.onresize =  function () {
				/**
				*菜单变化
				*/
				toolsClass.menuOnscroll();
		}
		
		window.onscroll = function (){
				/**
				*菜单变化
				*/
				toolsClass.menuOnscroll();
				
				/**
				*页面图片懒加载
				*/
				toolsClass.imgLazy();
		}
		
		/**
		*===================================页面参数===================================
		**/
		var pageParams={
			"bannerIndex":-1,     //记录当下banner下标
			"bannerIntervalId":null, //banner时间运算对象
			"logoChangeIntervalTime":20, //logo计算函数：变化间隔时间
			"imgLazyOnscrollHeight":0 //存储:懒加载图片加载到的位置，避免每次都从第一张图片开始遍历
		}
		
		/**
		*===================================初始化类 begin===================================
		**/
		var initClass={
			initBanner:function (){
			 	userClass.showBannerRight();
				pageParams.bannerIntervalId = setInterval("userClass.showBannerRight()",pageOf.bannerInterval);
			},
			initScrollPic:function(){
				toolsClass.appendTeamUser("teamUserUl");
				toolsClass.createScrollPic("scrollPic","LeftArr","RightArr");
			}
		}
		
		
		/**
		*===================================用户操作 begin===================================
		**/
		var userClass={
				showBannerLeft(){
					pageParams.bannerIndex--;
					if(pageParams.bannerIndex<0){
						pageParams.bannerIndex=banners.length-1;
					}
					toolsClass.showBanner();
				},
				showBannerRight(){
					pageParams.bannerIndex++;
					if(pageParams.bannerIndex==banners.length){
						pageParams.bannerIndex=0;
					}
					toolsClass.showBanner();
				},
				openDatasEjectDiv(_index,thisObj){
					alert(9);
					/**
					*	其它td css还原
					*/
					var tds = $("td[name='showDatasTd']");
					var extendsShow = false; //是否有在查看的
					$.each(tds,function(_index,_obj){
						
							if(_obj.style.color){
								extendsShow =true; //存在样式则视为用户有点击其中一个查看
							}
							
							if(_obj!=thisObj){
										_obj.style.color="";
							}
					});
					
					/**
					**动作判断
					*/
					var isShow = "show";
					if(!thisObj.style.color){
						thisObj.style.color= pageOf["style-color"];
						isShow = "show";
					}else{
						thisObj.style.color="";
						isShow = "close";
					}
					
					alert(isShow);
					
					if("close"==isShow){
						$("#showDatasEjectImgDiv").slideUp("slow");
					}
					
					if("show"==isShow){
						
						var waitTime = 1; 
						if(extendsShow){
							$("#showDatasEjectImgDiv").slideUp("slow");
							/**有查看的则需要关闭时间，没有查看的直接打开**/
							waitTime = 700;
						}
						
						setTimeout(function(){
								$("#showDatasEjectImgDiv").html("");
								var showData = showDatas[_index];
								var showHeight = showData["h"];
								var imgNames = showData["imgs"].split(",");
								$.each(imgNames,function(index,value){
											var div = document.createElement("div");
											var img = document.createElement("img");
											img.src="index\\img\\datas\\"+value;
											div.append(img);
											$("#showDatasEjectImgDiv").append(div);
								});
								$("#showDatasEjectImgDiv").slideDown("slow").animate({height:showHeight});
							
							},waitTime);
					}
					
				},
				menuScrollMove(_id){
						$("html,body").animate({scrollTop: $("#"+_id).offset().top-80}, 1000);	
				}
		}
		/**
		*用户操作 end
		**/
		
		
		/**
		*===================================工具类 begin===================================
		**/
		var toolsClass={
			showBanner:function(){
				var bannerObj = banners[pageParams.bannerIndex];
				var urlName =  bannerObj.urlName;
				$("#banner").css("backgroundImage","url('index/img/bg/"+urlName+"')");
				$("#bannerTitle").html(bannerObj.title);
				$("#bannerText").html(bannerObj.text);
			},
			appendTeamUser:function(appendDivId){
					$.each(users,function(index,obj){
						var html='<li>'+
												 '<div class="teamDiv">'+
															'<div class="teamBodyDiv">'+
																'<div><img class="teamimg" src="" imgLazy-src="index/img/team/'+obj.imgName+'" alt=""/></div>'+
																'<div class="teamUserName">'+obj.userName+'</div>'+
																'<div><a href="https://github.com/'+obj.githubId+'"><img class="githubimg" src="index/img/logo/github.png" imgLazy-src="index/img/logo/github.png"></img></a></div>'+
																'<div class="teamUserDesc">'+obj.userDesc+'</div>'+
															'</div>'+
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
				,menuOnscroll:function(){
					
					//小于最小宽度  
					var hidnWidth = document.documentElement.scrollWidth || document.body.scrollWidth; 
					if(hidnWidth <= 1303){
						$("#menuDown").show();
						$("#menu").hide();
					}else{
						thisHeightChange();
					}
					
					function thisHeightChange(){
							var stop = document.documentElement.scrollTop || document.body.scrollTop;
				
							var hidnHeight = 50; //隐藏触发高度
							
							if( stop >= hidnHeight){
								$("#menu").slideUp("slow");
								$("#menuDown").slideDown("slow");
							}else if(stop < hidnHeight){	
								$("#menuDown").slideUp("slow");
								$("#menu").slideDown("slow");
							}
					}
					
				},
				imgLazy(){
	        var aImg = document.querySelectorAll('img');
	        var len = aImg.length;
					/**图片懒加载*/	
					  var seeHeight = document.documentElement.clientHeight;
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            for (var i = pageParams.imgLazyOnscrollHeight; i < len; i++) {
                if (aImg[i].offsetTop < seeHeight + scrollTop) {
                    if (aImg[i].getAttribute('src') == '') {
                        aImg[i].src = aImg[i].getAttribute('imgLazy-src');
                    }
                    pageParams.imgLazyOnscrollHeight = i + 1;
                   // console.log('n = ' + pageParams.imgLazyOnscrollHeight);
                }
            }
				}
				
		};
		/**
		*工具类 end
		**/
		
		/**
		*移动端处理 begin
		**/
		var  mobleClass = function (){
				
				this.bindClick=function(){
						var showDatasIndex =  $("td[name='showDatasTd']").length;
						
						while (showDatasIndex>0)
					  {
					  		showDatasIndex--;
					 			 var id = "showDatasTd_"+showDatasIndex;
					 			 document.getElementById(id).addEventListener( "click", function(){
					 			 		var _index = this.id.substring(this.id.indexOf("_")+1);
										userClass.openDatasEjectDiv(_index,this);
								},false); 
					  }
											
						
				}	;
			
		};
			/**
		*移动端处理 end
		**/
		
		
		
		
		