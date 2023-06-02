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

const sKey = Number(localStorage.getItem("sKey"));

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
            <p id="">আবেদন নম্বরঃ ${sKey + 253}/2022-23</p>
            <p id="">তারিখঃ ${data.table.rows[sKey].c[40].v}</p>
            </div><br>
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

{/* <table id="table_js">
              <thead>
                <tr>
                  <th>ক্রমিক</th>
                  <th>ওয়ারিশের নাম</th>
                  <th>সম্পর্ক</th>
                  <th>মন্তব্য</th>
                </tr>
              </thead>
              <tbody>
                <tr id="inject">
                  <td>1</td>
                  <td>sd</td>
                  <td>sd</td>
                  <td>dg</td>
                </tr>
              </tbody>
            </table> */}