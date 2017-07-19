var projects =[
    {
        "name": "Shop project"  
        "link": "file:///C:/Users/Dornell%20bolin/Helium-Clothing/helium.html "
    }
];


$(document).ready(function () {

$.each(projects, function(index, project){
    console.log(project);
    $('#projects').append('<a href="#"'+ project.name + '</a>' );
});
    
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