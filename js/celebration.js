document.addEventListener('DOMContentLoaded', function() {
    var counter = 0;
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            var images = document.getElementById('balloons-1');
            images.style.display='inline';
        }
        if (event.key === 'ArrowRight') {
            var images = document.getElementById('balloons-2');
            images.style.display='inline';
        }
        if (event.key === 'ArrowUp') {
            var images = document.getElementById('balloons-3');
            images.style.display='inline';
        }
        if (event.key === 'ArrowDown') {
            counter = (counter % 3) + 1;
            var id = 'cracker-' + counter;
            var images = document.getElementById(id);
            images.style.display = 'inline';
        }
    });
});
