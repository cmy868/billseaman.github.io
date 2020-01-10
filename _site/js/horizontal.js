$('.horizontal').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 12,
    slidesToScroll: 12,
    autoplay: true,
    pauseOnHover: true,
    variableWidth: true,
    zIndex: 2,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        }
        }, 
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
