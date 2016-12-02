$(function(){
	/*取到导航的class和详细内容显示区的id*/
	var $tab = $('.tab');
	var $content = $('#content');
	var $contentLis = $('li',$content);
	var $tabLis = $('li',$tab);
	var $nowIndex = 0;//记录当前点击的是哪一个导航菜单	
	/*点击导航菜单*/
	$tabLis.on('click',function(){
		$nowIndex = $(this).index();
		$contentLis.eq($nowIndex).addClass('active').siblings().removeClass('active');
		$tabLis.eq($nowIndex).children().find('img').css({opacity:1});
		$tabLis.eq($nowIndex).siblings().children().find('img').css({opacity:0});
		$contentLis.eq($nowIndex).addClass('active').siblings().removeClass('active');
	});
	/*鼠标移入导航时可以显示导航图片*/
	$tabLis.on('mouseenter',function(){
		$tabLis.eq($this).children().find('img').css({opacity:1});
	});
});
