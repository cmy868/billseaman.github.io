var scrollCount = null;
var scroll= null;
var sliderH = $('.horizontal');
var Newxpos = 1;
var Newypos = 1;
var xpos = -1;
var xpos_i = -1;
var ypos = 0;
var movedown;
var down = false;

//dropdown for CV in nav

var drop = false;

function cvDrop(){
    if (drop){
        document.querySelector("#subcv").style.display = "none";
        drop=false;
    }
    else{
        document.querySelector("#subcv").style.display = "block";
        drop=true;
    }
}

//horizontal menu

document.getElementById("horizontal-view").onmousemove = changeH;
// document.getElementById("horizontal-view").onmousemove = findScreenCoords;
document.getElementById("horizontal-view").onmouseleave = cleanH;
// loop();
function changeH(mouseEvent){
    var speed = 600;
    var x = mouseEvent.clientX;
    var w = window.innerWidth/2;
    var delta = Math.abs(x-w);
    var per = delta/w;
    // console.log("per: ", per);
    var new_speedH = 800.001*Math.pow(per,2) - 1400*per + 600;
    console.log("x:"+x);
    console.log("w:"+w);
    

    if(x <= 0.55*2*w && x >= 0.45*2*w){
        sliderH.slick('slickSetOption','autoplay',false,false);
        sliderH.slick('slickPause');
        console.log("=");
        down = false;
    } else if(x<0.45*2*w){
        sliderH.slick('slickSetOption','autoplay',true,false);
        sliderH.slick('slickPlay');
        // sliderH.slick('slickSetOption','rtl',false,false);
        // sliderH.slick('slickPrev');
        console.log("<");
        console.log("speed: ", new_speedH);
        sliderH.slick('slickSetOption','autoplaySpeed',new_speedH,false);
        // sliderH.on('afterChange', function(event, slick, currentSlide){
            down = false;
        // });
    } else if(x>0.55*2*w){
        // // css
        // sliderH.slick('slickSetOption','autoplay',false,false);
        // sliderH.slick('slickPause');
        // movedown.play();
        // gsap.to(movedown, {timeScale: 1, duration:3});
     
        
        down = true;
        console.log("true");
        sliderH.slick('slickSetOption','autoplay',true,false);
        sliderH.slick('slickPlay');
        
        //    var tmp = sliderH.slick('slickGetOption','changeDir');
        // if (tmp == false) {
        //     sliderH.slick('slickSetOption','changeDir',true,false);
        //     console.log(sliderH.slick('slickGetOption','changeDir'));
        // }
        // var tmp = sliderH.slick('slickGetOption','rtl');
        // if (tmp == false) {
        //     sliderH.slick('slickSetOption','waitForAnimate',true,false);
        //     sliderH.slick('slickSetOption','rtl',true,false);
        //     console.log("lllllllllllllllllllll");
        // }
        // var tmp = sliderH.slick('slickGetOption','slidesToScroll');
        // if (tmp == 1) {
        //     sliderH.slick('slickSetOption','rtl',true,false);
        //     // sliderH.slick('slickSetOption','slidesToScroll',-1,true);
        // }
        // sliderH.slick('slickNext');
        // console.log(">");
        // console.log("speed: ", new_speedH);
        sliderH.slick('slickSetOption','autoplaySpeed',new_speedH,false);
        // sliderH.on('afterChange', function(event, slick, currentSlide){
            
        // });
    }
    
}


function cleanH(mouseEvent)
{
    if(mouseEvent)
    {
        sliderH.slick('slickSetOption','autoplaySpeed',3000,false);
        // sliderH.slick('slickSetOption','slidesToScroll',1,false);
        // sliderH.slick('slickSetOption','rtl',false,false);
        // sliderH.slick('slickSetOption','changeDir',false,false);
        down = false;
        sliderH.slick('slickSetOption','autoplay',true,false);
        sliderH.slick('slickPlay');
        // gsap.to(movedown, { timeScale: 0, duration:3, onComplete: function() { this.pause(); }});
    }
}

// function loop() {
//     while(true){
//             if (ypos == -1) {
//                 return;
//             } else {
//                 moveByPosition(ypos);
//             }
//     }
// }

// function initialScreenCoords(mouseEvent) {
//     ypos = mouseEvent.screenY;
//     loop();
// }

// function moveByPosition(ypos){
//     if (xpos == -1) {
//         sliderH.slick('slickSetOption','autoplay',true,true);
//     }
//     var h = screen.width;
//     if(xpos <= 0.66*h && xpos >= 0.33*h){
//         sliderH.slick('slickSetOption','autoplay',false,false);
//         console.log("=")
//     }
//     if(xpos<0.33*h){
//         sliderH.slick('slickSetOption','autoplay',false,false);
//         sliderH.slick('slickPrev');
//         console.log("<")
//     }
//     if(xpos>0.66*h){
//         sliderH.slick('slickSetOption','autoplay',false,false);
//         sliderH.slick('slickNext');
//         console.log(">")
//     }
// }

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
// //         sliderH.slick('slickSetOption','autoplay',false,false);
// //         console.log("x,more");
// //     }
//     moveByPosition(ypos);
// }


sliderH.slick({ 
    cssEase: 'linear',
    infinite: true,
    horizontal: true,
    horizontalSwiping: false,
    autoplay: true,
    pauseOnHover: false,
    zIndex: 2,
    speed: 500,
    autoplaySpeed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    waitForAnimate:true,

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











// var scrollCount = null;
// var scroll= null;
// var sliderH = $('.horizontal');
// $('.horizontal').slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 9,
//     slidesToScroll: 1,
//     autoplay: true,
//     pauseOnHover: true,
//     variableWidth: true,
//     zIndex: 2,
//     responsive: [
//         {
//         breakpoint: 1024,
//         settings: {
//             slidesToShow: 6,
//             slidesToScroll: 3,
//             infinite: true,
//         }
//         }, 
//         {
//         breakpoint: 600,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//         }
//         },
//         {
//         breakpoint: 480,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//         }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });

// sliderH.on('wheel', (function(e) {
//     e.preventDefault();

//     clearTimeout(scroll);
//     scroll = setTimeout(function(){scrollCount=0;}, 20);
//     if(scrollCount) return 0;
//     scrollCount=1;

//     if (e.originalEvent.deltaY < 0) {
//         $(this).slick('slickNext');
//     } else {
//         $(this).slick('slickPrev');
//     }
// }));
