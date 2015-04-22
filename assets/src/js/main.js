$(function(){
  
  $('#toggleMainNav').on('click',function(){
    $('body').toggleClass('js-showMainNav');
    $(this).toggleClass('active');
  });
  
  $('.Question-header').not('.Question-anchor').on('click',function(){
    $(this).parent().find('.Question-content').slideToggle(200);
  });
  
  
  $('.Question-anchor').on('click',function(){
    window.location.reload();
  });
  
  
  function FAQ__checkIfAnchorToQuestion() {
    if(window.location.hash) {
      if (!$(window.location.hash).hasClass('focus')) {
        $('.Question').removeClass('focus');
        $(window.location.hash).addClass('focus').find('.Question-header').trigger('click');
      }
    }
  }
  
  FAQ__checkIfAnchorToQuestion();
});