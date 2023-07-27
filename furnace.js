img = "";
status = ""; 

function setup() {

canvas = createCanvas(648, 420);
canvas.center();
object_detector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status: detecting objects"

}

function modelLoaded() {

console.log("model Loaded");
status = "true";
object_detector.detect(img, gotResult);

}

function gotResult(error, results) {

if(error) {

console.log(error);


}

else {

console.log(results);

}


}