/* ==================== Toggle Icon Navbar ==================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ==================== Scroll Sections Active Link ==================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        }
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ==================== Scroll Reveal ==================== */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .skills-container, .journey-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ==================== Typed JS ==================== */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Software Engineer', 'Web Designer', 'Tech Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* ==================== Read More Functionality ==================== */
const readMoreBtn = document.getElementById('readMoreBtn');
const moreText = document.querySelector('.more-text');

if (readMoreBtn && moreText) {
    readMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        moreText.classList.toggle('show');

        if (moreText.classList.contains('show')) {
            readMoreBtn.innerText = 'Read Less';
        } else {
            readMoreBtn.innerText = 'Read More';
        }
    });
}

/* ==================== EmailJS Contact Form ==================== */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // බොත්තමේ Text එක වෙනස් කරමු User ට පෙනෙන්න
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';

        // EmailJS Service ID සහ Template ID මෙතැනට දාන්න
        const serviceID = 'service_aiv413w'; 
        const templateID = 'template_get13mr';

        emailjs.sendForm(serviceID, templateID, this)
            .then(function() {
                alert('Message Sent Successfully!');
                btn.innerText = originalText;
                contactForm.reset(); // Form එක clear කරනවා
            }, function(error) {
                alert('Failed to send message. Please try again.');
                console.log('FAILED...', error);
                btn.innerText = originalText;
            });
    });
}
