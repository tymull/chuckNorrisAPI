//$ says go find doc, then use ready event to execute this function
$(document).ready(function() {
  var submitButton = $("#nameSubmit");
  console.log(submitButton);
  $("#nameSubmit").click(function(e) {
    /*could also have made a function var "click" and passed click into .click
    instead of function(e)*/
    e.preventDefault();
    var value = $("#firstNameInput").val();

    console.log(value);

    var myurl= "http://api.icndb.com/jokes/random?firstName=" + value +
"&amp;lastName=";
	  $.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {
		      console.log(json);
          var results = "";
		      results += '<p>' + json.value.joke + "</p>";

		      $("#nameResults").html(results);
	    }
	  });
  });
});

$(document).ready(function() {
  var submitButton = $("#chuckSubmit");
  console.log(submitButton);
  $("#chuckSubmit").click(function(e) {
    /*could also have made a function var "click" and passed click into .click
    instead of function(e)*/
    e.preventDefault();
    var myurl= "http://api.icndb.com/jokes/random";
 //+ value;
	  $.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {
		      console.log(json);
          var results = "";

		          results +=  "<p>" + json.value.joke + "</p>";
          $("#chuckResults").html(results);
	    }
	  });
  });
});
