function noVowels(strIn) {

  var words = strIn.map(function(word) {
    if (word=== "a" || word === "e" || word=== "i" || word=== "o" || word=== "u"){
      return word = "-"
    } else {
      return word;
    }
  });
  return words;
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sentences = $("#ans1").val().split("");


    $(".result").append("<li>" + noVowels(sentences).join(" ") + "</li>")


    event.preventDefault();
  });
});
