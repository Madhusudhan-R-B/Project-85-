canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_width = 70;
car_height = 140;

car_x = 0;
car_y = 0;

background_image = "../Parking-lot.jpeg";
car_image = "NicePng_car-top-view-png_546502.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;
    
    car_imgTag = new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src = car_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar(){
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    if(keyPressed == "37"){
        left();
        console.log("left");
    }

    if(keyPressed == "38"){
        up();
        console.log("up");
    }

    if(keyPressed == "39"){
        right();
        console.log("right");
    }

    if(keyPressed == "40"){
        down();
        console.log("down");
    }
}

function left(){
    if(car_x >= 0){
        car_x = car_x - 10;
        uploadbackground();
        uploadcar();
    }
}

function up(){
    if(car_y >= 0){
        car_y = car_y - 10;
        uploadbackground();
        uploadcar();
    }
}

function right(){
    if(car_x <= 800){
        car_x = car_x + 10;
        uploadbackground();
        uploadcar();
    }
}

function down(){
    if(car_y <= 600){
        car_y = car_y + 10;
        uploadbackground();
        uploadcar();
    }
}