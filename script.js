function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

$('.random').on('click', function(){
  $('body').css("background-color", randomColor);
});
