
$(document).ready(function(){
	$('li.nav').click(function(){
		$(this).addClass("here");
		$(this).siblings().removeClass("here");
	})
})

//含有nav的li 元素切换添加here类名

$(function(){
	$("input[name=all]").click(function(){
		if (this.checked){
			$('tbody :checkbox').prop("checked",true);
		}else{
			$("tbody :checkbox").prop("checked",false);
		}
	});
});

// 点击待执行和已执行按钮之间进行切换。
$(document).ready(function(){
	$('.')
})