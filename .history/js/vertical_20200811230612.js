var scrollCount = null;
var scroll= null;
var slider = $('.vertical');
var Newypos = 1;
var Newxpos = 1;
var ypos = -1;
var ypos_i = -1;
var xpos = 0;

document.getElementById("vertical-view").onmouseover = initialScreenCoords;
// document.getElementById("vertical-view").onmousemove = findScreenCoords;
document.getElementById("vertical-view").onmouseleave = clean;
// loop();

function clean(mouseEvent)
{
    if(mouseEvent)
    {
        ypos = -1;
        ypos_i = -1;
        xpos = 0;
        slider.slick('slickSetOption','autoplay',true,true);
    }
}

function loop() {
    while(true){
            if (ypos == -1) {
                return;
            } else {
                moveByPosition(ypos);
            }
    }
}

function initialScreenCoords(mouseEvent) {
    ypos = mouseEvent.screenY;
    loop();
}

function moveByPosition(ypos){
    if (ypos == -1) {
        slider.slick('slickSetOption','autoplay',true,true);
    }
    var h = screen.height;
    if(ypos <= 0.66*h && ypos >= 0.33*h){
        slider.slick('slickSetOption','autoplay',false,false);
        console.log("=")
    }
    if(ypos<0.33*h){
        slider.slick('slickSetOption','autoplay',false,false);
        slider.slick('slickPrev');
        console.log("<")
    }
    if(ypos>0.66*h){
        slider.slick('slickSetOption','autoplay',false,false);
        slider.slick('slickNext');
        console.log(">")
    }
}

// function findScreenCoords(mouseEvent)
// {
// //     ypos = mouseEvent.screenY;
// //     xpos = mouseEvent.screenX;
// //   if(mouseEvent){
// //     var yr = Math.abs(mouseEvent.screenY - ypos);
// //     var xr = Math.abs(mouseEvent.screenX - xpos);
// //     var r = xr-yr;
// //     ypos = mouseEvent.screenY;
// //     xpos = mouseEvent.screenX;
// //     if(r>=0){
// //         slider.slick('slickSetOption','autoplay',false,false);
// //         console.log("x,more");
// //     }
//     moveByPosition(ypos);
// }


slider.slick({ 
    cssEase: 'linear',
    infinite: true,
    vertical: true,
    verticalSwiping: false,
    autoplay: true,
    pauseOnHover: false,
    zIndex: 1,
    speed: 300,
    slidesToShow: 16,
    slidesToScroll: 1,
    arrows: false,
    waitForAnimate:false,

    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 14,
            slidesToScroll: 1,
            infinite: true,
        }
        },
        {
        breakpoint: 600,
        settings: "unslick"
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

function change(){
slider.on('afterChange', function(event, slick, currentSlide){
    slider.slick('slickSetOption','autoplaySpeed',1,false);
  });
}

// slider.on('wheel', (function(e) {
//     e.preventDefault();

//     clearTimeout(scroll);
//     scroll = setTimeout(function(){scrollCount=0;}, 30);
//     if(scrollCount) return 0;
//     scrollCount=1;

//     if (e.originalEvent.deltaY < 0) {
//         $(this).slick('slickNext');
//     } else {
//         $(this).slick('slickPrev');
//     }
// }));


