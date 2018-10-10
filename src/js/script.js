document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var sentenceHardcodepunk = ["Here to fuck some code up"];
  var sentenceTerminal = ["Design and destroy"];
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.getElementById("sentence__hardcodepunk").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true" class="textbox__underscore">&#95;</span>';
      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the sentenceHardcodepunk array
  function StartTextAnimation(i) {
    if (typeof sentenceHardcodepunk[i] == 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 20000);
    }

    // check if dataText[i] exists
    if (i < sentenceHardcodepunk[i].length) {
      // text exists! start typewriter animation
      typeWriter(sentenceHardcodepunk[i], 0, function(){
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
