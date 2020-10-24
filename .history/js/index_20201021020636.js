const pict = new Array(10);
const poem = new Array(10);
let pict_num_w = 100;
let poem_num_w = 100;
let up_arrow;
let down_arrow;
let left_arrow;
let right_arrow;
let work_img;
let poem_img;
let links;

function preload(){
    up_arrow = loadImage('images/assets/arrow_up.png');
    down_arrow = loadImage('images/assets/arrow_down.png');
    left_arrow = loadImage('images/assets/arrow_left.png');
    right_arrow = loadImage('images/assets/arrow_right.png');
    for (let i = 0; i < pict.length; i++) {
       work_img = loadImage("images/assets/img" + i + ".jpg");
       pict[i] = new Work(200, 10+i*160, 120, 120, work_img);
    }

    for (let i = 0; i < poem.length; i++) {
        poem_img = loadImage("images/poems/img" + i + ".jpg");
        poem[i] = new Poem(10+i*200, 200, 180, 120, poem_img);
    }
  }

function setup(){
    createCanvas(windowWidth, windowHeight);
    createA('http://localhost:4000/about.html', 'About').position(height-370, height-120);
    createA('http://localhost:4000/awards.html', 'Awards').position(height-270, height-120);
    createA('http://localhost:4000/contact.html', 'Contact').position(height-170, height-120);
}


function draw(){
    background(0);
    
    menu();
    for(let i=0; i<pict.length; i++){
        pict[i].hover(mouseX, mouseY);
        pict[i].display();
        pict[i].move_verticle(mouseX, mouseY);
    }

    for(let i=0; i<poem.length; i++){
        poem[i].hover(mouseX, mouseY);
        poem[i].display();
        poem[i].move_horizontal(mouseX, mouseY);
    }
}

function menu(){
    textAlign(CENTER);
    textSize(30);
    fill(255);
    noStroke();
    textFont('Ubuntu');
    text("Text", width-120, 100);
    text("Work", 70, height-120);
    textSize(20);
    textSize(20);
    text("Recobinant Poetics /", 470, 360);
    text("Recobinant Informatics /", 470, 320)
    text("Neoscentience /", 470, 280)
}

/*
function mousePressed() {
    for (let i = 0; i < pict.length; i++) {
      pict[i].clicked(mouseX, mouseY);
    }
    for (let i = 0; i < poem.length; i++) {
       poem[i].clicked(mouseX, mouseY);
    }
}*/

function mouseDragged(){
    for (let i = 0; i < pict.length; i++) {
        pict[i].move_verticle(mouseX, mouseY);
    }

    for (let i = 0; i < poem.length; i++) {
        poem[i].move_horizontal(mouseX, mouseY);
    }
}

class Work{
    constructor(tempX, tempY, tempW, tempH, tempPic, tempLink){
        this.x = tempX; 
        this.y = tempY; 
        this.w = tempW; 
        this.h = tempH;
        this.pic = tempPic;
        this.clicking = false;
        this.hovering = false;
        this.divisor = 2;
        this.movement_size = 100;
        this.link = tempLink;

    }

