function cuerntdate() {
  let today = new Date();
  let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
  let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth() + 1}`;
  let year = today.getFullYear();
  let cdate = `${day}/${month}/${year} ইং।`;
  document.getElementById("cruntDate").innerText = cdate;
  setInterval(() => {
    document.getElementById("cDate2").value = cdate;
  }, 500);
}
cuerntdate();
function passvalue() {
  var oriceInfo1 = document.querySelector("#oriceInfo1").value;
  var oriceInfo2 = document.querySelector("#oriceInfo2").value;
  var oriceInfo3 = document.querySelector("#oriceInfo3").value;
  var oriceInfo4 = document.querySelector("#oriceInfo4").value;
  var oriceInfo5 = document.querySelector("#oriceInfo5").value;
  var oriceInfo6 = document.querySelector("#oriceInfo6").value;
  var oriceInfo7 = document.querySelector("#oriceInfo7").value;
  var oriceInfo8 = document.querySelector("#oriceInfo8").value;

  var oriceInfo36 = document.querySelector("#oriceInfo36").value;
  var oriceInfo37 = document.querySelector("#oriceInfo37").value;
  var oriceInfo38 = document.querySelector("#oriceInfo38").value;

  localStorage.setItem("oriceInfo1", oriceInfo1);
  localStorage.setItem("oriceInfo2", oriceInfo2);
  localStorage.setItem("oriceInfo3", oriceInfo3);
  localStorage.setItem("oriceInfo4", oriceInfo4);
  localStorage.setItem("oriceInfo5", oriceInfo5);
  localStorage.setItem("oriceInfo6", oriceInfo6);
  localStorage.setItem("oriceInfo7", oriceInfo7);
  localStorage.setItem("oriceInfo8", oriceInfo8);
  localStorage.setItem("oriceInfo36", oriceInfo36);
  localStorage.setItem("oriceInfo37", oriceInfo37);
  localStorage.setItem("oriceInfo38", oriceInfo38);
  return false;
}

var autoBtn = document.getElementById("autoBtn");
var save = true;

autoBtn.addEventListener("click", () => {
  if (save === false) {
    autoBtn.innerHTML = `<i class="material-icons">&#xe9f5</i>`;
    oriceInfo4.value = "";
    oriceInfo5.value = "";
    oriceInfo38.value = "";
    return (save = true);
  }
  if (save === true) {
    autoBtn.innerHTML = `<i class="material-icons">&#xe9f6</i>`;
    oriceInfo4.value = "নওগাঁ";
    oriceInfo5.value = "রাণীনগর";
    oriceInfo38.value = "০২নং কাশিমপুর";
    return (save = false);
  }
});

window.addEventListener("load", () => {
  if (save === true) {
    autoBtn.innerHTML = `<i class="material-icons">&#xe9f6</i>`;
    oriceInfo4.value = "নওগাঁ";
    oriceInfo5.value = "রাণীনগর";
    oriceInfo38.value = "০২নং কাশিমপুর";
  }
});

var printBtn = document.querySelector("#print");
var clearBtn = document.querySelector("#clear");
var addBtn = document.querySelector("#add_Btn");
var inputBox = document.getElementById("oriceInfo9");
var inputBox2 = document.getElementById("oriceInfo10");
var inputBox3 = document.getElementById("oriceInfo11");
var List = document.getElementById("jsData");
var tabe2Data = document.querySelector("#table");
var i = 1;
var index1 = 1;
var index2 = 1;
var index3 = 1;

addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("ওয়ারিশ গণের নাম লিখুন..!");
  } else if (inputBox2.value === "") {
    alert("সম্পর্ক লিখুন..!");
  } else {
    let slDiv = document.createElement("span");
    tabe2Data.appendChild(slDiv);
    slDiv.id = "oriceOneRow";
    let mDiv = document.createElement("input");
    mDiv.value = inputBox.value;
    slDiv.appendChild(mDiv);
    mDiv.id = "nameDiv";
    mDiv.setAttribute("name", `OriceName${index1++}`);
    let assDiv = document.createElement("input");
    assDiv.value = inputBox2.value;
    slDiv.appendChild(assDiv);
    assDiv.setAttribute("name", `Assinding${index2++}`);
    let cmDiv = document.createElement("input");
    cmDiv.value = inputBox3.value;
    slDiv.appendChild(cmDiv);
    cmDiv.setAttribute("name", `Coment${index3++}`);
    linkPage();
  }
  inputBox.value = "";
  inputBox2.value = "";
  inputBox3.value = "";
  saveData();
});

List.addEventListener("click", function (e) {
  if (e.target.innerHTML === "edit_square") {
    i--;
    index1--;
    index2--;
    index3--;
    inputBox.value = localStorage.getItem("LateName");
    inputBox2.value = localStorage.getItem("AssName");
    inputBox3.value = localStorage.getItem("ComName");
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.innerHTML === "delete") {
    e.target.parentElement.remove();
    i--;
    index1--;
    index2--;
    index3--;
    saveData();
  }
  false;
});

function saveData() {
  localStorage.setItem("setData", List.innerHTML);
}

function showData() {
  List.innerHTML = localStorage.getItem("setData");
}

showData();

function deletTable() {
  List.remove();
}

function linkPage() {
  let slDiv = document.createElement("span");
  slDiv.innerHTML = i++;
  List.appendChild(slDiv);
  slDiv.id = "oriceOneRow";
  
  let mDiv = document.createElement("span");
  mDiv.innerHTML = inputBox.value;
  slDiv.appendChild(mDiv);
  mDiv.id = "nameDiv";
  localStorage.setItem("LateName", mDiv.textContent);

  let assDiv = document.createElement("span");
  assDiv.innerHTML = inputBox2.value;
  slDiv.appendChild(assDiv);
  localStorage.setItem("AssName", assDiv.textContent);

  let cmDiv = document.createElement("span");
  cmDiv.innerHTML = inputBox3.value;
  slDiv.appendChild(cmDiv);
  localStorage.setItem("ComName", cmDiv.textContent);

  let editBtn = document.createElement("span");
  editBtn.innerHTML = "edit_square";
  slDiv.appendChild(editBtn);
  editBtn.classList.add("material-icons");

  let delBtn = document.createElement("span");
  delBtn.innerHTML = "delete";
  slDiv.appendChild(delBtn);
  delBtn.classList.add("material-icons");
}

window.addEventListener("load", () => {
  document.querySelector(".popUp").style.display = "none";
});

printBtn.addEventListener("click", () => {
  if (oriceInfo1.value == "") {
    console.log("মৃত ব্যক্তির নাম লিখুন..!   😡");
  } else if (oriceInfo2.value == "") {
    console.log("মৃত ব্যক্তির পিতার নাম লিখুন..!   😡");
  } else if (oriceInfo4.value == "") {
    console.log("ঠিকানায় জেলার নাম লিখুন..!   😡");
  } else if (oriceInfo5.value == "") {
    console.log("ঠিকানায় উপজেলার নাম লিখুন..!   😡");
  } else if (oriceInfo38.value == "") {
    console.log("ঠিকানায় ইউনিয়নের নাম লিখুন..!   😡");
  } else if (oriceInfo6.value == "") {
    console.log("ঠিকানায় গ্রামের নাম লিখুন..!   😡");
  } else if (oriceInfo7.value == "") {
    console.log("ঠিকানায় ডাকঘরের নাম লিখুন..!   😡");
  } else if (oriceInfo36.value == "") {
    console.log("আবেদনকারীর নাম লিখুন..!   😡");
  } else if (oriceInfo37.value == "") {
    console.log("আবেদনকারীর পিতার নাম লিখুন..!   😡");
  } else {
    document.querySelector(".popUp").style.display = "flex";
    prossing();
  }
});

