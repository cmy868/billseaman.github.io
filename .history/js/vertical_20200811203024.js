var scrollCount = null;
var scroll= null;
var slider = $('.vertical');
var Newypos = 1;
var Newxpos = 1;
var ypos = 0;
var xpos = 0;

document.getElementById("vertical-view").onmouseover = findScreenCoords;
document.getElementById("vertical-view").onmouseleave = clean;


function clean(mouseEvent)
{
    if(mouseEvent)
    {
        ypos = 0;
        xpos = 0;
        slider.slick('slickSetOption','autoplay',true,true);
    }
}

function findScreenCoords(mouseEvent)
{
//     ypos = mouseEvent.screenY;
//     xpos = mouseEvent.screenX;
//   if(mouseEvent){
//     var yr = Math.abs(mouseEvent.screenY - ypos);
//     var xr = Math.abs(mouseEvent.screenX - xpos);
//     var r = xr-yr;
//     ypos = mouseEvent.screenY;
//     xpos = mouseEvent.screenX;
//     if(r>=0){
//         slider.slick('slickSetOption','autoplay',false,false);
//         console.log("x,more");
//     }

    ypos = mouseEvent.screenY;
    var h = screen.height;
    if(ypos <= 0.6*h && ypos >= 0.4*h){
        slider.slick('slickSetOption','autoplay',false,false);
        console.log("=")
    }
    if(ypos<0.4*h){
        slider.slick('slickSetOption','autoplay',false,false);
        slider.slick('slickPrev');
        console.log("<")
    }
    if(ypos>0.6*h){
        slider.slick('slickSetOption','autoplay',false,false);
        slider.slick('slickNext');
        console.log(">")
    }

}


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


