
function passvalue() {
    var oriceInfo1 = document.querySelector('#oriceInfo1').value;
    var oriceInfo2 = document.querySelector('#oriceInfo2').value;
    var oriceInfo3 = document.querySelector('#oriceInfo3').value;
    var oriceInfo4 = document.querySelector('#oriceInfo4').value;
    var oriceInfo5 = document.querySelector('#oriceInfo5').value;
    var oriceInfo6 = document.querySelector('#oriceInfo6').value;
    var oriceInfo7 = document.querySelector('#oriceInfo7').value;
    var oriceInfo8 = document.querySelector('#oriceInfo8').value;
    var oriceInfo9 = document.querySelector('#oriceInfo9').value;
    var oriceInfo10 = document.querySelector('#oriceInfo10').value;
    var oriceInfo11 = document.querySelector('#oriceInfo11').value;
    var oriceInfo12 = document.querySelector('#oriceInfo12').value;
    var oriceInfo13 = document.querySelector('#oriceInfo13').value;
    var oriceInfo14 = document.querySelector('#oriceInfo14').value;
    var oriceInfo15 = document.querySelector('#oriceInfo15').value;
    var oriceInfo16 = document.querySelector('#oriceInfo16').value;
    var oriceInfo17 = document.querySelector('#oriceInfo17').value;
    var oriceInfo18 = document.querySelector('#oriceInfo18').value;
    var oriceInfo19 = document.querySelector('#oriceInfo19').value;
    var oriceInfo20 = document.querySelector('#oriceInfo20').value;
    var oriceInfo21 = document.querySelector('#oriceInfo21').value;
    var oriceInfo22 = document.querySelector('#oriceInfo22').value;
    var oriceInfo23 = document.querySelector('#oriceInfo23').value;
    var oriceInfo24 = document.querySelector('#oriceInfo24').value;
    var oriceInfo25 = document.querySelector('#oriceInfo25').value;
    var oriceInfo26 = document.querySelector('#oriceInfo26').value;
    var oriceInfo27 = document.querySelector('#oriceInfo27').value;
    var oriceInfo28 = document.querySelector('#oriceInfo28').value;
    var oriceInfo29 = document.querySelector('#oriceInfo29').value;
    var oriceInfo30 = document.querySelector('#oriceInfo23').value;
    var oriceInfo31 = document.querySelector('#oriceInfo31').value;
    var oriceInfo32 = document.querySelector('#oriceInfo32').value;
    var oriceInfo33 = document.querySelector('#oriceInfo33').value;
    var oriceInfo34 = document.querySelector('#oriceInfo34').value;
    var oriceInfo35 = document.querySelector('#oriceInfo35').value;
    var oriceInfo36 = document.querySelector('#oriceInfo36').value;
    var oriceInfo37 = document.querySelector('#oriceInfo37').value;
    var oriceInfo38 = document.querySelector('#oriceInfo38').value;
    
    localStorage.setItem("oriceInfo1",oriceInfo1);
    localStorage.setItem("oriceInfo2",oriceInfo2);
    localStorage.setItem("oriceInfo3",oriceInfo3);
    localStorage.setItem("oriceInfo4",oriceInfo4);
    localStorage.setItem("oriceInfo5",oriceInfo5);
    localStorage.setItem("oriceInfo6",oriceInfo6);
    localStorage.setItem("oriceInfo7",oriceInfo7);
    localStorage.setItem("oriceInfo8",oriceInfo8);
    localStorage.setItem("oriceInfo9",oriceInfo9);
    localStorage.setItem("oriceInfo10",oriceInfo10);
    localStorage.setItem("oriceInfo11",oriceInfo11);
    localStorage.setItem("oriceInfo12",oriceInfo12);
    localStorage.setItem("oriceInfo13",oriceInfo13);
    localStorage.setItem("oriceInfo14",oriceInfo14);
    localStorage.setItem("oriceInfo15",oriceInfo15);
    localStorage.setItem("oriceInfo16",oriceInfo16);
    localStorage.setItem("oriceInfo17",oriceInfo17);
    localStorage.setItem("oriceInfo18",oriceInfo18);
    localStorage.setItem("oriceInfo19",oriceInfo19);
    localStorage.setItem("oriceInfo20",oriceInfo20);
    localStorage.setItem("oriceInfo21",oriceInfo21);
    localStorage.setItem("oriceInfo22",oriceInfo22);
    localStorage.setItem("oriceInfo23",oriceInfo23);
    localStorage.setItem("oriceInfo24",oriceInfo24);
    localStorage.setItem("oriceInfo25",oriceInfo25);
    localStorage.setItem("oriceInfo26",oriceInfo26);
    localStorage.setItem("oriceInfo27",oriceInfo27);
    localStorage.setItem("oriceInfo28",oriceInfo28);
    localStorage.setItem("oriceInfo29",oriceInfo29);
    localStorage.setItem("oriceInfo30",oriceInfo30);
    localStorage.setItem("oriceInfo31",oriceInfo31);
    localStorage.setItem("oriceInfo32",oriceInfo32);
    localStorage.setItem("oriceInfo33",oriceInfo33);
    localStorage.setItem("oriceInfo34",oriceInfo34);
    localStorage.setItem("oriceInfo35",oriceInfo35);
    localStorage.setItem("oriceInfo36",oriceInfo36);
    localStorage.setItem("oriceInfo37",oriceInfo37);
    localStorage.setItem("oriceInfo38",oriceInfo38);
    return false;
}

var printBtn = document.querySelector('#print');
var clearBtn = document.querySelector('#clear');

window.addEventListener('load', () => {
    document.querySelector(".popUp").style.display = "none";
})

printBtn.addEventListener('click', ()=> {
    document.querySelector(".popUp").style.display = "flex";
    prossing()
});

function prossing() {
    setTimeout(() => {
        passvalue()
        window.open("./Orish_From.html");
        document.querySelector(".popUp").style.display = "none";
    }, 4000);
}

clearBtn.addEventListener('click', () =>{
    var inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = "");
    window.location.reload(true);
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwEz03akDkBN3kF062EGBqpHUha8JDikLusIZbsYeSKF_ZkhoUWsYfsTWLsJSCjK_O7/exec'
  const form = document.forms['oriceData']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

//   https://docs.google.com/spreadsheets/d/1TFwKqWHzA9ATUR0PQYvHlq2QPTKO2XRBIodLDKUWVDY/edit?usp=sharing
const url = 'https://docs.google.com/spreadsheets/d/1TFwKqWHzA9ATUR0PQYvHlq2QPTKO2XRBIodLDKUWVDY/gviz/tq?';

fetch(url)
.then(res => res.text())
.then(rep => {
    const data = JSON.parse(rep.substr(47).slice(0,-2));
    data.table.cols.forEach((heading=>{
        // console.log(heading);
    }))
    console.log(data.table.rows.length+2);
    var lastItem = (data.table.rows.length+2);
    localStorage.setItem("srial",lastItem);
    data.table.rows.forEach((main=>{
        var lastItem = main.c;
        // console.log(lastItem.length - 1)
    }))
})