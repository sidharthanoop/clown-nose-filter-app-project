nosex=0;
nosey=0;
function preload () {
clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup () {
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes);
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function gotposes (results) {
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x+95;
        console.log("nose x = " +nosex);
        nosey=results[0].pose.nose.y+100;
        console.log("nose y = " +nosey);
    }
} 
function draw () {
image(video,0,0,500,500);
image(clown_nose,nosex,nosey,50,50);
}
function take_photo () {
    save('filtered_photo.png');
}