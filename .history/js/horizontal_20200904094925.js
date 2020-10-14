var scrollCount = null;
var scroll= null;
var slider = $('.horizontal');
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

document.getElementById("horizontal-view").onmousemove = change;
// document.getElementById("horizontal-view").onmousemove = findScreenCoords;
document.getElementById("horizontal-view").onmouseleave = clean;
// loop();
function change(mouseEvent){
    var speed = 600;
    var x = mouseEvent.clientX;
    var h = window.innerWidth/2;
    var delta = Math.abs(x-h);
    var per = delta/h;
    // console.log("per: ", per);
    var new_speed = 800.001*Math.pow(per,2) - 1400*per + 600;
    

    if(x <= 0.55*2*h && x >= 0.45*2*h){
        slider.slick('slickSetOption','autoplay',false,false);
        slider.slick('slickPause');
        console.log("=");
        down = false;
    } else if(x<0.45*2*x){
        slider.slick('slickSetOption','autoplay',true,false);
        slider.slick('slickPlay');
        // slider.slick('slickSetOption','rtl',false,false);
        // slider.slick('slickPrev');
        console.log("<");
        console.log("speed: ", new_speed);
        slider.slick('slickSetOption','autoplaySpeed',new_speed,false);
        // slider.on('afterChange', function(event, slick, currentSlide){
            down = false;
        // });
    } else if(x>0.55*2*x){
        // // css
        // slider.slick('slickSetOption','autoplay',false,false);
        // slider.slick('slickPause');
        // movedown.play();
        // gsap.to(movedown, {timeScale: 1, duration:3});
     
        
        down = true;
        console.log("true");
        slider.slick('slickSetOption','autoplay',true,false);
        slider.slick('slickPlay');
        
        //    var tmp = slider.slick('slickGetOption','changeDir');
        // if (tmp == false) {
        //     slider.slick('slickSetOption','changeDir',true,false);
        //     console.log(slider.slick('slickGetOption','changeDir'));
        // }
        // var tmp = slider.slick('slickGetOption','rtl');
        // if (tmp == false) {
        //     slider.slick('slickSetOption','waitForAnimate',true,false);
        //     slider.slick('slickSetOption','rtl',true,false);
        //     console.log("lllllllllllllllllllll");
        // }
        // var tmp = slider.slick('slickGetOption','slidesToScroll');
        // if (tmp == 1) {
        //     slider.slick('slickSetOption','rtl',true,false);
        //     // slider.slick('slickSetOption','slidesToScroll',-1,true);
        // }
        // slider.slick('slickNext');
        // console.log(">");
        // console.log("speed: ", new_speed);
        slider.slick('slickSetOption','autoplaySpeed',new_speed,false);
        // slider.on('afterChange', function(event, slick, currentSlide){
            
        // });
    }
    
}


function clean(mouseEvent)
{
    if(mouseEvent)
    {
        slider.slick('slickSetOption','autoplaySpeed',3000,false);
        // slider.slick('slickSetOption','slidesToScroll',1,false);
        // slider.slick('slickSetOption','rtl',false,false);
        // slider.slick('slickSetOption','changeDir',false,false);
        down = false;
        slider.slick('slickSetOption','autoplay',true,false);
        slider.slick('slickPlay');
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

function moveByPosition(ypos){
    if (xpos == -1) {
        slider.slick('slickSetOption','autoplay',true,true);
    }
    var h = screen.width;
    if(xpos <= 0.66*h && xpos >= 0.33*h){
        slider.slick('slickSetOption','autoplay',false,false);
        console.log("=")
    }
    if(xpos<0.33*h){
        slider.slick('slickSetOption','autoplay',false,false);
        slider.slick('slickPrev');
        console.log("<")
    }
    if(xpos>0.66*h){
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
    horizontal: true,
    horizontalSwiping: false,
    autoplay: true,
    pauseOnHover: false,
    zIndex: 1,
    speed: 75,
    slidesToShow: 16,
    slidesToScroll: 1,
    arrows: false,
    waitForAnimate:true,

    // responsive: [
    //     {
    //     breakpoint: 1024,
    //     settings: {
    //         slidesToShow: 14,
    //         slidesToScroll: 1,
    //         infinite: true,
    //     }
    //     },
    //     {
    //     breakpoint: 600,
    //     settings: "unslick"
    //     }
    //     // You can unslick at a given breakpoint now by adding:
    //     // settings: "unslick"
    //     // instead of a settings object
    // ]
});











// var scrollCount = null;
// var scroll= null;
// var slider = $('.horizontal');
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

// slider.on('wheel', (function(e) {
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
