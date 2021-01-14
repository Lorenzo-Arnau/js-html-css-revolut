$(document).ready(function(){

$('.menu-two li').click(function(){
  $( this ).find( ".content" ).toggle();
});
$('.menu-two li').hover(function(){
$( this ).find( ".content" ).toggle();
},function(){
$( this ).find( ".content" ).toggle();  
});




})
