function displayText() {
    var dText = document.getElementById('chouse').value;
    localStorage.setItem("dText", dText);
}
function passvalue() {
    var printInfo = document.querySelector('#info').value;
    var printInfo1 = document.querySelector('#info1').value;
    var printInfo2 = document.querySelector('#info2').value;
    var printInfo3 = document.querySelector('#info3').value;
    var printInfo4 = document.querySelector('#info4').value;
    var printInfo5 = document.querySelector('#info5').value;
    var printInfo6 = document.querySelector('#info6').value;
    localStorage.setItem("textvalue",printInfo);
    localStorage.setItem("textvalue1",printInfo1);
    localStorage.setItem("textvalue2",printInfo2);
    localStorage.setItem("textvalue3",printInfo3);
    localStorage.setItem("textvalue4",printInfo4);
    localStorage.setItem("textvalue5",printInfo5);
    localStorage.setItem("textvalue6",printInfo6);
    return false;
}

var printBtn = document.querySelector('#print');
var clearBtn = document.querySelector('#clear');

printBtn.addEventListener('click', ()=> {
    passvalue();
    window.open('print.html',"", 'width=600px');
});

clearBtn.addEventListener('click', () =>{
    var inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = "");
    window.location.reload(true);
});
