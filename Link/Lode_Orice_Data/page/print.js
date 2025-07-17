var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

// ইংরেজি থেকে বাংলা সংখ্যা ম্যাপ
function toBengaliNumber(num) {
  const enToBn = {
    '0': '০',
    '1': '১',
    '2': '২',
    '3': '৩',
    '4': '৪',
    '5': '৫',
    '6': '৬',
    '7': '৭',
    '8': '৮',
    '9': '৯'
  };
  return num.toString().split('').map(char => enToBn[char] || char).join('');
}

var todayBn = toBengaliNumber(dd) + '/' + toBengaliNumber(mm) + '/' + toBengaliNumber(yyyy);


let user_input = document.querySelector("#user_input");
let sBtn = document.querySelector("#sBtn");
let Shet_ID = "1TFwKqWHzA9ATUR0PQYvHlq2QPTKO2XRBIodLDKUWVDY";
let Shet_NAME = "Sheet1";
var Arry_Length = "";
let Shet_RANGE = `A2:AO${Arry_Length}`;
var data = "";

let FULL_URL =
  "https://docs.google.com/spreadsheets/d/" +
  Shet_ID +
  "/gviz/tq?sheet=" +
  Shet_NAME +
  "&range=" +
  Shet_RANGE;

var sKey = Number(localStorage.getItem("sKey"));
var appNo = toBengaliNumber(sKey+253);
var appNoBn = `${appNo}/${toBengaliNumber(yyyy)}-${toBengaliNumber(yyyy+1)}`

function fetchData() {
  fetch(FULL_URL)
    .then((res) => res.text())
    .then((rep) => {
      data = JSON.parse(rep.substr(47).slice(0, -2));
      Arry_Length = data.table.rows.length;
      
      const html_Value = document.querySelector(".prat1");
      const html_Value2 = document.querySelector(".prat2");
        
      let filterData = data.table.rows[sKey].c;
      let fill = filterData.filter(item => item !== null);
      let tabBtn = document.querySelector(".tab");
      let list = document.querySelector(".list");
      const table = document.createElement("table");

      const tbody = document.createElement("tbody");

      let fill2 = fill.slice(4, -1);

      for (let i = 0; i < fill2.length / 3; i++) {
        
        const numberSpan = document.createElement('td');
        numberSpan.innerText = (i + 1) + '। ';
        const itemSpan = document.createElement('tr');
        itemSpan.innerText = fill2[i];
        list.appendChild(numberSpan);
      }
      fill.slice(4, -1).forEach(item => {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.textContent = item.v;
        row.appendChild(cell);
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
      tabBtn.appendChild(table);
      
      
      html_Value.innerHTML = `
        <div class="hader">
                <h2>০২নং কাশিমপুর ইউনিয়ন পরিষদ</h2>
                <p>উপজেলাঃ রাণীনগর, জেলাঃ নওগাঁ</p>
                <p id="sonod_T">ওয়ারিশ সনদ পত্র
                <span><img src="./Sonod.png" alt="" srcset=""></span>
                </p>
            </div>
            <div class="dateStamp">
            <p id="nikosh">আবেদন নম্বরঃ ${appNoBn}</p>
            <p id="nikosh">তারিখঃ ${todayBn}</p>
            </div>
            <div class="lateMan_address">
                এই মর্মে উত্তরাধীকার সনদ পত্র প্রদান করিতেছি যে, মৃত <span>${
                  data.table.rows[sKey].c[0].v
                }</span>, পিতা/স্বামীঃ <span>${
        data.table.rows[sKey].c[1].v
      }</span>, গ্রামঃ <span>${
        data.table.rows[sKey].c[2].v
      }</span>, ডাকঘরঃ <span>${
        data.table.rows[sKey].c[3].v
      }</span>, উপজেলাঃ <span>রাণীনগর</span>, জেলাঃ <span>নওগাঁ</span>। অত্র ০২নং কাশিমপুর ইউনিয়নের স্থায়ী বাসিন্দা ছিলেন। তিনি মৃত্যুকালে নিন্ম লিখিত উত্তরাধীকার গণকে রাখিয়া মৃত্যু বরণ করেন। আমার জানামতে নিন্ম লিখিত উত্তরাধীকার ছাড়া অন্য কোন উত্তরাধীকার নাই।
            </div>
            
            <h3 class="hader">উত্তরাধীকারগণের নাম ও সম্পর্ক <img src="./Rebon.png" alt=""> </h3>
            <div class="dataTable" id="">
                <span>ক্রমিক</span>
                <span>ওয়ারিশের নাম</span>
                <span>সম্পর্ক</span>
                <span>মন্তব্য</span>               
            </div>
    `;

    html_Value2.innerHTML = `
    <div class="dateStamp shakkor">
            
      <div class="">
          <p id="">সুপারিশ ইউিপ সদস্য </p>
      </div>
      <div class="QR"><img src="./Verify.png" alt="" srcset=""></div>
        <div class="aother">
        <img src="./char.png" alt="" srcset="">
            <p>
                চেয়ারম্যান <br>
                মোঃ মকলেছুর রহমান বাবু <br>
                ০২নং কাশিমপুর ইউনিয়ন পরিষদ <br>
                রাণীনগর, নওগাঁ। <br>
            </p>
        </div>
      </div>
    `;

  });
}

fetchData();

const pwBtn = document.querySelector(".pwBtn");
const chakePw = document.querySelector(".cpw");
const pwBuserInputtn = document.querySelector(".userInput");

var pLength = document.querySelector("#pwd");
pLength.addEventListener("keyup", () => {
  if (pLength.value.length > 4) {
    pwBtn.style.opacity = 1;
    pwBtn.style.pointerEvents = "all";
  } else if (pLength.value.length < 5) {
    pwBtn.style.opacity = .5;
    pwBtn.style.pointerEvents = "none";
  }
});

pwBtn.addEventListener("click", () => {
  const pwd = document.getElementById("pwd").value;

  if (pwd === "01925") {
    chakePw.classList.add("okStatus");
    document.querySelector(".wroang").innerHTML = "lock_open_right";
    setTimeout(() => {
      chakePw.classList.remove("okStatus");
      pwBuserInputtn.style.display = "none";
    }, 500);
    
  } else {
    document.querySelector("#infoPwd").innerHTML = "আপনার গোপন সংখ্যাটি ভুল..?";
    let wrong_info = document.querySelector(".wroang");
    wrong_info.innerHTML = "cancel";
    wrong_info.style.color = "orangered";
    chakePw.classList.add("okStatus");
    setTimeout(() => {
      wrong_info.innerHTML = "lock";
      chakePw.classList.remove("okStatus");
      document.querySelector("#infoPwd").innerHTML = "আপনার গোপন সংখ্যাটি দিন..!";
      wrong_info.style.color = "#01972e";
    }, 2500);
  }
});


