$(function(){
	//商品分类
	$('.all-goods .item').hover(function(){
		$(this).addClass('active').find('s').hide();
		$(this).find('.product-wrap').show();
	},function(){
		$(this).removeClass('active').find('s').show();
		$(this).find('.product-wrap').hide();
	});
	});
/*
本代码由素材库收集并编辑整理;
尊重他人劳动成果;
转载请保留素材库链接 - 
*/