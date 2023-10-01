document.addEventListener('DOMContentLoaded', function() {

    function animateText(str) {
        const text = document.getElementsByClassName("heading");
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
        }, 500);
    }

    const str = "CHANDRAYAAN 3.0";
    animateText(str);

});


document.addEventListener('DOMContentLoaded', function() {
    let position = 0; 

    function moveBackground() {
        position--; 
        document.body.style.backgroundPosition = `0 ${position}px`; 
        requestAnimationFrame(moveBackground); 
    }

    moveBackground(); 
});




document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        var audio = new Audio('./assets/rocket-launch.wav');
        audio.play();

        setTimeout(function() {
            var rocket = document.querySelector('.rocket-container img');
            var moon = document.querySelector('.moon-container img');
            var animationDuration = 1500;
            var startLeft = 15;  
            var startBottom = 20; 
            var endRight = 0;  
            var endTop = 0;  
            var stepLeft = (endRight - startLeft) / (animationDuration / 16);
            var stepBottom = (endTop - startBottom) / (animationDuration / 16);

            function moveRocket() {
                startLeft -= stepLeft;
                startBottom -= stepBottom;
                rocket.style.left = startLeft + '%';
                rocket.style.bottom = startBottom + '%';
                console.log(rocket.style.left, rocket.style.bottom);

                setTimeout(function() {
                    var link = document.createElement('a');
                    link.href = './landing.html';
                    link.target = '_blank';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }, 3000);

                if (startLeft <= endRight && startBottom <= endTop && Math.abs(startLeft - endRight) < 0.1 && Math.abs(startBottom - endTop) < 0.1) {
                    clearInterval(animationInterval);
                }
            }

            var animationInterval = setInterval(moveRocket, 10);
        }, 1000); 

        event.preventDefault();
    }
});

