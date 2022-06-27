function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "testecleidiane@gmail.com",
        Password : "D902096034386AF75795EA91AD6B8191E280",
        To : 'cleidianeloy@hotmail.com',
        From : "cleidianeloy@hotmail.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
    }