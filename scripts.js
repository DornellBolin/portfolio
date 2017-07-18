$(document).ready(function () {

    $('#ContactForm').on('submit', submitContactForm);

});
function submitContactForm() {
    event.preventDefault();
    var x = document.forms["ContactForm"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    } else {
        $(this).fadeOut();
        $("#success").fadeIn();
        //  alert('Thank you for submitting the form');
    }
}