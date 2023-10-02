document.addEventListener('DOMContentLoaded', function() {
    let position = 0; 

    function moveBackground() {
        position--; 
        document.body.style.backgroundPosition = `0 ${position}px`; 
        requestAnimationFrame(moveBackground); 
    }

    moveBackground(); 
});

document.addEventListener('DOMContentLoaded', function() {
    var lander = document.querySelector('.lander-container img');
    var animationDuration = 4000; 
    var startTop = 0;
    var endTop = 50; 

    var stepTop = (endTop - startTop) / (animationDuration / 20);

    function moveLander() {
        startTop += stepTop;
        lander.style.top = startTop + '%';

        if (startTop >= endTop) {
            clearInterval(animationInterval);
        }
    }

    var animationInterval = setInterval(moveLander, 20);
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var audio = new Audio('./assets/anthem.mp3'); 
        audio.play();
    }, 4000); 
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var images = document.getElementsByClassName('flag');
        for (var i = 0; i < images.length; i++) {
            images[i].style.display = 'inline'; 
        }
        var headings = document.getElementById('heading1');
        headings.style.display = 'inline';
        var but = document.getElementById('btn');
        but.style.display = 'inline';
    }, 5500); 
});
