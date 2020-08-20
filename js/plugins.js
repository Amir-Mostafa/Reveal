$(window).scroll(function(){
	if($(this).scrollTop()>50)
		$('.navbar-default').css("margin-top",'-80px');
	else
		$('.navbar-default').css("margin-top",'0px');
});


$(window).scroll(function(){
	if($(this).scrollTop()>500)
		$('.small-button').show(1000);
	else
		$('.small-button').hide(1000);
});
$('.small-button').click(function(){
		$('body').animate({scrollTop:0},2000);
});


// color option

	$('.box-color .fa-cog').click(function(){
		$('.box-color .box').toggle(1000);
	});

	$('.box-color .color').click(function(){
		// console.log($(this).attr('data-value'));
		$('link[href*="color"]').attr('href',$(this).attr('data-value'));
		$('.box-color .box').toggle(1000);
	});

// end color option



