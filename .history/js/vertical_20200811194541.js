var scrollCount = null;
var scroll= null;
var slider = $('.vertical');
var Newypos = 1;
document.getElementById("vertical-view").onmousemove = findScreenCoords;
document.getElementById("vertical-view").onmouseleave = clean;


function clean(mouseEvent)
{
    if(mouseEvent)
    {
        ypos = 0;
        slider.slick('slickSetOption','autoplay',true,true);
    }
}

function findScreenCoords(mouseEvent)
{
  
  if(mouseEvent){
    var ypos = mouseEvent.screenY;
    if (ypos==Newypos){
        slider.slick('slickSetOption','autoplay',false,false);
    }
    else{
       
        Newypos = ypos;
        var h = screen.height;
        if(Newypos==0.5*h){
          slider.slick('slickSetOption','autoplay',false,false);
          console.log("=")
        }
        if(Newypos<0.5*h){
          slider.slick('slickSetOption','autoplay',false,false);
          slider.slick('slickPrev');
          console.log("<")
        }
        if(Newypos>0.5*h){
          slider.slick('slickSetOption','autoplay',false,false);
          slider.slick('slickNext');
          console.log(">")
        }
    }
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


