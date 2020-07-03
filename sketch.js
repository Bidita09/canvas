var database; 

var drawing = [];

function setup() {
  canvas = createCanvas(400,400);
 /* var config = {
    apiKey: "AIzaSyAL3nLNwWcUmKPVZlNepsEYzAC650BoRsI",
    authDomain: "canvas-part-1-da182.firebaseapp.com",
    databaseURL: "https://canvas-part-1-da182.firebaseio.com",
    storageBucket: "canvas-part-1-da182.appspot.com",
    messagingSenderId: "546026874681",

};
firebase.initializeApp(config);
database = firebase.database();*/

}
function draw() {
  background(0);  
 // drawSprites();

  
if(mouseIsPressed){
  var point = {
    x: mouseX,
    y: mouseY
  }
  drawing.push(point);
}

beginShape();
stroke(234);
strokeWeight(3);
noFill();
for(var i = 0; i < drawing.length; i++){
  vertex(drawing[i].x,drawing[i].y);
}
endShape();

}