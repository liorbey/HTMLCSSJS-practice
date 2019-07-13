$(document).ready(function() {

    $('.color-choose input').on('click', function() {
        var headphonesColor = $(this).attr('data-image');
  
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
        $(this).addClass('active');
    });
  
  });

$(function(){
  $('#giflist li a img').hover(function(){
    // on mouse enter
    var customdata = $(this).parent().attr('href');
    $(this).attr('src',customdata); 
  }, function(){
    // on mouse leave
    $(this).attr('src',$(this).attr('data-orig'));
  });
});