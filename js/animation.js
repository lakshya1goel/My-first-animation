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
        var audio = new Audio('./assets/launch.wav');
        audio.play();

        setTimeout(function() {
            var rocket = document.querySelector('.rocket-container img');
            var animationDuration = 4500;
            var startLeft = 17;  
            var startBottom = 23; 
            var endLeft = 100;
            var endBottom = 100;
            var stepLeft = (endLeft - startLeft) / (animationDuration / 16);
            var stepBottom = (endBottom - startBottom) / (animationDuration / 16);

            function moveRocket() {
                startLeft += stepLeft;
                startBottom += stepBottom;
                rocket.style.left = startLeft + '%';
                rocket.style.bottom = startBottom + '%';
                console.log(rocket.style.left, rocket.style.bottom);

                if (startLeft >= endLeft && startBottom >= endBottom) {
                    clearInterval(animationInterval);
                    var link = document.createElement('a');
                    link.href = './landing.html';
                    link.target = '_blank';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            }

            var animationInterval = setInterval(moveRocket, 10);
        }, 1000); 

        event.preventDefault();
    }
});

