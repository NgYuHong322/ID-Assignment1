$(document).ready(function() {
    var scrollSpeed = 1; // Adjust this value to control the scroll speed
    var $banner = $('.banner');
    var $images = $banner.find('img');
    var imageWidth = $images.eq(0).outerWidth();
    var totalImages = $images.length;
    var totalWidth = imageWidth * totalImages;

    // Duplicate the first image at the end
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
