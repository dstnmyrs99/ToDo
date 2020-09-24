let item = '';
const add = $('.addItemInput');
const trash = '<span><i class="far fa-trash-alt" id="trash"></i></span>'

$('.add').on('click', function(){
  $(this).fadeOut(100).fadeIn(100);
  add.toggle();
})

add.on('keyup', function(key){
  if(key.which == 13){
    item = $(this).val();
    $('.body').append('<P>' + item + trash + '</p>');
    $(this).val('');
  }
})

$(document).on('click', 'p', function(){
  $(this).toggleClass('crossed');
})

$(document).on('click', 'span', function(){
  $(this).parent().remove();
})
