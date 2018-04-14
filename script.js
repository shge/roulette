$(function() {

var stage = new Konva.Stage({
  container: 'canvas',   // id of container <div>
  width: 500,
  height: 500
});

var layer = new Konva.Layer();

var circle = new Konva.Circle({
  x: stage.getWidth() / 2,
  y: stage.getHeight() / 2,
  radius: 200,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

layer.add(circle);
stage.add(layer);

/////////////////////////////////////////////////

$('#start').on('click', function() {

  var input = $('#input').val().replace(/^\n/gm, '').replace(/\n$/, '').split('\n'),
      i     = input.length;

  console.log(input);
  console.log(i);



});



}); // $
