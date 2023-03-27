var inputFile = document.querySelector("#inputFile");
var previeImage = document.querySelector(".previewPnal img");
var rangInput = document.querySelector("#rangInput");
var chooseBtn = document.querySelector("#chooseBtn");
var saveBtn = document.querySelector("#saveBtn");
var rvalue = document.querySelector("#rvalue");

var loadImage = () => {
    var file = inputFile.files[0];
    var url = previeImage.src = URL.createObjectURL(file);
    var image = document.createElement('img');
    image.src = url;

    image.onload = function () {
        var w = image.width;
        var h = image.height;
        document.getElementsByTagName('span')[0].innerHTML = file.name;
        document.getElementsByTagName('span')[1].innerHTML = w + " " + "X" + h;
        document.getElementsByTagName('span')[2].innerHTML = ((file.size/1024)/1024).toFixed(2) + " " + "MB";
        document.getElementsByTagName('span')[3].innerHTML = file.type;
        
    };
};


//var outputQulity = ((100-v)/100);
//var outputWidth = w * outputQulity;
//var outputHeight = h * outputQulity;

const canvas = document.getElementById("imageCanvas");
const ctx = canvas.getContext("2d");

rangInput.addEventListener('change', resizeimg);

function resizeimg() {
    let outputWidth = rangInput.value;
    let outputHeight = rangInput.value;
    let inputWidth = previeImage.width;
    let inputHeight = previeImage.height;

    // let maniWidth = Math.floor(inputWidth / outputWidth);
    // let maniHeight = Math.floor(inputHeight / outputHeight);

    let aspectRatio = inputWidth / inputWidth;
    let = maniWidth = parseFloat((inputHeight * aspectRatio).toFixed(2));
    let = maniHeight = parseFloat((inputWidth / aspectRatio).toFixed(2));
    let w = Math.floor((maniWidth / outputWidth)+80);
    let h = Math.floor(maniHeight / outputHeight);
    let newSize = (((w * h)/1020)*2).toFixed(1) + " " + "KB";
    
    document.getElementsByTagName('span')[6].innerHTML = "sagor.png";
    document.getElementsByTagName('span')[6].innerHTML = newSize;
    document.getElementsByTagName('span')[5].innerHTML = w + "X" + h;
    document.getElementsByTagName('span')[7].innerHTML = Math.floor(aspectRatio * rangInput.value) + "%";
    rvalue.innerHTML = Math.floor(rangInput.value) + "%";
    
    canvas.width = w;
    canvas.height = h;

    ctx.drawImage(previeImage, 0, 0, w, h);
}

saveBtn.addEventListener('click', saveImage);

function saveImage() {
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(canvas.ToBlob(), "sagor.png");
    }else{
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = "sagor.png";
        a.click();
        document.body.removeChild(a);
    }
}

inputFile.addEventListener('change', loadImage);
chooseBtn.addEventListener('click', () => inputFile.click());