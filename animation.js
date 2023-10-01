// const text = document.querySelector("#heading");
// const strText = text.textContent;
// text.textContent = "";
// const string = strText.split("");
// for (let i = 0; i < strText.length; i++) console.log(string[i]);

// let animateText = setInterval(textFunction, 400);
// let char = 0;
// function textFunction() {
//   if (char == strText.length) {
//     char = 0;
//     text.textContent = "";
//   } else {
//     text.textContent += string[char];
//     char = char + 1;
//   }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM Loaded');
//     const rocketImg = document.querySelector('.rocket-container img');
//     const moonImg = document.querySelector('.moon-container img');
//     let rocketPosition = {
//         right: parseInt(getComputedStyle(rocketImg).right),   // Initial left position
//         top: parseInt(getComputedStyle(rocketImg).top), // Initial bottom position
//     };

//     let targetPosition = {
//         right: 0,//parseInt(getComputedStyle(moonImg).right), // Get the right position of the moon
//         top: 100//parseInt(getComputedStyle(moonImg).top)    // Get the top position of the moon
//     };

//     document.addEventListener('keydown', function(event) {
//         if (event.key === 'Enter') {
//             const moveRocket = setInterval(function() {
//                 // Calculate the step size for the animation
//                 const stepSize = 2;
                
//                 // Calculate the distance between current position and target position
//                 const distanceLeft = targetPosition.right - rocketPosition.right;
//                 const distanceTop = targetPosition.top - rocketPosition.top;
//                 console.log(distanceLeft,distanceTop); 
                
//                 // Determine the direction of movement
//                 const directionLeft = distanceLeft < 0 ? 1 : -1;
//                 const directionTop = distanceTop < 0 ? 1 : -1;
                
//                 // Calculate the next position
//                 rocketPosition.left += stepSize * directionLeft;
//                 rocketPosition.bottom += stepSize * directionTop;
//                 // rocketPosition.left += stepSize * directionLeft;
//                 // rocketPosition.bottom += stepSize * directionTop;
                
//                 // Update the rocket's position
//                 rocketImg.style.left = rocketPosition.left + 'px';
//                 rocketImg.style.bottom = rocketPosition.bottom + 'px';
                
//                 console.log(distanceLeft,directionTop);
//                 // Check if the rocket has reached the moon's position
//                 // if (Math.abs(distanceLeft) < stepSize && Math.abs(distanceTop) < stepSize) {
//                 //     clearInterval(moveRocket);
//                 // }
//                 if (distanceLeft==0 && distanceTop==0) {
//                     clearInterval(moveRocket);
//                 }
//             }, 20); // Adjust the interval for desired smoothness
//         }
//     });
// });

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        var rocket = document.querySelector('.rocket-container img');
        var moon = document.querySelector('.moon-container img');
        var animationDuration = 1000;
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

            if (startLeft <= endRight && startBottom <= endTop && Math.abs(startLeft - endRight) < 0.1 && Math.abs(startBottom - endTop) < 0.1) {
                clearInterval(animationInterval);
            }
            
        }

        var animationInterval = setInterval(moveRocket, 10);

        event.preventDefault();
    }
});


