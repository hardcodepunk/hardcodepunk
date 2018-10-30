document.addEventListener('DOMContentLoaded',function(event){

  /*
   * typewriter animation text
   */

  var sentenceHardcodepunk = ["Here to fuck some code up"];
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.getElementById("sentence__hardcodepunk").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true" class="textbox__underscore">&#95;</span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
  function StartTextAnimation(i) {
    if (typeof sentenceHardcodepunk[i] == 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 20000);
    }

    if (i < sentenceHardcodepunk[i].length) {
      typeWriter(sentenceHardcodepunk[i], 0, function(){
        StartTextAnimation(i + 1);
      });
    }
  }

  StartTextAnimation(0);

  /*
   * toggle
   */

  var toggle = function (elem) {
  	elem.classList.toggle('is-displayed');
  };

  document.addEventListener('click', function (event) {
    var clickedElement = event.target;

  	if (!clickedElement.classList.contains('js-toggle')) return;

    clickedElement.classList.toggle('is-active');

    if (clickedElement.classList.contains('is-active')) {
      clickedElement.innerHTML = "Hide synopsis";
    } else {
      clickedElement.innerHTML = "View synopsis";
    }

  	event.preventDefault();

  	var content = document.querySelector(clickedElement.hash);
  	if (!content) return;

  	toggle(content);

  }, false);

  /*
   * scroll to bottom
   */

  (function() {
    'use strict';

    var btnScrollDown = document.querySelector('#scroll-to-contact');

    function scrollDown() {
      window.scrollTo(0,document.body.scrollHeight);
    }

    btnScrollDown.addEventListener('click', scrollDown);
  })();
});
