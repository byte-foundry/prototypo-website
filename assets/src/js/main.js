$(function(){
  
  $('#toggleMainNav').on('click',function(){
    $('body').toggleClass('js-showMainNav');
    $(this).toggleClass('active');
  });
  
});