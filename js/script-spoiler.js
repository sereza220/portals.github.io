$(function(){
 $('.spoiler').hide();
$('.spoiler-link').on('click', function(e) {
var idSpoiler = $(this).attr('href'),
 classSelect = 'spoiler-link--active';
$(this).toggleClass(classSelect);
$(idSpoiler).slideToggle(200);
e.preventDefault();
 });
});