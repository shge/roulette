$(function() {

// var stage = new Konva.Stage({
//   container: 'canvas',   // id of container <div>
//   width: 500,
//   height: 500
// });
//
// var layer = new Konva.Layer();
//
// var circle = new Konva.Circle({
//   x: stage.getWidth() / 2,
//   y: stage.getHeight() / 2,
//   radius: 200,
//   fill: 'red',
//   stroke: 'black',
//   strokeWidth: 4
// });
//
// layer.add(circle);
// stage.add(layer);

/////////////////////////////////////////////////

$('#start').on('click', function() {

  var input = $('#input').val().replace(/^\n/gm, '').replace(/\n$/, '').split('\n');

  console.log('input: ' + input);
  $('#output').css('font-weight', 'normal');
  $('#output').css('color', 'black');

  (function myLoop (i) {
     setTimeout(function () {

        var random = input[Math.floor(Math.random() * input.length)];
        $('#output').text(random);
        console.log(random);

        if (--i) myLoop(i);     //  decrement i and call myLoop again if i > 0
        if (i === 0) {
          $('#output').css('font-weight', 'bold');
          $('#output').css('color', 'red');
        }
     }, 50);
  })(50);





});



}); // $
