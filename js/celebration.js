document.addEventListener('DOMContentLoaded', function() {
    var isAnimationInProgress = false;
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter'&& !isAnimationInProgress) {
            isAnimationInProgress = true;
            var balloons1 = document.getElementById('balloons-1');
            var balloons2 = document.getElementById('balloons-2');
            var balloons3 = document.getElementById('balloons-3');
            var cracker1 = document.getElementById('cracker-1');
            var cracker2 = document.getElementById('cracker-2');
            var heading = document.getElementById('cele-id');

            balloons1.style.display = 'inline';
            balloons2.style.display = 'inline';
            balloons3.style.display = 'inline';
            cracker1.style.display = 'inline';
            cracker2.style.display = 'inline';
            heading.style.display = 'none';

            function balloon1() {
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
                    balloons1.style.bottom = startBottom + '%';
                    balloons1.style.left = startLeft + '%';
                    if (startBottom >= endBottom && startLeft >= endLeft) {
                        clearInterval(animationInterval1);
                        balloons1.style.display = 'none';
                    }
                }

                var animationInterval1 = setInterval(moveLander, 20);
            }

            function balloon2() {
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
                    balloons2.style.bottom = startBottom + '%';
                    balloons2.style.left = startLeft + '%';
                    if (startBottom >= endBottom && startLeft <= endLeft) {
                        clearInterval(animationInterval2);
                        balloons2.style.display = 'none';
                    }
                }

                var animationInterval2 = setInterval(moveLander, 20);
            }

            function balloon3() {
                var animationDuration = 4000;
                var startBottom = 0;
                var endBottom = 100;
                var stepBottom = (endBottom - startBottom) / (animationDuration / 25);

                function moveLander() {
                    startBottom += stepBottom;
                    balloons3.style.bottom = startBottom + '%';
                    if (startBottom >= endBottom) {
                        clearInterval(animationInterval3);
                        balloons3.style.display = 'none';
                    }
                }

                var animationInterval3 = setInterval(moveLander, 20);
            }

            function increaseWidth() {
                var audio = new Audio('./assets/cracker-audio.mp3');
                var wid = 5;

                function growWidth() {
                    audio.play();
                    wid += 0.03;
                    cracker1.style.width = wid + '%';
                    cracker2.style.width = wid + '%';

                    if (wid < 12) {
                        requestAnimationFrame(growWidth);
                    } else {
                        cracker1.style.display = 'none';
                        cracker2.style.display = 'none';
                        isAnimationInProgress = false;
                        // audio.pause();
                    }
                }

                growWidth();
            }

            balloon1();
            balloon2();
            balloon3();
            increaseWidth();
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {

    function animateText(str) {
        const text = document.getElementsByClassName("cele");
        text[0].innerHTML = "";
        let i = 0;
        const begin = setInterval(() => {
            if (i < str.length) {
                text[0].innerHTML += str[i];
                i++;
            } else {
                clearInterval(begin);
                setTimeout(() => {
                    animateText(str); 
                }, 1000); 
            }
        }, 100);
    }

    const str = "LET'S CELEBRATE!";
    animateText(str);

});
