// Note: See http://blog.garstasio.com/you-dont-need-jquery/ and http://youmightnotneedjquery.com/ for JS commands that don't require jQuery
$(document).ready(function(){

	$('.feed_header_search_open').click(function(e){
		e.preventDefault();
		$('.feed_header_search_field').focus();
	});


	$('.goto_feed_button').click(function(e){
		e.preventDefault();
		$('.feed').addClass('active')
	});

	$('.goto_chat_button').click(function(e){
		e.preventDefault();
		$('.feed').removeClass('active')
	});

});
