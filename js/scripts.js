
var newWord = [];
var endWord = [];

function buildCons(consenant, wordHold, origWord){

  
for(var i = 0; i < 4; i++){
    console.log(wordHold);
    console.log(consenant.length);

    for(var x = 0; x < consenant.length; x++){

      if(wordHold[0] === consenant[x]){

        var reversed = wordHold.reverse();
        var holdLetter = reversed.pop();
        reversed = reversed.reverse();
      };

    };
    reversed = reversed.join("");
    debugger;
    endWord.push(reversed);
    debugger;
    endWord = endWord + holdLetter;
    console.log(endWord);
    console.log(i);
    debugger;
};

};


$(function(){
  $("#formOne").submit(function(event){
    var userInput =  $("input#sentence").val();
    var words = userInput.split(" ");
    var letters = userInput.split("");
    var vowels = ["a", "e", "i", "o", "u"];
    var consenant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s","t", "v","w", "x", "y", "z"];
    console.log(words[0]);
    var wordHold = words[0];
    var origWord = wordHold;
    wordHold = wordHold.split("");
    buildCons(consenant, wordHold, origWord);

    event.preventDefault();
  });
});


//check for words beggining with vowels
//check for words beggining with qu