function prossing() {
  setTimeout(() => {
    var audio = new Audio();
    audio.src = "correct.mp3";
    audio.play();
    passvalue();
    // window.open("./Orish_From.html");
    // document.querySelector(".popUp").style.display = "none";
  }, 1000);
}
clearBtn.addEventListener("click", () => {
  var inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
  localStorage.clear();
  deletTable();
});

var alartAudio = new Audio();
alartAudio.src = "energy-90321.mp3";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwEz03akDkBN3kF062EGBqpHUha8JDikLusIZbsYeSKF_ZkhoUWsYfsTWLsJSCjK_O7/exec";
const form = document.forms["oriceData"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (oriceInfo1.value == "") {
    createPopup("মৃত ব্যক্তির নাম লিখুন..!   😡");
    alartAudio.play();
    window.scrollTo({ top: 200, behavior: "smooth" });
  } else if (oriceInfo2.value == "") {
    createPopup("মৃত ব্যক্তির পিতার নাম লিখুন..!   😡");
    alartAudio.play();
    window.scrollTo({ top: 200, behavior: "smooth" });
  } else if (oriceInfo4.value == "") {
    createPopup("ঠিকানায় জেলার নাম লিখুন..!   😡");
    alartAudio.play();
    window.scrollTo({ top: 400, behavior: "smooth" });
  } else if (oriceInfo5.value == "") {
    createPopup("ঠিকানায় উপজেলার নাম লিখুন..!   😡");
    alartAudio.play();
    window.scrollTo({ top: 400, behavior: "smooth" });
  } else if (oriceInfo38.value == "") {
    createPopup("ঠিকানায় ইউনিয়নের নাম লিখুন..!   😡");
    alartAudio.play();
    window.scrollTo({ top: 400, behavior: "smooth" });
  } else if (oriceInfo6.value == "") {
    createPopup("ঠিকানায় গ্রামের নাম লিখুন..!   😡");
    alartAudio.play();
    window.scrollTo({ top: 400, behavior: "smooth" });
  } else if (oriceInfo7.value == "") {
    createPopup("ঠিকানায় ডাকঘরের নাম লিখুন..!   😡");
    alartAudio.play();
    window.scrollTo({ top: 400, behavior: "smooth" });
  } else if (oriceInfo36.value == "") {
    createPopup("আবেদনকারীর নাম লিখুন..!   😡");
    alartAudio.play();
  } else if (oriceInfo37.value == "") {
    createPopup("আবেদনকারীর পিতার নাম লিখুন..!   😡");
    alartAudio.play();
  } else {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        window.open("./Orish_From.html");
        document.querySelector(".popUp").style.display = "none";
      })
      .catch((error) => console.error("Error!", error.message));
  }
});

function chakeOnline() {
  if (navigator.onLine == true) {
    const url =
      "https://docs.google.com/spreadsheets/d/1TFwKqWHzA9ATUR0PQYvHlq2QPTKO2XRBIodLDKUWVDY/gviz/tq?";
    const output = document.querySelector("#output");

    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        const data = JSON.parse(rep.substr(47).slice(0, -2));
        var lastItem = data.table.rows.length;
        localStorage.setItem("srial", lastItem);
        output.innerHTML = `আবেদন ফরম নং :- ${lastItem} <span class="blink"></span>`;
      });
  } else {
    const output = document.querySelector("#output");
    output.innerHTML = "ইন্টারনেট সংযোগ নেই!";
  }
}

chakeOnline();

window.addEventListener("online", () => {
  createPopup("Online");
});
window.addEventListener("offline", () => {
  createPopup("No Internet");
});

function createPopup(text) {
  let el = document.createElement("DIV");
  el.classList.add("popup");
  el.innerHTML = text;
  document.body.appendChild(el);
  setTimeout(() => {
    el.remove();
  }, 4000);
}
