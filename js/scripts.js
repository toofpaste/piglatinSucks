function translate(str) {
     str=str.toLowerCase();
     var n =str.search(/[aeiuo]/);
     console.log(n);
     switch (n){
       case 0: str = str+"way"; break;
       case -1: str = str+"ay"; break;
       default :
         //str= str.substr(n)+str.substr(0,n)+"ay";
         str=str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
       break;
    }
    return str;

}

$(function(){
  $("#formOne").submit(function(event){


    
    var userInput =  $("input#sentence").val();
    var words = userInput.split(" ");
    var sentence = [];
    words.forEach(function(word){
      sentence.push(translate(word));
    });
    var print = sentence.join(" ");
    console.log(print);

    event.preventDefault();
  });
});


//check for words beggining with vowels
//check for words beggining with qu
