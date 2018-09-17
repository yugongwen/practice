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

//全选按钮选中就全选，没选中就不全选

$(function(){
	$("input[name=all]").click(function(){
		if (this.checked){
			$('tbody :checkbox').prop("checked",true);
		}else{
			$("tbody :checkbox").prop("checked",false);
		}
	});
});

// 点击待执行和已执行按钮之间进行切换