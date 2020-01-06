function sendContact() {
     console.log("hello", document.getElementsByTagName('form')[0]);
    var formData = new FormData(document.getElementsByTagName('form')[0]);
    var lastName = formData.get('lastName');
    var firstName = formData.get('firstName');
    var email = formData.get('email');
    var message = formData.get('message');
    window.open('mailto:' + email + '?subject=request from ' + firstName + ' ' + lastName +'&body=' + message);

}
