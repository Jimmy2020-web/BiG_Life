
for (let index = 1; index <= 250; index++) {
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector(".bgAnis").appendChild(box);    
}

function boxAnimet() {
    let boxes = document.querySelectorAll(".box");
    let num = Math.floor(Math.random() * boxes.length);
    boxes[num].classList.toggle("animated");
}

setInterval(boxAnimet)