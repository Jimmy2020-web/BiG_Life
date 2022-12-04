function myFun() {
  const pxValue = document.querySelector("#px-Value").value;
  const display = document.getElementById("px");
  const totalNum = pxValue * 0.0625;
  const totalNum2 = totalNum.toPrecision(4);
  display.innerText = totalNum2;
}
//*********************latest produact*****************
const PhoneData = [
  {
    pname: "Symphony",
    Model: "Z40",
    BDprice: "10,490",
    releaseDate: "Apr 2021",
    pimage:
      "https://www.symphony-mobile.com/storage/products/normal-1ODK6GEU3ZmBjNhLryqFb9vcI.png",
    AndirodV: "10.0",
    camera: "13MP",
    RAM: "2.3GHz",
    ROM: "32GB",
  },
  {
    pname: "Symphony",
    Model: "Z30 pro",
    BDprice: "10,890",
    releaseDate: "21-Feb-2020",
    pimage:
      "https://www.symphony-mobile.com/storage/products/normal-j8wJtxDR5dk4cZeVTa8bW7x4o.png",
    AndirodV: "10.0",
    camera: "13MP",
    RAM: "1.8GHz",
    ROM: "64GB",
  },
  {
    pname: "Symphony",
    Model: "Z35",
    BDprice: "9,990",
    releaseDate: "21-Jun-2019",
    pimage:
      "https://www.symphony-mobile.com/storage/products/normal-nfaYzQ231k7O3ifu2NBzZ1iJl.png",
    AndirodV: "11.0",
    camera: "13MP",
    RAM: "2.3GHz",
    ROM: "32GB",
  },
  {
    pname: "Symphony",
    Model: "Z32",
    BDprice: "8,590",
    releaseDate: "21-May-2020",
    pimage:
      "https://www.symphony-mobile.com/storage/products/normal-3oGJLY8rAFMMaAZZblb3XWjLl.png",
    AndirodV: "10.0",
    camera: "13MP",
    RAM: "1.6GHz",
    ROM: "32GB",
  },
  {
    pname: "Symphony",
    Model: "i67",
    BDprice: " 5,990",
    releaseDate: "21-May-2020",
    pimage:
      "https://www.symphony-mobile.com/storage/products/normal-d9Gb7jkDLdoH6tBmCJK6L6C4d.png",
    AndirodV: "10.0",
    camera: "8MP",
    RAM: "1.6GHz",
    ROM: "16GB",
  },
  {
    pname: "Symphony",
    Model: "Z18",
    BDprice: " 7,790",
    releaseDate: "21-May-2020",
    pimage:
      "https://www.symphony-mobile.com/storage/products/normal-Daf2kmWipbhlVIK7lX1pN9xkp.png",
    AndirodV: "10.0",
    camera: "8MP",
    RAM: "1.6GHz",
    ROM: "16GB",
  },
  {
    pname: "Symphony",
    Model: "ATOM",
    BDprice: " 5,990",
    releaseDate: "21-May-2020",
    pimage:
      "https://www.symphony-mobile.com/storage/products/normal-kSruv9ShAhodIrPr1mW4TEb31.png",
    AndirodV: "10.0",
    camera: "13MP",
    RAM: "1.8GHz",
    ROM: "32GB",
  },
  {
    pname: "Symphony",
    Model: "L260",
    BDprice: " 1,499",
    releaseDate: "21-May-2020",
    pimage:
      "https://www.symphony-mobile.com/storage/products/normal-6vvHFjBSDcjpPi3oxOdgOdADQ.png",
    AndirodV: "10.0",
    camera: ".08MP",
    RAM: "1.6GHz",
    ROM: "16GB",
  },
];
//**************footur animation style***************

function scrollApper() {
  const fadeanimation = document.querySelector(".profile-fottur");
  const textPosation = fadeanimation.getBoundingClientRect().top;
  const screenPosation = window.innerHeight / 1.3;

  if (textPosation < screenPosation) {
    fadeanimation.classList.add("fadeanimation-add");
  }
}

window.addEventListener("scroll", scrollApper);

function scrollApper2() {
  const fadeanimation = document.querySelector(".pro-detls");
  const textPosation = fadeanimation.getBoundingClientRect().top;
  const screenPosation = window.innerHeight / 1.3;

  if (textPosation < screenPosation) {
    fadeanimation.classList.add("fadeanimation-add");
  }
}

window.addEventListener("scroll", scrollApper2);
//**********end*************

function phoneCards(PhoneData, index) {
  return `
    <div className="card-margin">
        <div class="card-body">
            <img class="" src="${PhoneData.pimage}" alt="...">
            <p class="new"> NEW<p/>
            <div class="">
                <h4 class="">${PhoneData.pname}  ${PhoneData.Model}</h4>
            </div>
            <div class="">
            <h6>Price TK : <span class="badge badge-danger">${PhoneData.BDprice} /=</span></h6>
              <small class="text-muted"><i class="fab fa-android"></i> ${PhoneData.AndirodV}</small>
              <small class="text-muted"><i class="fas fa-microchip"></i> ${PhoneData.RAM}</small>
              <small class="text-muted"><i class="fas fa-hdd"></i> ${PhoneData.ROM}</small>
              <small class="text-muted"><i class="fas fa-camera"></i> ${PhoneData.camera}</small>
            </div>
        </div>
    </div>
    `;
}

document.getElementById("cards").innerHTML = `
${PhoneData.map(phoneCards).join("")}
`;

