var scrollCount = null;
var scroll= null;
var slider = $('.horizontal');
$('.horizontal').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    variableWidth: true,
    zIndex: 2,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 6,
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

slider.on('wheel', (function(e) {
    e.preventDefault();

    clearTimeout(scroll);
    scroll = setTimeout(function(){scrollCount=0;}, 20);
    if(scrollCount) return 0;
    scrollCount=1;

    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickNext');
    } else {
        $(this).slick('slickPrev');
    }
}));

function cvDrop(){
    if (drop){
        document.querySelector("#subcv").style.display = "none";
        drop=false;
    }
    else{
        document.querySelector("#subcv").style.display = "block";
        drop=true;
    }
    // document.querySelector("#cv-child1>a>h5").style.display = "block";
    // document.querySelector("#cv-child2>a>h5").style.display = "block";
}
