document.addEventListener("DOMContentLoaded", function() {
    var albumLinks = document.querySelectorAll('.album img');

    albumLinks.forEach(function(albumLink) {
        albumLink.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });

        albumLink.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});