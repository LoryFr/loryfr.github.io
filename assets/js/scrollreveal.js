/** General */

ScrollReveal({
    reset: true,
    scale: 0.85,
});

ScrollReveal().reveal('header');
ScrollReveal().reveal('.content menu');
ScrollReveal().reveal('.navbar .nav-toggle');

/** Projects */

ScrollReveal().reveal('.projects-item', {
    delay: 250,
    interval: 80,
    useDelay: 'onload',
    reset: false,
    distance: '100px',
})
ScrollReveal().reveal('.projects-item:first-child', {
    delay: 0,
    interval: 80,
})

/** Gallery */

ScrollReveal().reveal('.gallery-item', {
    delay: 250,
    interval: 80,
    useDelay: 'onload',
    reset: false,
    distance: '100px',
});
ScrollReveal().reveal('.gallery-item:first-child', {
    delay: 0,
    interval: 80,
});

/** About */

ScrollReveal().reveal('.content .grid-container .profile-container' , {
    delay: 50,
});
ScrollReveal().reveal('.content .grid-container .profile-container .text' , {
    delay: 200,
    distance: '100px',
});
ScrollReveal().reveal('.content .grid-container .tech-container' , {
    delay: 100,
});
ScrollReveal().reveal('.content .grid-container .tech-container .icons-container' , {
    delay: 150,
});
ScrollReveal().reveal('.content .grid-container .tech-container .icons-container img' , {
    delay: 200,
    interval: 100,
    distance: '100px',
});

/** Contact */

ScrollReveal().reveal('.content .grid-container .main-container' , {
    delay: 100,
});
ScrollReveal().reveal('.content .grid-container .main-container .text' , {
    delay: 200,
    distance: '100px',
});
ScrollReveal().reveal('.content .grid-container .social-container' , {
    delay: 200,
});
ScrollReveal().reveal('.content .grid-container .social-container .flex-container a' , {
    delay: 250,
    interval: 100,
    distance: '100px',
});
ScrollReveal().reveal('.content .grid-container .form-container' , {
    delay: 300,
});
ScrollReveal().reveal('.content .grid-container .form-container form' , {
    delay: 400,
    distance: '100px',
});
ScrollReveal().reveal('.content .grid-container .image-container' , {
    delay: 400,
});

/** Project */

ScrollReveal().reveal('.title' , {
    delay: 100,
    reset: false,
});
ScrollReveal().reveal('.image' , {
    delay: 150,
    interval: 80,
    reset: false,
});
ScrollReveal().reveal('.dual-image' , {
    delay: 150,
    interval: 80,
    reset: false,
});