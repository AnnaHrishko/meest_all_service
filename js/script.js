$('.toggle_switch_page .toggle_page').click(function(){
	$('.toggle_switch_page .toggle_page').removeClass('active')
	$(this).addClass('active')
	return false
})