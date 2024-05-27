status="";

function setup(){
    canvas= createCanvas(620, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : detecting objects"
}
function modelLoaded(){
console.log("model loaded");
status=true
objectDetector.detect(img, gotResult);}



function gotResult(error, results){
if (error){
console.log(error);
}
console.log(results);
}



function preload(){
    a1 = loadImage("1 (2).jpg");
}

