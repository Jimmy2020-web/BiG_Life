const hambergurManu = document.querySelector(".hamburger");

hambergurManu.onclick = function () {
    const navBar = document.querySelector(".ul");
    navBar.classList.toggle("active");
}

const fbBtn = document.querySelector(".fa-facebook");
fbBtn.addEventListener("click", () => {
  window.open("https://www.facebook.com/sagor.hosin/");
});

const linkBtn = document.querySelector(".fa-linkedin-in");
linkBtn.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/shahinur-islam-90b057103/");
});

const youtubBtn = document.querySelector(".fa-youtube");
youtubBtn.addEventListener("click", () => {
  window.open("https://www.youtube.com/channel/UCdO1hd0vkL2kc-_p8H5nzYw");
})

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

var heroTitle = document.querySelector("#hTitle");
setInterval(() => {
  let x = Math.floor(Math.random() * 100);
  if (x < 32) {
    heroTitle.innerHTML =
      "বাংলাদেশ সেনাবাহিনীতে আবেদন চলছে শেষ তারিখ: ৩১/০১/২০২২ ইং।";
  } else if (x < 64) {
    heroTitle.innerHTML = "একাদশ শ্রেনীতে ভর্তীর আবেদন চলছে শেষ তারিখ ১৫/১২/২০২২ ইং।";
  } else if (x < 100){
    heroTitle.innerHTML = "বাংলাদেশ পুলিশ বাহিনীতে আবেদন চলছে শেষ তারিখ: ৩১/১২/২০২২ ইং।";
  }
}, 3000);

let tableHade = ["SL NO", "Name of Service", "Service Time", "Price (P/P)"]

let serviceListEn = [
  {
    sl: "01",
    sname: "Photo Copy (Digital Machine)",
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
    sname: "Computer Compoge & Print (A4-1 Page)",
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
    sname: "New NID Downlode & Print ",
    serTime: "Instant",
    price: "100 Tk",
  },
  {
    sl: "11",
    sname: " NID correction  Applicatin ",
    serTime: "Instant",
    price: "100 Tk",
  },
  {
    sl: "12",
    sname: " NID Reissue/Damage Applicatin ",
    serTime: "Instant",
    price: "100 Tk",
  },
  {
    sl: "13",
    sname: "New Birth/Death Applicatin ",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "14",
    sname: " Birth/Death Correction Applicatin ",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "15",
    sname: " Birth/Death Reissue/Damage Applicatin ",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "16",
    sname: " Online Bus Ticket Booking ",
    serTime: "Instant",
    price: "30 Tk",
  },
  {
    sl: "17",
    sname: " Online Train Ticket Booking ",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "18",
    sname: " Online Airlies Ticket Booking ",
    serTime: "Instant",
    price: "200 Tk",
  },
  {
    sl: "19",
    sname: "Zabeda Khatian",
    serTime: "20 Days",
    price: "200 Tk",
  },
  {
    sl: "20",
    sname: "Khatian (Online Copy)",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "21",
    sname: "Covid-19 Reg:/Certificate",
    serTime: "Instant",
    price: "30 Tk",
  },
  {
    sl: "22",
    sname: "BMET Regastation",
    serTime: "3 Days",
    price: "400 Tk",
  },
  {
    sl: "23",
    sname: "Probashi training Certificate",
    serTime: "Instant",
    price: "60 Tk",
  },
  {
    sl: "24",
    sname: "School & Instute ID Card Making",
    serTime: "2-7 Days",
    price: "30 Tk",
  },
  {
    sl: "25",
    sname: "Land Tax Paymant",
    serTime: "Instant",
    price: "50 Tk",
  },
  {
    sl: "26",
    sname: "Online Visa Chaking",
    serTime: "Instant",
    price: "200 Tk",
  },
  {
    sl: "27",
    sname: "Lamanating (A6/A4)",
    serTime: "Instant",
    price: "20/30 Tk",
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
  "BMET Applation",
  "COVID-19 Applation",
];
var imgArray = [
  "./style/images/computer.jpg",
  "./style/images/computer.jpg",
  "./style/images/computer.jpg",
  "./style/images/computer.jpg",
];
var dateArray = [
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
                    <div class="card-inner">
                    <div class="imgDiv">
                            <img src="${imgArray[index]}" alt="" srcset="">
                            <p>${element}</p>
                        </div>
                        <div class="textDiv">
                            <p>${element}</p>
                            <p> Dedline: ${dateArray[index]}</p>
                            <p>${element[index]}</p>
                        </div>
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
  "End Applation",
  "25/12/2022",
  "15/12/2022",
  "10/12/2022"
];
var detlisArray = [
  "End Applation",
  "25/12/2022",
  "সর্বোচ্চ 10 এবং সর্বনিম্ন 5টি পছন্দ। </br> চার্জ ব্যতীত 150 টাকা ফি প্রদান। </br> অভিভাবকের মোবাইল নম্বর এবং জাতীয় পরিচয়পত্র প্রয়োজন৷ </br> সাধারণ বিভাগে বিজ্ঞান/মানবিক/ব্যবসা শাখায় আবেদন করা যাবে।",
  "10/12/2022",
];

var aplayCard = document.querySelector(".aplayCard");

for (var index = 0; index < titleArray.length; index++) {
  const element = titleArray[index];
  var aplayCard2 = document.querySelector(".aplayCard").innerHTML;
  aplayCard.innerHTML =
    `
  <div class="sCard">
                  <div class="card-inner">
                    <div class="imgDiv">
                            <img src="${imgArray[index]}" alt="" srcset="">
                            <p>${element}</p>
                        </div>
                        <div class="textDiv">
                        <h3> Dedline: ${dateArray[index]}</h3>
                        <p>${detlisArray[index]}</p>
                        </div>
                    </div>
                  </div>
  ` + aplayCard2;
};

var payTk = document.querySelector("#payTk");
const enloll = document.querySelector("#enroll");
const enloll2 = document.querySelector("#enroll2");
const enloll3 = document.querySelector("#enroll3");
enloll.addEventListener("click", () => {
  payTk.innerHTML = "TK 2999/-";
  document.querySelector(".paymant_popup").classList.add("d-block");
});
enloll2.addEventListener("click", () => {
  document.querySelector(".paymant_popup").classList.add("d-block");
  payTk.innerHTML = "TK 3999/-";
});
enloll3.addEventListener("click", () => {
  document.querySelector(".paymant_popup").classList.add("d-block");
  payTk.innerHTML = "TK 4999/-";
});
const clsBtn = document.querySelector("#clsBtn");
clsBtn.addEventListener("click", () => {
  document.querySelector(".paymant_popup").classList.remove("d-block");
});
const btnpay = document.querySelector(".btn-pay");
btnpay.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".pay-box").classList.add("d-none");
  document.querySelector(".pay-back").classList.add("d-block");
});
const cls2 = document.querySelector("#cls2");
cls2.addEventListener("click", () => {
  document.querySelector(".paymant_popup").classList.remove("d-block");
  document.querySelector(".pay-back").classList.add("d-block");
});
