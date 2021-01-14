$(document).ready(function(){

$('.menu-two li').click(function(){
  $( this ).find( ".content" ).toggle();
});
$('.content li').click(function(){
  alert('Lavori in corso! Questa sezione non è momentaneamente disponibile')
});

// $('.menu-two li').hover(function(){
// $( this ).find( ".content" ).toggle();
// },function(){
// $( this ).find( ".content" ).toggle();
// });

})
// End version checked =^-^=
