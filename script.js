$(function() {

// Header
$('#nav').load('../nav.html?201804062022');

$('#start').on('click', function() {

  var input = $('#input').val().replace(/^\n/gm, '').replace(/\n$/, '').split('\n'),
      i     = input.length;

  console.log(input);
  console.log(i);



});



}); // $
