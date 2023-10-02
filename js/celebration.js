document.addEventListener('DOMContentLoaded', function() {
    var counter = 0;
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            var images = document.getElementById('balloons-1');
            images.style.display='inline';
            var animationDuration = 4000; 
            var startBottom = 0;
            var startLeft = 0;  
            var endBottom = 100; 
            var endLeft = 40;
            var stepBottom = (endBottom - startBottom) / (animationDuration / 20);
            var stepLeft = (endLeft - startLeft) / (animationDuration / 20);
            function moveLander() {
                startBottom += stepBottom;
                startLeft += stepLeft;
                images.style.bottom = startBottom + '%';
                images.style.left = startLeft + '%';
                if (startBottom >= endBottom && startLeft >= endLeft) {
                    clearInterval(animationInterval);
                    images.style.display='none';
                }
            }
            var animationInterval = setInterval(moveLander, 20);
        }

        if (event.key === 'ArrowRight') {
            var images = document.getElementById('balloons-2');
            images.style.display='inline';
            var animationDuration = 4000; 
            var startBottom = 0;
            var startLeft = 90;  
            var endBottom = 100; 
            var endLeft = 40;
            var stepBottom = (endBottom - startBottom) / (animationDuration / 25);
            var stepLeft = (endLeft - startLeft) / (animationDuration / 25);
            function moveLander() {
                startBottom += stepBottom;
                startLeft += stepLeft;
                images.style.bottom = startBottom + '%';
                images.style.left = startLeft + '%';
                if (startBottom >= endBottom && startLeft <= endLeft) {
                    clearInterval(animationInterval);
                    images.style.display='none';
                }
            }
            var animationInterval = setInterval(moveLander, 20);
        }

        if (event.key === 'ArrowUp') {
            var images = document.getElementById('balloons-3');
            images.style.display='inline';
            var animationDuration = 4000; 
            var startBottom = 0;
            var endBottom = 100; 
            var stepBottom = (endBottom - startBottom) / (animationDuration / 25);
            function moveLander() {
                startBottom += stepBottom;
                images.style.bottom = startBottom + '%';
                if (startBottom >= endBottom) {
                    clearInterval(animationInterval);
                    images.style.display='none';
                }
            }
            var animationInterval = setInterval(moveLander, 20);
        }

        if (event.key === 'ArrowDown') {
            counter = (counter % 2) +1;
            var id = 'cracker-' + counter;
            var images = document.getElementById(id);
            images.style.display = 'inline';
            var audio = new Audio('./assets/cracker-audio.mp3');
            audio.play();
            var wid=5;
            function increaseWidth() {
                wid+=0.03;
                images.style.width = wid + '%';

                if (wid < 12) {
                    requestAnimationFrame(increaseWidth);
                }
                else {
                    images.style.display = 'none';
                    audio.pause();
                }
            }
            increaseWidth();
        }
    });
});



