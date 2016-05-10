var greet = function (event_details) {
    var name = document.getElementById ("name").value;
    var email = document.getElementById ("email").value;
    alert ('Thank you, ' + name + ". See you in your inbox soon.");
    event_details.preventDefault();

};

var form = document.getElementById('signup-form');
form.addEventListener ("submit", greet);


