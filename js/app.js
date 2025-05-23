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
  if (counter<3) {
    counter++
  }
  slideImg()
}

window.onload= function () {
  setInterval(() => {
    if (counter<3) {
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

window.addEventListener('load', () => {
  document.querySelector(".popUp").style.display = "none";
})

// Eid-Ul Fitue-2024
var target_date = new Date('apr 01, 2025 15:37:25').getTime();

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("counter"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = `<span> ${days} </span> <span> ${hours} </span><span> ${minutes}</span><span> ${seconds}</span>`;
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

var today = new Date();
var dd = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'][new Date().getDay()]
const MonthAr = Intl.DateTimeFormat('en-TN-u-ca-islamic', {month: 'numeric'}).format(Date.now());
var ArDateMonth = ['মহরম', 'সফর', 'রবিউল আউয়াল', 'রবিউস সানি', 'জমাদিউল আউয়াল', 'জমাদিউস সানি', ' রজব', 'শাবান', 'রমজান', "শওয়াল", 'জিলক্বদ', 'জিলহজ্জ'][MonthAr-1]

const ArDateDay = Intl.DateTimeFormat('en-TN-u-ca-islamic', {day: 'numeric'}).format(Date.now());
const ArDateYear = Intl.DateTimeFormat('en-TN-u-ca-islamic', {year: 'numeric'}).format(Date.now());

const todayEn = document.querySelector(".dateEn");
todayEn.innerHTML = `
<p>${ArDateYear}</p>
        <p>
          <span>${(ArDateDay)-1}</span>
          <span>${ArDateMonth}</span>
        </p>
        <p>${dd}</p>
`;

const iftDay = Intl.DateTimeFormat('en', {day: 'numeric'}).format(Date.now());
const iftMonth = Intl.DateTimeFormat('en', {month: 'long'}).format(Date.now());

var iftLocal = iftMonth+iftDay;

var ramadan_calendar = {
  March1: "6:05 PM",
  March2: "6:05 PM",
  March3: "6:10 PM",
  March4: "6:10 PM",
  March5: "6:11 PM",
  March6: "6:11 PM",
  March7: "6:12 PM",
  March8: "6:12 PM",
  March9: "6:13 PM",
  March10: "6:13 PM",
  March11: "6:13 PM",
  March12: "6:14 PM",
  March13: "6:14 PM",
  March14: "6:21 PM",
  March15: "6:21 PM",
  March16: "6:22 PM",
  March17: "6:22 PM",
  March18: "6:23 PM",
  March19: "6:23 PM",
  March20: "6:24 PM",
  March21: "6:24 PM",
  March22: "6:24 PM",
  March23: "6:24 PM",
  March24: "6:24 PM",
  March25: "6:24 PM",
  March26: "6:24 PM",
  March27: "6:24 PM",
  March28: "6:24 PM",
  March29: "6:24 PM",
  March30: "6:24 PM",
};

function matchData(obj, key) {
  return obj[key];
}

var match = matchData(ramadan_calendar, iftLocal);

var iftTime = `{
  ${iftLocal}:${match}
}`;

document.querySelector("#fixIft").innerHTML = `সন্ধ্যা ${match}`;

// setInterval(() => {
//   var terget_time = new Date( iftMonth + iftDay +", 2024 " + match).getTime();
//   var Ctime = new Date().getTime();
//   var leftiftS = (terget_time - Ctime);

//   var _second = 1000,
//     _minut = _second * 60,
//     _hour = _minut * 60,
//     _day = _hour * 24;

//   var hourSet = Math.floor((leftiftS % _day) / _hour);
//   var minutSet = Math.floor((leftiftS % _hour) / _minut);
//   var secondSet = Math.floor((leftiftS % _minut) / _second);
//   const iftTime2 = document.querySelector("#iftTime");
//   iftTime2.innerHTML = `${hourSet}H ${minutSet}M ${secondSet}S`;
// }, 1000);


const intervalId = setInterval(() => {
  var target_time = new Date(`${iftMonth} ${iftDay}, 2025 ${match}`).getTime();
  var currentTime = new Date().getTime();
  var timeLeft = target_time - currentTime;

  var _second = 1000,
    _minute = _second * 60,
    _hour = _minute * 60,
    _day = _hour * 24;

  var hourSet = Math.floor((timeLeft % _day) / _hour);
  var minuteSet = Math.floor((timeLeft % _hour) / _minute);
  var secondSet = Math.floor((timeLeft % _minute) / _second);

  const iftTime2 = document.querySelector("#iftTime");

  if (timeLeft <= 0) {
    clearInterval(intervalId);
    iftTime2.innerHTML = "00H 00M 00S";
    return;
  }

  iftTime2.innerHTML = `${hourSet}H ${minuteSet}M ${secondSet}S`;

}, 1000);

