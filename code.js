$(document).ready(
    function() {
//I need to find a way to output the three ranks
        // I will have to have the output be dynamic with Hello hard coded, dynamic rank, dynamic first, dynamic last
        // I will have to out put the color for the test using the data-color and .css functionality of js
        //the submit button will have to be within the document ready function as I dont wan this to run before that

        $("button").on("click", outputStuff);


    });

function outputStuff(){

    let rankSelection = $("input[name=rank]:checked").data("abbr");
    let rankColor = $("input[name=rank]:checked").data("color");
    let firstName = $("input[name=first]").val();
    let lastName = $("input[name=last]").val();

    $("p#output").text(`Hello, ${rankSelection}. ${firstName} ${lastName}`);
    $("p#output").css("color", rankColor);



}

