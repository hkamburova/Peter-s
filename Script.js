var greet;
greet = function (event_details) {
    event_details.preventDefault();
    var name = document.getElementById("name").value;
    //var email = document.getElementById ("email").value;
    //alert ('Thank you, ' + name + ". See you in your inbox soon.");

    event_details.target.style.display = 'none';

    var container = document.getElementById('contact-form-container');
    container.innerHTML = "<p>" + name + " has been signed up." + "</p>";

    var tagline = document.getElementById('tagline4');
    tagline.style.color = "red";

};


var form = document.getElementById('signup-form');
form.addEventListener("submit", greet);

