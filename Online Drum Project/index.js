
//eventListener




for (var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", WhenClicked)
}

function WhenClicked() {
    var audio1 = new Audio('./sounds/tom-1.mp3');
    var audio2 = new Audio('./sounds/tom-2.mp3');
    var audio3 = new Audio('./sounds/tom-3.mp3');
    var audio4 = new Audio('./sounds/tom-4.mp3');
    var audio5 = new Audio('./sounds/snare.mp3');
    var audio6 = new Audio('./sounds/kick-bass.mp3');
    var audio7 = new Audio('./sounds/crash.mp3');

    var buttonClicked = this.innerHTML;
    switch(buttonClicked){
        case "w":
            audio1.play();
            break;
        case "a":
            audio2.play();
            break;
        case "s":
            audio3.play();
            break;
        case "d":
            audio4.play();
            break;
        case "j":
            audio5.play();
            break;
        case "k":
            audio6.play();
            break;
        case "l":
            audio7.play();
            break;
        default:
            alert("wrong Input given");
    }
}