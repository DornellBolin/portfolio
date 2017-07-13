function submitcontactform() {
    var x = document.forms["contactForm"]["email"].value;
    if (x == "") {
        alert("email must be filled out");
        return false;
    } else {
        alert('Thank you for submitting the form');
    }
}