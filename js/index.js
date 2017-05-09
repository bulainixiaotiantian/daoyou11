	
		$(function(){
			
			//适配尺寸调整----------------------------------------
			$('html').css("font-size",$(window).width()/750*100+"px")
				$(window).resize(function(){
				$('html').css("font-size",$(window).width()/750*100+"px")
			});
			
			//侧边栏-------------------------
			function aseid(){
				var $p=$(".aside>p").eq(0);
				var span_1=$p.find("span").eq(0);
				var span_man=$p.find("span").eq(1);
				var span_woman=$p.find("span").eq(2);
				function click_btn(obj,color,status){
					if(status){
						obj.click(function(){
							obj.css({"background":"#fd8f00","color":"#fff"}).siblings().css({"background":color,"color":"#fff"})
						})
					}else{
						obj.click(function(){
							obj.css({"background":"#fd8f00","color":"#fff"}).siblings().css({"background":color,"color":"#000"})
						})
					}
				};
				click_btn(span_1,"#464068",true);
				click_btn(span_man,"#464068",true);
				click_btn(span_woman,"#464068",true);
				click_btn($("#distance"),"#8077bd");
				click_btn($("#head_price"),"#8077bd");
				click_btn($("#rank"),"#8077bd");
			
			};
			
			
			//tabbar跳转路由------------------------------------------
			function selected_tabar(num){
				$(".footer a").eq(num).children(".img1").css("display","none");
				$(".footer a").eq(num).children(".img2").css("display","block");
				$(".footer a").eq(num).css("color","#fff")
			}
			
			footer_button();
			//-------------------------------控制首页底部四个按钮------------------------------------------
			function footer_button(){
				function getNode(name){
				
					$(this).parent().siblings().find(".img1");
				}

				//$(".footer a").eq(0).children(".img1").css("display","none");
				//$(".footer a").eq(0).children(".img2").css("display","block");
				//$(".footer a").eq(0).css("color","#fff")
			
				$(".footer a").each(function(i){
					$(this).attr("index",0);//让每一个a有个属性index等于0
					
					$(this).click(function(){
						
						var _img1=$(this).children(".img1");//找到子级img1
						var _img2=$(this).children(".img2");//找到子级img2
						
						var sib_img1=$(this).parent().siblings().find(".img1");//找到另外两个的img1
						var sib_img2=$(this).parent().siblings().find(".img2");//找到另外两个的img2
						var sib_text=$(this).parent().siblings().find("a");//找到另外两个的a
						
						function all(){
							sib_img1.css("display","block");
							sib_img2.css("display","none");
						};
							
						if($(this).attr("index")==0){//a的属性index等于0让img1隐藏，img2显示
							_img1.css("display","none");
							_img2.css("display","block");
							$(this).css("color","#fff").attr("index",1);//改变a的index属性为1；
							all();					//让其他两个按钮为（默认样式）没被点击时的样式
							sib_text.css("color","#464068");
							$(this).parent().siblings().children().attr("index",0);
						}else if($(this).attr("index")==1){//a的属性index等于1让img2隐藏，img1显示
							all();
							$(this).css("color","#464068").attr("index",0);
						};
						console.log($(this).attr("index"));

					});
				});
			
			}
				
			//-----------------------------------------------------------------------
			
		});
	