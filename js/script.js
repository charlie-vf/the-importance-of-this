$("button").mouseenter(function() {
    $(this).removeClass("makeRed").addClass("makeBlue");
})

$("button").mouseleave(function() {
    $(this).removeClass("makeBlue").addClass("makeRed");
})



// when we click on an element with the box class
// this event will be fired

// $("document").ready(function() {
//     $(".box").on("click", function() {
//         var classNames = $(this).attr("class").split(" ");
//         $("." + classNames[1]).css("background-color", "red");
//     })
// })

// ^^^^^^^^^
// Our elements have two classes. This means our classNames variable is 
// assigned to a string containing both classes, box and 1.
// In order for this function to work, we need to split the string 'box 1' 
// wherever we encounter a space.
// So we achieve this using split().
// This will give us an array containing two strings.
// The first string will be box and the second one will be 1.

$("document").ready(function() {
    $(".box").on("click", function() {
        // We've also created the boxClass and className variables.
        // We use these variables to store each string in our classNames array.
        // boxClass is equal to box.
        // className is equal to the number class on that element, 
        // which could be 1, 2 or 3.
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            // if this object is already red, turn it black
            $("." + className).css("background-color", "#000");
        }
        else {
            // turn all elements with a boxClass black and then change the 
            // color of all elements with the same className as the clicked 
            // element to red.
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});