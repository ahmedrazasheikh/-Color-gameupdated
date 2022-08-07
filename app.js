// First i declare variable for score 
var score = 0 ;

// Grap score id from html
var scoreid = document.getElementById('score')
console.log(scoreid)


// First step Start
var allCircle = document.querySelectorAll(".circle")
console.log(allCircle)
console.log(allCircle[0])

// array of colors //
 var colors = ['sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']

console.log(colors)

// for loop for putting colors 

for (let index = 0; index < 20; index++) {
    // variable for select random colors
var randomcolors = Math.floor(Math.random()*colors.length)
console.log(randomcolors)
// console.log('Working Properly')
allCircle[index].style.backgroundColor = colors[randomcolors]
}


//  Random color for user hint //

var colorsForselected = Math.floor(Math.random()*colors.length)

var selectedColor = document.getElementById("random-color")
selectedColor.innerText = colors[colorsForselected]

// First step completed







// Second step completed


function matching (object){

var thisObjectValue = object

var clickcolorname =   thisObjectValue.style.backgroundColor
console.log(clickcolorname,typeof(clickcolorname))

// here Checking Condition // 
if(clickcolorname === selectedColor.innerText ){
thisObjectValue.style.display = "none"; 
   var secondchoicerandom  = Math.floor(Math.random()*colors.length)
   selectedColor.innerText = colors[secondchoicerandom]
//    console.log(secondchoicerandom ,typeof(secondchoicerandom))
  
score++
  console.log(score + "  Ahmed Raza")
  scoreid.innerText = `Score : ${score}`
  if(score === 3 ){
    alert("You Have Win The Game")
  }
}


for (let index = 0; index < 20; index++) {
    // variable for select random colors
var randomcolors = Math.floor(Math.random()*colors.length)
console.log(randomcolors)
// console.log('Working Properly')
allCircle[index].style.backgroundColor = colors[randomcolors]
}



}



