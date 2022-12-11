var clubTk = document.querySelector("#ctk");
var MamberTk = document.querySelector("#Mtk");
var Clube1 = document.querySelector("#Mtk1");
var MamberTk2 = document.querySelector("#Mtk2");
var invest = document.querySelector("#invest");
var invast2 = document.querySelector("#invast2");
var cash = document.querySelector("#cash");
var cash2 = document.querySelector("#cash2");
var cir = document.querySelector("#cir");
var psValu = document.querySelector("#psValu");
var psValu2 = document.querySelector("#psValu2");
var psValu3 = document.querySelector("#psValu3");
var psValu4 = document.querySelector("#psValu4");

var countDownDate = new Date("Aug 1, 2021 15:37:25").getTime();
var now = new Date().getTime();
var distance = now - countDownDate;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var month = Math.floor(days / 30);
var mamberLength = month * 23;

var clubBlance = `${550 * 23 + mamberLength * 400}`;
var mamberTk = 128670;
var invast = 113115;
var captial = mamberTk - invast;
var mTk100 = Math.floor((mamberTk / clubBlance) * 100);
var invastTk100 = Math.floor((invast / mamberTk) * 100);
var cashTk100 = Math.floor((captial / mamberTk) * 100);

clubTk.innerHTML = `<i class="fa-solid fa-bangladeshi-taka-sign"></i> ${clubBlance}`;
MamberTk.innerHTML = `<i class="fa-solid fa-bangladeshi-taka-sign"></i> ${mamberTk}`;
invest.innerHTML = `<i class="fa-solid fa-bangladeshi-taka-sign"></i> ${invast}`;
cash.innerHTML = `<i class="fa-solid fa-bangladeshi-taka-sign"></i> ${captial}`;
psValu.innerHTML = "100%";
psValu2.innerHTML = `${mTk100}%`;
psValu3.innerHTML = `${invastTk100}%`;
psValu4.innerHTML = `${cashTk100}%`;

Clube1.style.background = `conic-gradient(#04088d ${360}deg, #fff  0deg)`;
MamberTk2.style.background = `conic-gradient(#04088d ${
  mTk100 * 3.7}deg, #fff  0deg)`;

invast2.style.background = `conic-gradient(#04088d ${
  invastTk100 * 3.7}deg, #fff  0deg)`;

cash2.style.background = `conic-gradient(#04088d ${
  cashTk100 * 3.7}deg, #fff  0deg)`;

var mamberName = [
  "Rakib Hossain",
  "Mahadhi Hasan",
  "Shahinur Islam",
  "Murad Hossain",
  "Mir Hossain",
  "Shakil Hossain",
  "Abu Rahib",
].reverse();
var imgarry = [
  "../style/images/rakib.jpg",
  "../style/images/sovo.jpg",
  "../style/images/Profile.jpeg",
  "../style/images/Profile.jpeg",
  "../style/images/Profile.jpeg",
  "../style/images/Profile.jpeg",
  "../style/images/Profile.jpeg",
].reverse();
var degnation = [
  "Chaiman",
  "Casher",
  "Secritary",
  "Mamber",
  "Mamber",
  "Mamber",
  "Mamber",
].reverse();

var tChada = ["5500", "5050", "4500", "4550", "4550", "4550", "4550"].reverse();

var joinDate = [
  "01/10/2019",
  "01/10/2019",
  "01/10/2019",
  "01/10/2019",
  "01/10/2019",
  "01/10/2019",
  "01/10/2019",
].reverse();

var mamberCard = document.querySelector(".cardWraper2");

for (let index = 0; index < mamberName.length; index++) {
  const element = mamberName[index];
  var mamberCard2 = document.querySelector(".cardWraper2").innerHTML;
  mamberCard.innerHTML =
    `<div class="cardBody">
                        <div id="cflx" class="cradFont">
                            <img src="${imgarry[index]}" alt="" srcset="">
                            <span>${degnation[index]}</span>
                        </div>
                        <div class="cardBack">
                            <h2>${mamberName[index]}</h2>
                            <h3>${degnation[index]}</h3>
                            <div class="tk">
                                <div>
                                    <p>${tChada[index]}</p>
                                    <p>Mamber</p>
                                </div>
                                <div>
                                    <p>${month * 400}</p>
                                    <p>Club</p>
                                </div>
                                <div>
                                    <p>${month * 400 - tChada[index]}</p>
                                    <p>Due TK</p>
                                </div>
                            </div>
                            <p class="joinD">Join Date: ${joinDate[index]}</p>
                        </div>
                        <div class="btnDiv">
                            <button id="moreBtn">Name: ${
                              mamberName[index]
                            }</button>
                            <div class="angilLeft"></div>
                            <div class="angilRight"></div>
                        </div>
                    </div>` + mamberCard2;
}
