function preload(){

}

function setup(){
canvas=createCanvas(300,300);
video=createCapture(VIDEO);
video.hide();
canvas.position(600,350);
classifier=imageClassifier('https://teachablemachine.withgoogle.com/models/2SxxSiANV/model.json' , modelloaded);
}

function draw(){
image(video,0,0,300,300);
classifier.classify(video , gotresults);
}

function modelloaded(){
    console.log("model is loaded"); 
}

function gotresults(results,error){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}