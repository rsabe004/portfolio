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