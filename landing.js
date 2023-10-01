document.addEventListener('DOMContentLoaded', function() {
    let position = 0; 

    function moveBackground() {
        position--; 
        document.body.style.backgroundPosition = `0 ${position}px`; 
        requestAnimationFrame(moveBackground); 
    }

    moveBackground(); 
});