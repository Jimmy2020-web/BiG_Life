function cuerntdate() {
    let today = new Date();
    let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
    let month = `${(today.getMonth() + 1) < 10 ? "0" : ""}${today.getMonth() + 1}`;
    let year = today.getFullYear();
    let cdate = `${day}/${month}/${year} ইং।`;
    // document.getElementById('cdate').innerHTML = cdate;
    localStorage.setItem("cdate", cdate)
  };
  cuerntdate();
  function websiteVisits(response) {
    var srial = response.value;
    localStorage.setItem("srial",srial)
  }

var lateManName = localStorage.getItem("oriceInfo1");
var lateManFatherName = localStorage.getItem("oriceInfo2");
var lateDate = localStorage.getItem("oriceInfo3");
var Dis = localStorage.getItem("oriceInfo4");
var Thana = localStorage.getItem("oriceInfo5");
var UpName = localStorage.getItem("oriceInfo38");
var VlligeName = localStorage.getItem("oriceInfo6");
var postName = localStorage.getItem("oriceInfo7");
var postCode = localStorage.getItem("oriceInfo8");
var oriceInfo1 = localStorage.getItem("oriceInfo9");
var asind1 = localStorage.getItem("oriceInfo10");
var coment1 = localStorage.getItem("oriceInfo11");
var oriceInfo2 = localStorage.getItem("oriceInfo12");
var asind2 = localStorage.getItem("oriceInfo13");
var coment2 = localStorage.getItem("oriceInfo14");
var oriceInfo3 = localStorage.getItem("oriceInfo15");
var asind3 = localStorage.getItem("oriceInfo16");
var coment3 = localStorage.getItem("oriceInfo17");
var oriceInfo4 = localStorage.getItem("oriceInfo18");
var asind4 = localStorage.getItem("oriceInfo19");
var coment4 = localStorage.getItem("oriceInfo20");
var oriceInfo5 = localStorage.getItem("oriceInfo21");
var asind5 = localStorage.getItem("oriceInfo22");
var coment5 = localStorage.getItem("oriceInfo23");
var oriceInfo6 = localStorage.getItem("oriceInfo24");
var asind6 = localStorage.getItem("oriceInfo25");
var coment6 = localStorage.getItem("oriceInfo26");
var oriceInfo7 = localStorage.getItem("oriceInfo27");
var asind7 = localStorage.getItem("oriceInfo28");
var coment7 = localStorage.getItem("oriceInfo29");
var oriceInfo8 = localStorage.getItem("oriceInfo30");
var asind8 = localStorage.getItem("oriceInfo31");
var coment8 = localStorage.getItem("oriceInfo32");
var oriceInfo9 = localStorage.getItem("oriceInfo33");
var asind9 = localStorage.getItem("oriceInfo34");
var coment9 = localStorage.getItem("oriceInfo35");
var applientName = localStorage.getItem("oriceInfo36");
var applientNameFaName = localStorage.getItem("oriceInfo37");
var cdate = localStorage.getItem("cdate");
var srial = localStorage.getItem("srial");

var getTable_Data = localStorage.getItem("setData");
console.log(getTable_Data)

const page1 = document.querySelector(".printPge1");
page1.innerHTML = `
<div class="tileDiv">
<p id="">আবেদন নম্বরঃ ${srial}/2022-23</p>
<p id="cdate">${cdate}</p>
</div>
বরাবর, <br>
<div class="local_EC_Office">
চেয়ারম্যান <span class="underLine">${UpName}</sapn> ইউনিয়ন পরিষদ <br>
উপজেলা/থানাঃ <span class="underLine">${Thana}</span> <br>
জেলাঃ <span class="underLine">${Dis}</span>
</div> <br>
<div class="present_address">
<span class="underLine">বিষয়ঃ ওয়ারিশ সনদ পত্র পাওয়ার জন্য আবেদন।</span> <br>
<br>
জনাব,
<div class="address">
    বিনীত নিবেদন এই যে, আমি আপনার ইউনিয়নের <span class="underLine">${VlligeName}</span> গ্রামের একজন স্থায়ী বাসিন্দা আমার __________ মৃত <span class="underLine">${lateManName}</span> পিতা/স্বামীঃ <span class="underLine">${lateManFatherName}</span> গ্রামঃ <span class="underLine">${VlligeName}</span> ডাকঘরঃ <span class="underLine">${postName +"-"+postCode}</span> উপজেলাঃ <span class="underLine">${Thana}</span> জেলাঃ <span class="underLine">${Dis}</span>, <span class="underLine">${UpName}</span> ইউনিয়নের স্থায়ী বাসিন্দা ছিলেন। তিনি গত <span class="underLine">${lateDate}</span> তারিখে মৃত্যু বরণ করেন। তিনি মৃত্যু কালে নিন্ম লিখিত ওয়ারিশ গণ কে রাখিয়া গিয়াছেন। নিন্ম লিখিত ওয়ারিশ ছাড়া আর কোন ওয়ারিশ নাই। আমি আরও জানাইতেছি যে, যদি আমি স্বেচ্ছায়/অজ্ঞাতসারে ওয়ারিশ সংক্রান্ত কোন তথ্য গোপন করি আর ভবিষ্যতে যদি আইনগত কোন সমস্যা সৃষ্টি হয় তাহলে উহার দায় দায়িত্ব আমি নিজে বহন করিব। এই ব্যাপারে আপনার কোন দায়দায়িত্ব থাকিবে না। <br><br>
    অতএব আমাকে একটি ওয়ারিশ সনদ পত্র দিতে আপনার মর্জি হয়।
</div>
</div>
<h2 class="bodyTitle tCenter">ওয়ারিশের বিবরণ</h2>
<div class="address" id="oriceOneRow">
    <span>ক্রমিক</span>
    <span>ওয়ারিশের নাম</span>
    <span>সম্পর্ক</span>
    <span>মন্তব্য</span>
    <span>যুক্ত করুন</span>
    <div class="table1">${getTable_Data}</div>
</div>
<div class="present_address2">
<br>
<div class="tileDiv">
    <p id="">সুপারিশ ইউিপ সদস্য </p>
    <p id="">নিবেদকঃ-</p>
</div>
<div class="textRight">
    <p>
        নামঃ ${applientName} <br>
        পিতাঃ ${applientNameFaName} <br>
        গ্রামঃ ${VlligeName} <br>
    </p>
</div>
</div>
`;

