objects = []
status = ""


function setup()
{
    canvas = createCanvas(380, 380)
    canvas.center()
video = createCapture(VIDEO)
video.size(380, 380)
video.hide()
}

function modelLoaded()
{
    console.log("model Loaded!")
    status = true
}

function start()
{
    objectDetector = ml5.objectDetector('coossd', modelLoaded)
    document.getElementById("status").innerHTML = "status : Detecting Objects"
    object_name = document.getElementById("object_name").value
}

function draw()
{
    image(video, 0, 0, 380, 380)
    if("status" != "")
    {
        objectDetector.detect(video, gotResults)
        for(i = 0; i< objects.length; 1++)
        {
            document.getElementById("status").innerHTML = "status : Object Detected"
            fill("#FF0000")
             percent = floor(objects[i].confidence * 100)
             text(objects[i].label + percent + "%", objects[i].x + 15, objects[i].y + 15)
           noFill()
           stroke("#FF0000") 
        rect( objects[i].x,  objects[i].y,  objects[i].width,  objects[i].height )
                
        if(object[i].label == object_name)
        {
video.stop()
objectDetector.detect(gotResult)
document.getElementById("object_status").innerHTML = object_name + " found"
  synth = window.speechSynthesis
  utterThis = new SpeechSynthesisUtterance(object_name + " found")
  synth.speak(utterThis)
}
else{
    document.getElementById("object_status").innerHTML = object_name + " Not Found"
}
        }
    }
}
  function gotResults(error, results)
  {
    console.log(results)
    objects = results
  }