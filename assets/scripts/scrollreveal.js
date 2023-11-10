ScrollReveal({
    scale: 0.85,
});

/** General */

ScrollReveal().reveal('header');
ScrollReveal().reveal('.content menu');
ScrollReveal().reveal('.content .mail-toggle');
ScrollReveal().reveal('.navbar .nav-toggle');
ScrollReveal().reveal('.main-footer');

/** Projects */

ScrollReveal().reveal('.projects-item', {
    delay: 250,
    interval: 80,
    useDelay: 'onload',
    distance: '100px',
})
ScrollReveal().reveal('.projects-item:first-child', {
    delay: 100,
    interval: 80,
})

/** Gallery */

ScrollReveal().reveal('.gallery-item', {
    delay: 250,
    interval: 80,
    useDelay: 'onload',
    distance: '100px',
});
ScrollReveal().reveal('.gallery-item:first-child', {
    delay: 0,
    interval: 80,
});

/** About */

ScrollReveal().reveal('.content .about-container .profile-container' , {
    delay: 50,
});
ScrollReveal().reveal('.content .about-container .profile-container .text' , {
    delay: 200,
    distance: '100px',
});
ScrollReveal().reveal('.content .about-container .tech-container' , {
    delay: 100,
});
ScrollReveal().reveal('.content .about-container .tech-container .icons-container' , {
    delay: 150,
});
ScrollReveal().reveal('.content .about-container .tech-container .icons-container img' , {
    delay: 200,
    interval: 100,
    distance: '100px',
});

/** Contact */

ScrollReveal().reveal('.content .contact-container .main-container' , {
    delay: 100,
});
ScrollReveal().reveal('.content .contact-container .main-container .text' , {
    delay: 200,
    distance: '100px',
});
ScrollReveal().reveal('.content .contact-container .social-container' , {
    delay: 200,
});
ScrollReveal().reveal('.content .contact-container .social-container .flex-container a' , {
    delay: 250,
    interval: 100,
    distance: '100px',
});
ScrollReveal().reveal('.content .contact-container .form-container' , {
    delay: 300,
});
ScrollReveal().reveal('.content .contact-container .form-container form' , {
    delay: 400,
    distance: '100px',
});
ScrollReveal().reveal('.content .contact-container .image-container' , {
    delay: 400,
});

/** Project */

ScrollReveal().reveal('.title' , {
    delay: 100,
});
ScrollReveal().reveal('.image' , {
    delay: 150,
    interval: 80,
});
ScrollReveal().reveal('.dual-image' , {
    delay: 150,
    interval: 80,
});