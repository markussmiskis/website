$(function() {
  var words = ["Greetings!", "Hey!", "Welcome!", "Hello!", "Ahoy!"];
  i = 0;
  setInterval(function() {
    $('#title').fadeOut(function() {
      $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    });
  }, 3000)
})