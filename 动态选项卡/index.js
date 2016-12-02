$(function(){
	var $tab = $('.tab');
	var $content = $('#content');
	var $contentLis = $('li',$content);
	var $tabLis = $('li',$tab);
	var $nowIndex = 0;
	$tabLis.on('click',function(){
		$nowIndex = $(this).index();
		$contentLis.eq($nowIndex).addClass('active').siblings().removeClass('active');
	});
})();