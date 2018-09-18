//类名中含有nav的li 元素切换添加here类名
$(document).ready(function(){
	$('li.nav').click(function(){
		$(this).addClass("here");
		$(this).siblings().removeClass("here");
	})
})

//点击全选的checkbox则下面的复选框都选中，
$(function(){
	$("input[name=all]").click(function(){
		if (this.checked){
			$('tbody :checkbox').prop("checked",true);
		}else{
			$("tbody :checkbox").prop("checked",false);
		}
	});
});



//点击在待执行和已执行任务之间切换任务
$(document).ready(function(){
	$('.done').click(function(){
            $(".contentD").show();
            $(".contentC").hide();
	});
	$('.ready').click(function(){
            $(".contentC").show();
            $(".contentD").hide();
	});

})