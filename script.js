
// Welcome message when the website opens
alert("Welcome to my Personal Portfolio Website!");

// Function for Click Me button
function showMessage() {
    alert("Thank you for visiting my portfolio!");
}
// jQuery code
$(document).ready(function() {

    $("h1").click(function() {
        $(this).css("color", "red");
    });

});