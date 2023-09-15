document.getElementById('copyright-date').innerHTML = (new Date().getFullYear());

/*
 * this function enables users
 * through the contact form 
 * to send offer messages via EmailJS
 */
function sendMail() {

    var params = {
        from_name: document.getElementById('fullname').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('offertype').value,
    };

    emailjs.send('service_6bnphex', 'template_mzd0432', params)
        .then((res) => {
            alert(`Message sent successfully ${res.status}`);
        });
};