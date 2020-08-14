var scrollCount = null;
var scroll= null;
var slider = $('.vertical');
var ypos;

document.getElementById("#vertical-view").onmousemove = findScreenCoords;
function findScreenCoords(mouseEvent)
{
  
  if (mouseEvent)
  {
    //FireFox
    ypos = mouseEvent.screenY;
  }
  else
  {
    //IE
    ypos = window.event.screenY;
  }
}


slider.slick({ 
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    pauseOnHover: true,
    zIndex: 1,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    waitForAnimate:false,
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


slider.on('wheel', (function(e) {
    e.preventDefault();

    clearTimeout(scroll);
    scroll = setTimeout(function(){scrollCount=0;}, 30);
    if(scrollCount) return 0;
    scrollCount=1;

    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickNext');
    } else {
        $(this).slick('slickPrev');
    }
}));


