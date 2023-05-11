noseX = 0
noseY = 0
RightWristX = 0
LeftWristX = 0
Difference = 0
    function setup(){
    drawingBoard = createCanvas(500,399)
    drawingBoard.position(550, 125)
    Picture = createCapture(VIDEO)
    Picture.size(500, 400)

    hi = ml5.poseNet(Picture, ModelLoaded)
    hi.on("pose", posee)
}

function ModelLoaded(){
    console.log("Model Loaded")
}
function posee(results){
    if (results.length>0){
        console.log(results)

        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y

        RightWristX = results[0].pose.rightWrist.x
        LeftWristX = results[0].pose.leftWrist.x

        Difference = floor(LeftWristX - RightWristX)
    }
}
function draw(){
    background("green")

    fill("red")
    stroke("black")
    textSize(Difference)
    text("Hiroki" , noseX, noseY)
    
}