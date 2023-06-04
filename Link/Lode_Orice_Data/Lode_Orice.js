
let user_input = document.querySelector("#user_input");
let sBtn = document.querySelector("#sBtn");
let Shet_ID = "1TFwKqWHzA9ATUR0PQYvHlq2QPTKO2XRBIodLDKUWVDY";
let Shet_NAME = "Sheet1";
var Arry_Length = "";
let Shet_RANGE = `A2:AO${Arry_Length}`;
var data = "";

sBtn.addEventListener("click", () => {
  let sKye = Number(user_input.value - 253);

  if (sKye > Arry_Length) {
    createPopup(sKye + 253 + " - এই নাম্বার কোন সনদ নেই!");
  } else if (sKye <= -1) {
    createPopup(sKye + 253 + " - এই নাম্বার কোন সনদ নেই!");
  } else if (navigator.onLine === false) {
    createPopup("কোন ইন্টারনেট সংযোগ নেই..!");
  } else {
    let toulTip = document.querySelector("#toulTip");
    toulTip.style.display = "none";
    Arry_Length = data.table.rows.length;
    localStorage.setItem("sKey", sKye);
    let filterData = data.table.rows[sKye].c;
    let fill = filterData.filter((item) => item !== null);
    let fillData2 = fill.filter((el) => el.v !== "-");
    
    let tabBtn = document.querySelector(".tab");
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    fillData2.forEach((item) => {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.textContent = item.v;
      row.appendChild(cell);
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    tabBtn.appendChild(table);
    print();
    }
});

function print() {
  let printBtn = document.querySelector(".print");
    printBtn.addEventListener("click", () => {
    printBtn.innerHTML = "অপেক্ষা করুন..!";
    printBtn.classList.add("bounce");
      setTimeout(() => {
        window.open("./page/print.html", "Blank");
        window.location.reload();
    }, 2000);
  });
}


let FULL_URL = ("https://docs.google.com/spreadsheets/d/" + Shet_ID + "/gviz/tq?sheet=" + Shet_NAME + "&range=" + Shet_RANGE);

function fetchData() {
    
fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    data = JSON.parse(rep.substr(47).slice(0, -2));

    Arry_Length = data.table.rows.length;
    let total_Data_no = document.querySelector("#total_Data_no");
    total_Data_no.innerHTML = `সর্বমোট ${Arry_Length} [ ০১/০৩/২০২৩ হহিতে ]`;

});
}

fetchData(0);


function createPopup(text) {
    let el = document.createElement('DIV');
    el.classList.add('popup');
    el.innerHTML = text;  
    document.body.appendChild(el);
    setTimeout(() => {
      el.remove();
    },5000);
}