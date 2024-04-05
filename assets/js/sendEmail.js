function sendEmail(contactform) {
    emailjs.send("service_zmrd726","AndreasParides",{
        "from_name": contactform.name.value,
        "project_request": contactform.projectsummary.value,
        "from_email": contactform.emailaddress.value,
        })
        .then(function(response) {
            console.log('SUCCESS', response);
            alert("Your message has been sent successfully!");
        },
        function(error) {
            console.log('FAILED', error);
            alert("Your message was not sent. Please try again later.");
        });
    return false;
}