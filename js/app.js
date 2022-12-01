const hambergurManu = document.querySelector(".hamburger");

hambergurManu.onclick = function () {
    const navBar = document.querySelector(".ul");
    navBar.classList.toggle("active");
}

var isShow = true;
var LangBton = document.getElementById("edata");

LangBton.addEventListener("click", () => {
  if (isShow) {
    LangBton.innerHTML = `<i class="fa-solid fa-earth-americas"></i> Bangla`;
    localStorage.setItem("cLung", "English");
    isShow = false;
  } else {
    LangBton.innerHTML = `<i class="fa-solid fa-landmark-flag"></i> English`;
    localStorage.setItem("cLung", "Bangla");
    isShow = true;
  }

});

let tableHade = ["SL NO", "Name of Service", "Service Time", "Price (P/P)"]

let serviceListEn = [
  {
    sl: "01",
    sname: "Photo Copy (Digital Masation)",
    serTime: "Instant",
    price: "2.5 Tk",
  },
  {
    sl: "02",
    sname: "Photo Print (Passport, 4R, 3R. Size)",
    serTime: "10 Minites",
    price: "40 Tk",
  },
  {
    sl: "03",
    sname: "Scan Copy (Color & B/W)",
    serTime: "Instant",
    price: "20 Tk",
  },
  {
    sl: "04",
    sname: "Scan & Mail (PDF, JPG, & Docmant File)",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "05",
    sname: "Computer Compoge & Print",
    serTime: "1-2 Hour",
    price: "100 Tk",
  },
  {
    sl: "06",
    sname: "Computer Servsing (Softwer & Windows instalation)",
    serTime: "2-4 Hour",
    price: "200 Tk",
  },
  {
    sl: "07",
    sname: "online job application",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "08",
    sname: "online admission application ",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "09",
    sname: "New NID  Applicatin ",
    serTime: "Instant",
    price: "100 Tk",
  },
  {
    sl: "10",
    sname: " NID correction  Applicatin ",
    serTime: "Instant",
    price: "100 Tk",
  },
  {
    sl: "11",
    sname: " NID Reissue/Damage Applicatin ",
    serTime: "Instant",
    price: "100 Tk",
  },
  {
    sl: "12",
    sname: "New Birth/Death Applicatin ",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "13",
    sname: " Birth/Death Correction Applicatin ",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "14",
    sname: " Birth/Death Reissue/Damage Applicatin ",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "15",
    sname: " Online Bus Ticket Booking ",
    serTime: "Instant",
    price: "30 Tk",
  },
  {
    sl: "16",
    sname: " Online Train Ticket Booking ",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "17",
    sname: " Online Airlies Ticket Booking ",
    serTime: "Instant",
    price: "200 Tk",
  },
  {
    sl: "18",
    sname: "Zabeda Khatian",
    serTime: "20 Days",
    price: "20 Tk",
  },
  {
    sl: "19",
    sname: "Khatian (Online Copy)",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "20",
    sname: "Covid-19 Reg:/Certificate",
    serTime: "Instant",
    price: "30 Tk",
  },
  {
    sl: "21",
    sname: "BMET Regastation",
    serTime: "3 Days",
    price: "400 Tk",
  },
  {
    sl: "22",
    sname: "Probashi training Certificate",
    serTime: "Instant",
    price: "60 Tk",
  },
];
let serviceListBn = [
  { sl: '০১', sname: "ফটোকপি", serTime: "তাৎক্ষণিক", price: "২.৫ Tk (P/P)"}
]

let isShows = localStorage.getItem("cLung");
let setService = [];


if (isShows === "English") {
  setService = serviceListBn;
} else if (isShows === "Bangla") {
  setService = serviceListEn;
};

let tBody = document.querySelector(".serData");

function serviceTable() {
  let table = document.createElement('table');
  let rowH = document.createElement('tr');

  tableHade.forEach((heder) => {
    let slist = document.createElement("th");
    let textNode = document.createTextNode(heder);
    slist.appendChild(textNode);
    rowH.appendChild(slist);
  });
  table.appendChild(rowH);

  serviceListEn.forEach((list) => {
    let row = document.createElement("tr");

    Object.values(list).forEach((text) => {
      let cell = document.createElement("td");
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  tBody.appendChild(table);
};

serviceTable();

var titleArray = [
  "VWD Applation",
  "BDRIS Applation",
  "MIS Applation",
  "BMET Applation",
  "COVID-19 Applation",
  "E-Papoert Applation"
];
var imgArray = [
  "./style/images/computer.jpg",
  "./style/images/Profile.jpeg",
  "./style/images/Profile2.jpg",
  "./style/images/Profile.jpeg",
  "./style/images/Profile2.jpg",
  "./style/images/Profile.jpeg",
];
var dateArray = [
  "30/11/2022",
  "05/10/2022",
  "30/11/2022",
  "05/10/2022",
  "30/11/2022",
  "05/10/2022",
];

var cardBody = document.querySelector(".cardWraper");

for (var index = 0; index < titleArray.length; index++) {
  const element = titleArray[index];
  var cardBody2 = document.querySelector(".cardWraper").innerHTML;
  cardBody.innerHTML =
    `
  <div class="sCard">
                    <div class="imgDiv">
                            <img src="${imgArray[index]}" alt="" srcset="">
                        </div>
                        <div class="textDiv">
                            <h3>${element}</h3>
                            <p> Dedline: ${dateArray[index]}</p>
                        </div>
                    </div>
  ` + cardBody2;
}

var titleArray = [
  "1-9 Class Addmation",
  "Mother & Chalild Applation",
  "XI Class Addmation",
  "DC Naogaon Job",
];
var imgArray = [
  "./style/images/dshe.png",
  "./style/images/25-8.png",
  "./style/images/IXCLASS.jpg",
  "./style/images/DC-Naogaon.jpg",
];
var dateArray = [
  "06/12/2022",
  "25/12/2022",
  "Comening soon",
  "10/12/2022"
];

var aplayCard = document.querySelector(".aplayCard");

for (var index = 0; index < titleArray.length; index++) {
  const element = titleArray[index];
  var aplayCard2 = document.querySelector(".aplayCard").innerHTML;
  aplayCard.innerHTML =
    `
  <div class="sCard">
                    <div class="imgDiv">
                            <img src="${imgArray[index]}" alt="" srcset="">
                        </div>
                        <div class="textDiv">
                            <h3>${element}</h3>
                            <p> Dedline: ${dateArray[index]}</p>
                        </div>
                    </div>
  ` + aplayCard2;
}
