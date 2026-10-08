const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thanks! Your message has been received.");

    form.reset();

});