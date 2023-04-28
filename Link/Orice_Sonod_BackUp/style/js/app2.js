
function cuerntdate() {
    let today = new Date();
    let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
    let month = `${(today.getMonth() + 1) < 10 ? "0" : ""}${today.getMonth() + 1}`;
    let year = today.getFullYear();
    let cdate = `${day}/${month}/${year} ইং।`;
    document.getElementById('cdate').innerHTML = cdate;
  };
  cuerntdate();
  
document.getElementById('rName').innerHTML = localStorage.getItem("textvalue");
document.getElementById('wName').innerHTML = localStorage.getItem("textvalue1");
document.getElementById('fName').innerHTML = localStorage.getItem("textvalue2");
document.getElementById('fName2').innerHTML = localStorage.getItem("textvalue2");
document.getElementById('fName3').innerHTML = localStorage.getItem("textvalue2");
document.getElementById('mName').innerHTML = localStorage.getItem("textvalue3");
document.getElementById('mName2').innerHTML = localStorage.getItem("textvalue3");
document.getElementById('mName3').innerHTML = localStorage.getItem("textvalue3");
document.getElementById('vName').innerHTML = localStorage.getItem("textvalue4");
document.getElementById('vName2').innerHTML = localStorage.getItem("textvalue4");
document.getElementById('pName').innerHTML = localStorage.getItem("textvalue5");
document.getElementById('oName').innerHTML = localStorage.getItem("textvalue6");
document.getElementById('fHselect').innerHTML = localStorage.getItem("dText");
document.getElementById('fHselect2').innerHTML = localStorage.getItem("dText");
document.getElementById('fHselect3').innerHTML = localStorage.getItem("dText");

function printItem() {
    window.print();
    window.close();
}

setTimeout(() => {
    printItem();
}, 1000);
