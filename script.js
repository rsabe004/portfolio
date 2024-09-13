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


// document.addEventListener('DOMContentLoaded', function() {
//     const chevronLink = document.querySelector('.chevron-link');
//     const starAsset = document.querySelector('.star-asset');
//     const projectsSection = document.querySelector('#projects');
    
//     chevronLink.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         // Get the current position of the star
//         const starRect = starAsset.getBoundingClientRect();
//         const starTop = starRect.top;
        
//         // Get the position of the projects section
//         const projectsRect = projectsSection.getBoundingClientRect();
//         const projectsTop = projectsRect.top;
        
//         // Calculate the distance the star needs to fall
//         const fallDistance = projectsTop - starTop;
        
//         // Apply the falling animation
//         starAsset.style.transition = `top 1s ease-in, transform 1s ease-in`;
//         starAsset.style.top = `${fallDistance}px`;
//         starAsset.style.transform = 'rotate(720deg)';
        
//         // Scroll to projects section after the animation
//         setTimeout(() => {
//             projectsSection.scrollIntoView({ behavior: 'smooth' });
            
//             // Reset the star position after scrolling
//             setTimeout(() => {
//                 starAsset.style.transition = 'none';
//                 starAsset.style.top = '30%'; // Or whatever the original top value was
//                 starAsset.style.transform = 'rotate(0deg)';
//             }, 1000);
//         }, 1000);
//     });
// });