$(function(){
  
  $('#toggleMainNav').on('click',function(){
    $('body').toggleClass('js-showMainNav');
    $(this).toggleClass('active');
  });
  
  $('.Question-header').on('click',function(){
    $(this).parent().find('.Question-content').slideToggle(200);
  });
});