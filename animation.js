// document.addEventListener('DOMContentLoaded', function() {
//     var headerText = document.getElementById('header-text');
//     var text = headerText.textContent;
//     headerText.textContent = '';

//     for (var i = 0; i < text.length; i++) {
//         setTimeout(function(index) {
//             return function() {
//                 headerText.textContent += text.charAt(index);
//             };
//         }(i), i * 100);
//     }
// });
