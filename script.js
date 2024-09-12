document.addEventListener('DOMContentLoaded', () => {
    const star = document.querySelector('.star-asset');
    
    function animateStar() {
        star.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000,
            iterations: Infinity
        });
    }

    animateStar();
});

document.addEventListener('DOMContentLoaded', function() {
    const chevronLink = document.querySelector('.chevron-link');
    
    chevronLink.addEventListener('click', function(e) {
        e.preventDefault();
        const projectsSection = document.querySelector('#projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
});