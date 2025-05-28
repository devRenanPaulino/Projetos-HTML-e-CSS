document.getElementById('downloadCV').onclick = function(e) {
  e.preventDefault();
  const link = document.createElement('a');
  link.href = './assets/curriculo-renan.pdf'; 
  link.download = 'Curriculo-Renan-Paulino.pdf'; 
  link.click();
};

ScrollReveal().reveal('.text-content', {
    origin: 'left',
    distance: '60px',
    duration: 1000,
    delay: 100,
    reset: false
});

ScrollReveal().reveal('.photo', {
    origin: 'right',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

ScrollReveal().reveal(".moreh2", {
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 200,
    reset: false
})

ScrollReveal().reveal(".morep", {
    origin: 'left',
    distance: '30px',
    duration: 1000,
    delay: 200,
    reset: false
})

ScrollReveal().reveal('.sobreh3', {
    interval: 100,
    origin: 'bottom',
    distance: '40px',
    duration: 800,
    reset: false
});

ScrollReveal().reveal('.tech', {
    interval: 100,
    origin: 'bottom',
    distance: '40px',
    duration: 800,
    reset: false
});

ScrollReveal().reveal('.stage-content', {
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    delay: 150,
    reset: false
});

ScrollReveal().reveal('.soft ul li', {
    interval: 80,
    origin: 'bottom',
    distance: '30px',
    duration: 600,
    reset: false
});

ScrollReveal().reveal('.mensage', {
    origin: 'top',
    distance: '30px',
    duration: 800,
    delay: 250,
    reset: false
});
