var scrollCount = null;
var scroll= null;
var slider = $('.vertical');
var Newypos = 1;
var Newxpos = 1;
var ypos = -1;
var ypos_i = -1;
var xpos = 0;
var movedown;

document.getElementById("vertical-view").onmousemove = change;
// document.getElementById("vertical-view").onmousemove = findScreenCoords;
document.getElementById("vertical-view").onmouseleave = clean;
// loop();

function clean(mouseEvent)
{
    if(mouseEvent)
    {
        slider.slick('slickSetOption','autoplaySpeed',3000,false);
        // slider.slick('slickSetOption','slidesToScroll',1,false);
        // slider.slick('slickSetOption','rtl',false,false);
        slider.slick('slickSetOption','changeDir',false,false);
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
    speed: 75,
    slidesToShow: 16,
    slidesToScroll: 1,
    arrows: false,
    waitForAnimate:true,
    changeDir:false,

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

function change(mouseEvent){
    var speed = 600;
    var y = mouseEvent.clientY;
    var h = window.innerHeight/2;
    var delta = Math.abs(y-h);
    var per = delta/h;
    // console.log("per: ", per);
    var new_speed = 800.001*Math.pow(per,2) - 1400*per + 600;
    

    if(y <= 0.55*2*h && y >= 0.45*2*h){
        slider.slick('slickSetOption','autoplay',false,false);
        slider.slick('slickPause');
        console.log("=");
    } else if(y<0.45*2*h){
        slider.slick('slickSetOption','autoplay',true,false);
        slider.slick('slickPlay');
        slider.slick('slickSetOption','rtl',false,false);
        // slider.slick('slickPrev');
        console.log("<");
        console.log("speed: ", new_speed);
        slider.slick('slickSetOption','autoplaySpeed',new_speed,false);
        // slider.on('afterChange', function(event, slick, currentSlide){
            
        // });
    } else if(y>0.55*2*h){
        // // css
        // slider.slick('slickSetOption','autoplay',false,false);
        // slider.slick('slickPause');
        // movedown.play();
        // gsap.to(movedown, {timeScale: 1, duration:3});
     
        
        
        
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


// movedown = gsap.to(slider, {
//     y: 10, 
//     duration:0.3,
//     ease: 'linear',
//     repeat: -1,
//     paused: true
//             })
//             .timeScale(0);

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


