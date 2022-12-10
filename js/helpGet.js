var clubTk = document.querySelector("#ctk");
var MamberTk = document.querySelector("#Mtk");
var invest = document.querySelector("#invest");
var cash = document.querySelector("#cash");

var clubBlance = (15 * 400)*22;
var mamberTk = 9200;
var invast = 106000;
var captial = clubBlance - invast;
 
clubTk.innerHTML = `<i class="fa-solid fa-bangladeshi-taka-sign"></i> ${clubBlance}`;
MamberTk.innerHTML = `<i class="fa-solid fa-bangladeshi-taka-sign"></i> ${clubBlance}`;
invest.innerHTML = `<i class="fa-solid fa-bangladeshi-taka-sign"></i> ${invast}`;
cash.innerHTML = `<i class="fa-solid fa-bangladeshi-taka-sign"></i> ${captial}`;
 
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

 var tChada = [
   "5500",
   "5050",
   "4500",
   "4550",
   "4550",
   "4550",
   "4550",
 ].reverse();

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
                                    <p>${16 * 450}</p>
                                    <p>Club</p>
                                </div>
                                <div>
                                    <p>${16 * 450 - tChada[index]}</p>
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