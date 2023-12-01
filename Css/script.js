$(document).ready(function() {
    var scrollSpeed = 1; 
    var $banner = $('.banner');
    var $images = $banner.find('img');
    var imageWidth = $images.eq(0).outerWidth();
    var totalImages = $images.length;
    var totalWidth = imageWidth * totalImages;

    $banner.append($images.clone());

    function scrollBanner() {
        $banner.animate({marginLeft: '-=' + scrollSpeed}, scrollSpeed, 'linear', function() {
            if (parseInt($banner.css('marginLeft')) <= -totalWidth) {
                $banner.css('marginLeft', '0');
            }
            scrollBanner();
        });
    }

    scrollBanner();
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



    