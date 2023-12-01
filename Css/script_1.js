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

document.addEventListener("DOMContentLoaded", function() {
    var currentVideoIndex = 0;
    var videoContainers = document.querySelectorAll('.vidframe iframe');

    function showVideo(index) {
        videoContainers.forEach(function(videoContainer, i) {
            videoContainer.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videoContainers.length;
        showVideo(currentVideoIndex);
    }

    window.nextVideo = nextVideo;

    showVideo(currentVideoIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    var navBar = document.querySelector('.colour');

    navBar.addEventListener('mouseover', function() {
        navBar.classList.add('colour-hover');
    });

    navBar.addEventListener('mouseout', function() {
        navBar.classList.remove('colour-hover');
    });
});