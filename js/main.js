$(function(){
  var pageSize = $(window).width();
  var mobileSize = 576;
  $('#page-top').hide();
  if (pageSize <= mobileSize) {
    var pageTop = $('#page-top')
    $('#page-top').show();
    $('#page-top').click(function(){
      $('html, body').animate({ scrollTop: 0 }, 200);
      if ($(this).scrolltop() > 100) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    })
  };
});