
//detecting button press: option 1
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",
    function (){//using anonymous function 
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    });

}

//detecting keypress: option 2
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){//using switch case to give sound to according to the image
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;//breaking before the next case
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
        default: console.log(buttonInnerHtml);//setting the default value to produce the current button incase something goes wrong
  
}
}

//adding animation to the keypressed
function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");
//setting the timeout so that the pressed style does not stay on the key forever
    setTimeout(function (){
        activeButton.classList.remove("pressed")
    }, 100);
}