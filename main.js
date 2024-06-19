recognition.onresult = function(event) {
    
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
        if(Content == "take my selfie")
        {
            console.log("taking selfie --- ");
            speak();
        }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        if(img_id=="selfie#1"){
        document.getElementById("resultShow").innerHTML = '<img id="result#1" src="' + data_uri + '">';
        }
        if(img_id=="selfie#1"){
        document.getElementById("resultShow").innerHTML = '<img id="result#2" src="' + data_uri + '">';
        }
        if(img_id=="selfie#1"){
        document.getElementById("resultShow").innerHTML = '<img id="result#3" src="' + data_uri + '">';
        }
    });
}