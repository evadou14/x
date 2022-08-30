Webcam.set({
    width:360,
    height:350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>"
    })
}
console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("https://drive.google.com/file/d/1XmKhSCIOTa6RuBJu5US-AFytjqCL5JkG/view?usp=sharing",model_loaded);
function model_loaded(){
    console.log("Model has been loaded");
}
function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img, gotResults);
}

function gotResults(error, results){
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}