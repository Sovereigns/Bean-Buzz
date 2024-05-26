document.addEventListener("DOMContentLoaded", function() {
    var btnScrollToTop = document.getElementById('btnScrollToTop');

    btnScrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const images = document.querySelectorAll('.image-gallery img');
    let currentIndex = 0;

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    });

    function updateImage() {
        images.forEach((image, index) => {
            if (index === currentIndex) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }
    updateImage();
});
