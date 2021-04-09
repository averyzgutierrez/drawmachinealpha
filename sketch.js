let backColor;
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  //background(255,195,11)
  //button = createButton('Choose a background Color');
  //button.mousePressed(buttonPressed);
 // button.style ('background-color', '#f5efd5');
 // button.position(300, 450);
 // backColor = color( random(255), random(255), random(255) );
  // background(backColor);
  
} 

function draw() { 
  background(255,195,11,5)
  strokeWeight(strokeWidth);
  
  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 10;
  
  
  stroke(map(mouseX, 0, 600,0,225,true))
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
   line(mouseX,mouseY,pmouseX,pmouseY);
 //stroke(0);
 // if (mouseIsPressed === true) {
 // rect(mouseX, mouseY, pmouseX, pmouseY) 
  
  function keyTyped () {
    
    if (key === 's') {
      
      saveCanvas('fileName','png');
       } else if (key === 'c') {
         
         clear();
       }
    return false;
  }
 
    



//function buttonPressed(){
//backColor = color( random(255), random(255), random(255) );
}





