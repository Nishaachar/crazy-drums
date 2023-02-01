//selecting the whole button array and assigning it to a variable
let buttonCount = document.querySelectorAll(".button");

//For loop to add click eventListener to all strings of button's inner html
for (let n = 0; n < buttonCount.length; n++) {
buttonCount[n].addEventListener("click", function (){
 let buttonInnerHtml = this.innerHTML;
 makeSound(buttonInnerHtml);    //calling makeSound function with buttonInnerHtml as argument.
 animateButton(buttonInnerHtml); //calling animateButton function with buttonInnerHtml as argument.
 }
)}

//Adding eventListener to listen for keydown on whole document
document.addEventListener("keydown", function(event){ 
    makeSound(event.key); //calling makeSound function with event.key as argument.
    animateButton(event.key); //calling animateButton function with buttonInnerHtml as argument.
});


//Function to diffeernt sounds at different events
function makeSound(key) {
    
    switch (key) {
        case "w":
            let crash = new Audio('crash.mp3');
            crash.play();
            break;  
        case "a":
            let kickBass = new Audio('kick-bass.mp3');
            kickBass.play();
            break;
        case "s":
            let snare = new Audio('snare.mp3');
            return snare.play();
            break;
        case "d":
            let tom1 = new Audio('tom-1.mp3');
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio('tom-2.mp3');
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio('tom-3.mp3');
            tom3.play();
            break;       
        case "l":
            let tom4 = new Audio('tom-4.mp3');
            tom4.play();
            break;     
        default:
            console.log(buttonInnerHtml);
}
}

//Function to animate the pressed button
function animateButton (currentKey){
let activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
    activeButton.classList.remove("pressed");
}, 150);
};