    hover(mx, my){
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d <100) {
           this.hovering = true;
         }else{
           this.hovering = false;
         }
    }

    clicked(mx, my){
        let d = dist(mouseX, mouseY, this.x, this.y);
        if(d<100){
            this.clicking = true;
        }else{
            this.clicking = false;
        }
    }

    move_verticle(mx, my){
        if(my > height-this.movement_size){
            //console.log("moving down!!!!");

            this.y += 1;

            //if its above the top move to bottom
            if(this.y > height){
                this.y = -420;
            }
            fill(255, 20);
            rectMode(CORNER);
            noStroke();
            imageMode(CENTER);
            image(down_arrow, width/2, height-this.movement_size, 100, 100);
            //rect(0, height-this.movement_size, width, this.movement_size);

        }else if (my < this.movement_size){
            //console.log("moving up!!!!");

            this.y -= 1;

            //if it is below the bottom move to the top
            if(this.y < 0){
                
                this.y = height+420;
            }
            fill(255, 20);
            rectMode(CORNER);
            noStroke();
            image(up_arrow, width/2, this.movement_size, 100, 100);
            //rect(0, 0, width, this.movement_size);
            
        }
        else{
            this.y = this.y;
        }
    }


    display(){
        imageMode(CENTER);
        rectMode(CENTER);


        fill(255);
        image(this.pic, this.x, this.y, this.w, this.h);
        if(this.clicking){
            fill(0, 0, 255);
            console.log("CLICKING");
            image(this.pic, width-320, height-220, 300, 300);
            fill(255,20);
            noStroke();
            rect(width/2, height/2+600, this.pic.width, 300);
        }else{
            noFill();
        }
        if(this.hovering){
            console.log("HOVERING");
            noFill();
            stroke(255, 120);
            strokeWeight(10);
            image(this.pic, width-320, height-220, 300, 200);
            rect(this.x, this.y, this.w, this.h);
        }else{
            noFill();
        }
    }
}


class Poem{
    constructor(tempX, tempY, tempW, tempH, tempPic){
        this.x = tempX; 
        this.y = tempY; 
        this.w = tempW; 
        this.h = tempH;
        this.pic = tempPic;
        this.clicking = false;
        this.hovering = false;
        this.divisor = 2;
        this.movement_size = 100;

    }

    hover(mx, my){
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d <100) {
           this.hovering = true;
         }else{
           this.hovering = false;
         }
    }

    clicked(mx, my){
        let d = dist(mouseX, mouseY, this.x, this.y);
        if(d<100){
            this.clicking = true;
        }else{
            this.clicking = false;
        }
    }

    move_horizontal(mx, my){
        if(mx > width-this.movement_size){
            //console.log("moving right!!!!");

            this.x += 1;

            if(this.x > width){
                this.x = -20;
            }

            fill(255, 20);
            rectMode(CORNER);
            noStroke();
            image(right_arrow, width-this.movement_size, height/2, 100, 100);
            //rect(width-this.movement_size, 0, this.movement_size, height);

        }else if(mx < this.movement_size){
            //console.log("moving left!!!!")

            this.x -= 1;
            
            if(this.x < 0){
                this.x = width-20;
            }

            fill(255, 20);
            rectMode(CORNER);
            noStroke();
            image(left_arrow, this.movement_size, height/2, 100, 100);
            //rect(0, 0, this.movement_size, height);
        }
        else{
            this.x = this.x;
        }
    }


    display(){
        imageMode(CENTER);
        rectMode(CENTER);
        fill(255); 
        image(this.pic, this.x, this.y, this.w, this.h);
        if(this.clicking){
            fill(0, 0, 255);
            console.log("CLICKING");
            image(this.pic, width-320, height-220, 300, 200);
            fill(255,20);
            noStroke();
            rect(width/2, height/2+600, this.pic.width, 300)
        }
        if(this.hovering){
            console.log("HOVERING");
            noFill();
            stroke(255, 120);
            strokeWeight(10);
            image(this.pic, width-320, height-220, 300, 200);
            rect(this.x, this.y, this.w, this.h);
        }
    }
}

function cvDrop(){
    document.querySelector("#cv-child2").style.display = "block";
    document.querySelector("#cv-child1").style.display = "block";
}

(function () {
    var follower, init, mouseX, mouseY, positionElement, printout, timer;
  
    follower = document.getElementById('follower');
  
    printout = document.getElementById('printout');
  
    mouseX = event => {
      return event.clientX;
    };
  
    mouseY = event => {
      return event.clientY;
    };
  
    positionElement = event => {
      var mouse;
      mouse = {
        x: mouseX(event),
        y: mouseY(event) };
  
      follower.style.top = mouse.y + 'px';
      return follower.style.left = mouse.x + 'px';
    };
  
    timer = false;
  
    window.onmousemove = init = event => {
      var _event;
      _event = event;
      return timer = setTimeout(() => {
        return positionElement(_event);
      }, 1);
    };
  
  }).call(this);
  
  
  //# sourceURL=coffeescript