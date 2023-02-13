function displayText() {
    var dText = document.getElementById('chouse').value;
    localStorage.setItem("dText", dText);
}
function passvalue() {
    var printInfo = document.querySelector('#name').value;
    var printInfo1 = document.querySelector('#name1').value;
    var printInfo2 = document.querySelector('#name2').value;
    var printInfo3 = document.querySelector('#name11').value;
    var printInfo4 = document.querySelector('#name12').value;
    var printInfo5 = document.querySelector('#name5').value;
    var printInfo6 = document.querySelector('#name6').value;
    var printInfo7 = document.querySelector('#name7').value;
    var printInfo8 = document.querySelector('#name8').value;
    var printInfo9 = document.querySelector('#name9').value;
    var printInfo10 = document.querySelector('#name10').value;
    var printInfo11 = document.querySelector('#name11').value;
    var printInfo12 = document.querySelector('#name12').value;
    var printInfo13 = document.querySelector('#name13').value;
    var printInfo14 = document.querySelector('#name14').value;
    var printInfo15 = document.querySelector('#name15').value;
    var printInfo16 = document.querySelector('#name16').value;
    var printInfo17 = document.querySelector('#name17').value;
    var printInfo18 = document.querySelector('#name18').value;
    var printInfo19 = document.querySelector('#name19').value;
    var printInfo20 = document.querySelector('#name20').value;
    var printInfo21 = document.querySelector('#name21').value;
    var printInfo22 = document.querySelector('#name22').value;
    var printInfo23 = document.querySelector('#name23').value;
    var printInfo24 = document.querySelector('#name24').value;
    var printInfo25 = document.querySelector('#name25').value;
    var printInfo26 = document.querySelector('#name26').value;
    localStorage.setItem("textvalue",printInfo);
    localStorage.setItem("textvalue1",printInfo1);
    localStorage.setItem("textvalue2",printInfo2);
    localStorage.setItem("textvalue3",printInfo3);
    localStorage.setItem("textvalue4",printInfo4);
    localStorage.setItem("textvalue5",printInfo5);
    localStorage.setItem("textvalue6",printInfo6);
    localStorage.setItem("textvalue7",printInfo7);
    localStorage.setItem("textvalue8",printInfo8);
    localStorage.setItem("textvalue9",printInfo9);
    localStorage.setItem("textvalue10",printInfo10);
    localStorage.setItem("textvalue11",printInfo11);
    localStorage.setItem("textvalue12",printInfo12);
    localStorage.setItem("textvalue13",printInfo13);
    localStorage.setItem("textvalue14",printInfo14);
    localStorage.setItem("textvalue15",printInfo15);
    localStorage.setItem("textvalue16",printInfo16);
    localStorage.setItem("textvalue17",printInfo17);
    localStorage.setItem("textvalue18",printInfo18);
    localStorage.setItem("textvalue19",printInfo19);
    localStorage.setItem("textvalue20",printInfo20);
    localStorage.setItem("textvalue21",printInfo21);
    localStorage.setItem("textvalue22",printInfo22);
    localStorage.setItem("textvalue23",printInfo23);
    localStorage.setItem("textvalue24",printInfo24);
    localStorage.setItem("textvalue25",printInfo25);
    localStorage.setItem("textvalue26",printInfo26);
    return false;
}

var printBtn = document.querySelector('#print');
var clearBtn = document.querySelector('#clear');

printBtn.addEventListener('click', ()=> {
    passvalue();
    window.open('EC_Migration_Form.html',"", 'width=600px');
});

clearBtn.addEventListener('click', () =>{
    var inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = "");
    window.location.reload(true);
});

const scriptURL = 'https://script.google.com/macros/s/AKfycby1qALlcYiZOoo-wYbrByvflbPiAdCOblYLmRvyASOkjtGluFQM0_1dndjQhe_SszB6/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
