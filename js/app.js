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

const slides =document.querySelectorAll("#slide");
var counter = 0;

slides.forEach( (slide, index) => {
  slide.style.left = `${index * 100}%`;
})

const goPrev = () => {
  if (counter>0) {
    counter--
  }
  slideImg()
}
const goNext = () => {
  if (counter<2) {
    counter++
  }
  slideImg()
}

window.onload= function () {
  setInterval(() => {
    if (counter<2) {
      counter++
    }else if (counter > 0) {
      counter = "0";
    } else {
      console.log(counter);
    }
    slideImg()
  }, 5000);
}


const slideImg = () => {
  slides.forEach( (slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  })
}

let tableHade = ["ক্রঃ নং", "সেবা সূমহের নাম", "সেবা প্রাপ্তির সময়", "একক মূল্য"]

let serviceListEn = [
  {
    sl: "০১",
    sname: "ফটোকপি (ডিজিটাল মেশিন)",
    serTime: "তাৎক্ষণিক",
    price: "২.৫ Tk",
  },
  {
    sl: "০২",
    sname: "ছবি প্রিন্ট (Passport, 4R, 3R Size)",
    serTime: "১০ মিনিট",
    price: "৪০ Tk",
  },
  {
    sl: "০৩",
    sname: "স্ক্যান কপি (Color & B/W)",
    serTime: "তাৎক্ষণিক",
    price: "২০ Tk",
  },
  {
    sl: "০৫",
    sname: "স্ক্যান & ই-মেইল (PDF, JPG, & Docmant File)",
    serTime: "তাৎক্ষণিক",
    price: "৫০ Tk",
  },
  {
    sl: "০৫",
    sname: "কম্পিউটার কম্পজ & প্রিন্ট (A4-1 Page)",
    serTime: "১-২ ঘন্টা",
    price: "১০০ Tk",
  },
  {
    sl: "০৬",
    sname: "কম্পিউটার সার্ভিসিং (Softwer & Windows instalation)",
    serTime: "২-৪ ঘন্টা",
    price: "২০০ Tk",
  },
  {
    sl: "০৭",
    sname: "অনলাইনে চাকুরী আবেদন",
    serTime: "তাৎক্ষণিক",
    price: "৫০ Tk",
  },
  {
    sl: "০৭",
    sname: "অনলাইনে ভর্তির আবেদন",
    serTime: "তাৎক্ষণিক",
    price: "৫০ Tk",
  },
  {
    sl: "০৯",
    sname: "নতুন জাতীয়পরিচয়পত্রের(ভোটার) আবেদন",
    serTime: "তাৎক্ষণিক",
    price: "১০০ Tk",
  },
  {
    sl: "১০",
    sname: "নতুন জাতীয়পরিচয়পত্রের(ভোটার) প্রিন্ট ",
    serTime: "তাৎক্ষণিক",
    price: "১০০ Tk",
  },
  {
    sl: "১১",
    sname: "জাতীয়পরিচয়পত্রের(ভোটার) তথ্য সংশোধনের আবেদন",
    serTime: "তাৎক্ষণিক",
    price: "১০০ Tk",
  },
  {
    sl: "১২",
    sname: " হারানো/নষ্ট জাতীয়পরিচয়পত্রের(ভোটার) প্রাপ্তির আবেদন ",
    serTime: "তাৎক্ষণিক",
    price: "১০০ Tk",
  },
  {
    sl: "১৩",
    sname: "নতুন জন্ম/মৃত্যু নিবন্ধনের আবেদন",
    serTime: "তাৎক্ষণিক",
    price: "৫০ Tk",
  },
  {
    sl: "১৪",
    sname: "জন্ম/মৃত্যু নিবন্ধনে তথ্য সংশোধন আবেদন",
    serTime: "তাৎক্ষণিক",
    price: "৫০ Tk",
  },
  {
    sl: "১৫",
    sname: " হারানো/নষ্ট জন্ম/মৃত্যু প্রাপ্তির আবেদন ",
    serTime: "তাৎক্ষণিক",
    price: "৫০ Tk",
  },
  {
    sl: "১৬",
    sname: "অনলাইনে বাস টিকিট বুকিং",
    serTime: "তাৎক্ষণিক",
    price: "৩০ Tk",
  },
  {
    sl: "১৭",
    sname: "অনলাইনে ট্রেন টিকিট বুকিং",
    serTime: "তাৎক্ষণিক",
    price: "৫০ Tk",
  },
  {
    sl: "১৮",
    sname: "অনলাইনে বিমানের টিকিট বুকিং",
    serTime: "তাৎক্ষণিক",
    price: "২০০ Tk",
  },
  {
    sl: "১৯",
    sname: "জাবেদা খতিয়ান",
    serTime: "২০ দিন",
    price: "২০০ Tk",
  },
  {
    sl: "২০",
    sname: "খতিয়ানের অনলাইন কপি",
    serTime: "তাৎক্ষণিক",
    price: "৫০ Tk",
  },
  {
    sl: "২১",
    sname: "কভিড-১৯ টিকা/সনদ",
    serTime: "তাৎক্ষণিক",
    price: "৩০ Tk",
  },
  {
    sl: "২২",
    sname: "BMET নিবন্ধন সনদ",
    serTime: "৩ দিন",
    price: "৪০০ Tk",
  },
  {
    sl: "২৩",
    sname: "প্রবাসী প্রশিক্ষণ সনদ",
    serTime: "তাৎক্ষণিক",
    price: "৬০ Tk",
  },
  {
    sl: "২৪",
    sname: "স্কুল/প্রতিষ্ঠানের আইডি কার্ড তৈরি",
    serTime: "২-৭ দিন",
    price: "৩০ Tk",
  },
  {
    sl: "২৫",
    sname: "ভূমি কর(খাজনা) পরিষদ",
    serTime: "তাৎক্ষণিক",
    price: "৫০ Tk",
  },
  {
    sl: "২৬",
    sname: "অনলাইনে ভিসা চেকেইং",
    serTime: "তাৎক্ষণিক",
    price: "২০০ Tk",
  },
  {
    sl: "২৭",
    sname: "লেমেনেটিং (6R 6RL/A4)",
    serTime: "তাৎক্ষণিক",
    price: "২০/৩০ Tk",
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

function websiteVisits(response) {
  document.querySelector("#visitor").textContent = response.value;
}