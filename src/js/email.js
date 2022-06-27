
    function sendEmail() {
        Email.send({
            SecureToken : "b91d8002-03a2-4f06-a382-c1a95e4a1ae6",
            To : 'cleidianeloy@hotmail.com',
            From : "cleidianeloy@hotmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
	}
