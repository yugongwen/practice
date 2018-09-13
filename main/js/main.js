//今日和全部的导航切换
$(document).ready(function(){
	$('.tableOpreation ul li').click(function(){
		$(this).addClass("here");
		$(this).siblings().removeClass("here");
	})
})

//待执行任务导航切换

$(document).ready(function(){
	$('.navbar ul li').click(function(){
		$(this).addClass("here");
		$(this).siblings().removeClass("here");
	})
})