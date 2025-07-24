       document.getElementById('contact-form').addEventListener('submit', function(event)) {
    var nameInput = document.getElementById('name').value.trim();
    var emailInput = document.getElementById('email').value.trim();
    var messageInput = document.getElementById('message').value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern

    if (nameInput === '') {
        alert('Please enter your name.');
        event.preventDefault();
    } else if (!emailPattern.test(emailInput)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    } else if (messageInput === '') {
        alert('Please enter your message.');
        event.preventDefault();
    }
}

    document.getElementById('contact-form').addEventListener('submit', function(event))
     {
        event.preventDefault();

        var formData = new FormData(this);
        var actionUrl = this.getAttribute('action'); // Dynamically get the action URL

        var xhr = new XMLHttpRequest();
        xhr.open('POST', actionUrl, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                alert('Email sent successfully!');
            } else {
                alert('An error occurred while sending the email.');
            }
        };
        xhr.send(formData);};