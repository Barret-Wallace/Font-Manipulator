leftWristX = 0;
rightWristX = 0;
difference = 0;
function preload(){

}
function setup(){
    s = createCapture(VIDEO);
s.size(500,500);
s.position(100,200);
canvas = createCanvas(500,400);
canvas.position(800, 260);

pose = ml5.poseNet(s, modelLoaded);
pose.on("pose", gotPoses);
}
function draw() {
    background('#6C91C2');
    
      document.getElementById("size_of_font").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#FFE787');
    text('Elan', 50, 400);
    }
function modelLoaded(){
    console.log("Model is Loaded");
}
function gotPoses(result){       
    if(result.length > 0){
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

