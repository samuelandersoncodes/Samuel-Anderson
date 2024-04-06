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

// Closes offcanvas when nav link is clicked
document.querySelectorAll('.navigation .nav-link').forEach(item => {
    item.addEventListener('click', () => {
        var offcanvasElement = document.querySelector('.offcanvas');
        var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        offcanvas.hide();
    });
});

// Highlights nav active items
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        // Explicitly check if scroll position is at the top of the page
        if (pageYOffset === 0) {
            current = "header";
        } else {
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute("id");
                }
            });
        }

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === current) {
                link.classList.add("active");
            }
        });
    });
});
