var projects = [
    {
        "name": "Shop project"

    }
];


 

$(document).ready(function () {
    var backgroundImages = [
        '1.gif',
        '2.gif',
        '3.gif'
    ];
    var i = 0;
    setInterval(function () {
        console.log(backgroundImages[i]);
        $("body").css('background-image', 'url("' + backgroundImages[i] + '")');
        i = i + 1;
        if (i == 3) {
            i = 0;
        } 
    }, 5000);

    $.each(projects, function (index, project) {
        console.log(project);
        $('#projects').append('<a href="#"' + project.name + '</a>');
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


