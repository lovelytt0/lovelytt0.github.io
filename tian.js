$('.image-toggler').click(function(){
  $('.image-toggle').hide();
  $($(this).attr('data-image-id')).show();
});