//***************Last prodact price update*************************
const lastPriceUpdate = [
  {
    pname: "Nokia",
    Model: "X20",
    BDprice: "TK: 25,999",
    bPrice: "26,5999",
    releaseDate: "Apr 2021",
    pimage:
      "https://backend.robishop.com.bd/pub/media/catalog/product/n/o/nokia_4.2_black_1.jpg",
    AndirodV: "MT 11",
    camera: "32/64MP ZEISS",
    RAM: "2.3GHz",
    ROM: "6/128GB",
  },
  {
    pname: "Nokia",
    Model: "X10",
    BDprice: "TK: 10,499",
    bPrice: "12,499",
    releaseDate: "Apr 2021",
    pimage:
      "https://backend.robishop.com.bd/pub/media/catalog/product/n/o/nokia_6.2_black_1.jpg",
    AndirodV: "MT 11",
    camera: "8/62MP ZEISS",
    RAM: "2.3GHz",
    ROM: "4/64GB",
  },
  {
    pname: "Nokia",
    Model: "G20",
    BDprice: "TK: 25,999",
    bPrice: "26,5999",
    releaseDate: "Apr 2021",
    pimage:
      "https://backend.robishop.com.bd/pub/media/catalog/product/n/o/nokia_2.2_black_1_1.jpg",
    AndirodV: "MT 13",
    camera: "8/64MP ZEISS",
    RAM: "2.3GHz",
    ROM: "8/128GB",
  },
  {
    pname: "Oppo ",
    Model: "F19 Pro",
    BDprice: "TK: 27,490",
    bPrice: "28,990.00",
    releaseDate: "Apr 2021",
    pimage:
      "https://backend.robishop.com.bd/pub/media/catalog/product/o/p/oppo_f19_pro__8_128_black_1.jpg",
    AndirodV: "MT 13",
    camera: "8/64MP ZEISS",
    RAM: "2.3GHz",
    ROM: "8/128GB",
  },
  {
    pname: "Oppo ",
    Model: "F17",
    BDprice: "TK: 18,990",
    bPrice: "20,900",
    releaseDate: "Apr 2021",
    pimage:
      "https://backend.robishop.com.bd/pub/media/catalog/product/f/1/f17_orange_1.jpg",
    AndirodV: "MT 13",
    camera: "8/64MP ZEISS",
    RAM: "2.3GHz",
    ROM: "8/128GB",
  },
  {
    pname: "Oppo ",
    Model: "F17 Pro",
    BDprice: "TK: 21,990",
    bPrice: "25,900",
    releaseDate: "Apr 2021",
    pimage:
      "https://backend.robishop.com.bd/pub/media/catalog/product/1/7/17_pro_black_1.jpg",
    AndirodV: "MT 13",
    camera: "8/64MP ZEISS",
    RAM: "2.3GHz",
    ROM: "8/128GB",
  },
  {
    pname: "Vivo  ",
    Model: "V20",
    BDprice: "TK: 28,490",
    bPrice: "29,990",
    releaseDate: "Apr 2021",
    pimage:
      "https://backend.robishop.com.bd/pub/media/catalog/product/v/2/v20_purple_1.jpg",
    AndirodV: "MT 13",
    camera: "8/64MP ZEISS",
    RAM: "2.3GHz",
    ROM: "8/128GB",
  },
  {
    pname: "Vivo  ",
    Model: "Y12s",
    BDprice: "TK: 11,990",
    bPrice: "12,990",
    releaseDate: "Apr 2021",
    pimage:
      "https://backend.robishop.com.bd/pub/media/catalog/product/y/1/y12s_white_1.jpg",
    AndirodV: "MT 13",
    camera: "8/64MP ZEISS",
    RAM: "2.3GHz",
    ROM: "3/32GB",
  },
  {
    pname: "Vivo  ",
    Model: "Y50 ",
    BDprice: "TK: 22,990",
    bPrice: "23,990",
    releaseDate: "Apr 2021",
    pimage:
      "https://backend.robishop.com.bd/pub/media/catalog/product/m/a/main_14_1.jpg",
    AndirodV: "MT 13",
    camera: "8/64MP ZEISS",
    RAM: "2.3GHz",
    ROM: "8/128GB",
  },
];

function lastPriceUpdatePhone(lastPriceUpdate) {
  return `
  <div className="card-margin">
        <div class="updata-card-body">
            <img class="" src="${lastPriceUpdate.pimage}" alt="...">
            <div class="">
              <h4 class="">${lastPriceUpdate.pname}  ${lastPriceUpdate.Model}</h4>
            </div>
            <div class="">
            <h5 >Price : <span class="bPrice">${lastPriceUpdate.bPrice}<span/> <span class="badge badge-danger">${lastPriceUpdate.BDprice} /=</span></h5>
              <small class="text-muted"><i class="fab fa-android"></i> ${lastPriceUpdate.AndirodV}</small>
              <small class="text-muted"><i class="fas fa-microchip"></i> ${lastPriceUpdate.RAM}</small>
              <small class="text-muted"><i class="fas fa-hdd"></i> ${lastPriceUpdate.ROM}</small>
              <small class="text-muted"><i class="fas fa-camera"></i> ${lastPriceUpdate.camera}</small>
            </div>
        </div>
    </div>
  `;
}

document.getElementById("price-card").innerHTML = `
${lastPriceUpdate.map(lastPriceUpdatePhone).join("")}
`;
