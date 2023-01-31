var applicentName = localStorage.getItem("textvalue");
var applicentNID = localStorage.getItem("textvalue1");
var applicentDate = localStorage.getItem("textvalue2");
var applicentdis = localStorage.getItem("textvalue11");
var applicentps = localStorage.getItem("textvalue12");
var psVno = localStorage.getItem("textvalue5");
var psVelaka = localStorage.getItem("textvalue6");
var psPolice = localStorage.getItem("textvalue7");
var psDis = localStorage.getItem("textvalue8");
var psVllige = localStorage.getItem("textvalue9");
var psVlligeNo = localStorage.getItem("textvalue10");
var caddUP = localStorage.getItem("textvalue13");
var caddWodr = localStorage.getItem("textvalue14");
var caddVelakaName = localStorage.getItem("textvalue15");
var caddVelakaNumber = localStorage.getItem("textvalue16");
var caddVllige = localStorage.getItem("textvalue17");
var caddVlligeNo = localStorage.getItem("textvalue18");
var applientPhone = localStorage.getItem("textvalue19");
var caddPost = localStorage.getItem("textvalue20");
var caddPostCode = localStorage.getItem("textvalue21");
var stayTime = localStorage.getItem("textvalue22");
var changeCose = localStorage.getItem("textvalue23");
var idPasNamr = localStorage.getItem("textvalue24");
var idPasNID = localStorage.getItem("textvalue25");
var psVelakaNo = localStorage.getItem("textvalue26");
var prentPage1 = document.querySelector(".printPge1");

prentPage1.innerHTML = `<div class="titleText">
<p>ফরম-১৩ <br> [বিধি ২৬(৭) দ্রষ্টব্য] <br> এক ভোটার এলাকা ভোটার তালিকা হইতে অন্য ভোটার এলাকার ভোটার তালিকায় নাম স্থানান্তরের আবেদন</p> <br>
</div>
প্রাপকঃ <br>
<div class="local_EC_Office">
উপজেলা/থানা নির্বাচন কর্মকর্তা <br>
উপজেলা/থানাঃ <span class="underLine">${applicentps}</span> <br>
জেলাঃ <span class="underLine">${applicentdis}</span>
</div> <br>
<div class="present_address">
১। আবেদনকারীর নাম: <span class="underLine">${applicentName}</span> <br>
২। জাতীয় পরিচিতি (NID): <span class="underLine">${applicentNID}</span><br>
<p class="tCenter">
    (জাতীয় পরিচয়পত্রের ছায়ালিপি সংযুক্ত করিতে হইবে)
</p>
৩। জন্ম তারিখ: <span class="underLine">${applicentDate}</span><br>
৪। বর্তমান ভোটার তালিকাভুক্তি সংক্রান্ত তথ্যাদি- <br>
<div class="address">
    ভোটার নম্বরঃ<span class="underLine">${psVno}</span><br>
    ভোটার এলাকার নামঃ<span class="underLine">${psVelaka}</span> ভোটার এলাকার নম্বরঃ<span class="underLine">${psVelakaNo}</span> <br>
    উপজেলা/থানাঃ<span class="underLine">${psPolice}</span> জেলাঃ<span class="underLine">${psDis}</span><br>
    গ্রাম/রাস্তার নাম ও নম্বরঃ<span class="underLine">${psVllige}</span> বাসা/হোল্ডিং নম্বরঃ<span class="underLine">${psVlligeNo}</span>
</div>
</div>
<div class="present_address2">
৫। যে এলাকায় ভোটার তালিকায় নাম স্থানান্তর করিতে ইচ্ছুক- <br>
<div class="address2">
    জেলাঃ<span class="underLine">${applicentdis}</span> উপজেলা/থানাঃ<span class="underLine">${applicentps}</span> <br>
    সিটি কোর্পোরেশন/পৌরসভা/ইউনিয়ন/ক্যান্ট বোর্ডঃ<span class="underLine">${caddUP}</span> ওয়ার্ড নম্বরঃ<span class="underLine">${caddWodr}</span> <br>
    ভোটার এলাকার নামঃ<span class="underLine">${caddVelakaName}</span> ভোটার এলাকার নম্বরঃ<span class="underLine">${caddVelakaNumber}</span> <br>
    গ্রাম/রাস্তার নাম ও নম্বরঃ<span class="underLine">${caddVllige}</span> বাসা/হোল্ডিং নম্বরঃ<span class="underLine">${caddVlligeNo}</span> <br>
    টেলিফোন/মোবাইল ফোন নম্বরঃ<span class="underLine">${applientPhone}</span> <br>
    ডাকঘরঃ<span class="underLine">${caddPost}</span> <span class="post">পোষ্ট কোডঃ<span class="underLine">${caddPostCode}</span></span> <br>
</div>
৬। ৫ নম্বর ক্রমিকে বর্ণিত ঠিকানায় যে সময় হইতে অবস্থান করিতেছেনঃ<span class="underLine">${stayTime}</span> <br>
৭। নাম স্থানান্তরের কারণঃ<span class="underLine">${changeCose}</span>
</div>`;

var printPge2 = document.querySelector(".printPge2");

printPge2.innerHTML = `
                <div class="atasment">
                ৮। ৫নম্বর ক্রমিকে বর্ণিত ঠিকানায় অবস্থানের সমর্থনে নিন্মের দলিলাদি সংযুক্ত করিতে হইবেঃ
                (ক) প্রথম শ্রেণীর গেজেটেড কর্মকর্তা/ক্যান্টনমেন্ট বোর্ডর এক্সিকিউটিভ অফিসার/সিটি/ কোর্পোরেশন/পৌরসভার মেয়র/ওয়ার্ড কাউন্সিলর/ইউনিয়ন পরিষদ চেয়ারম্যান কর্তৃক প্রদত্ত প্রত্যয়নপত্র। <br>
                (খ) ইউটিলিটি বিলের অনুলিপি ( যদি থাকে ) <br>
                (গ) বাড়ী ভাড়া রশিদ/চৌকিদারী কর রশিদ/অন্যান্য <br> <br>
                <p class="textRight">আবেদনকারীর স্বাক্ষর বা টিপসহি</p>
            </div> <br>
            <div class="textRight">
                <div class="atx">
                    আবেদনকারীর সনাক্তকারীর স্বাক্ষরঃ_________________________ <br>
                    নামঃ<span class="underLine">${idPasNamr}</span> <br>
                    জাতীয় পরিচয়পত্র নম্বরঃ<span class="underLine">${idPasNID}</span> <br>
                    ঠিকানায়ঃ<span class="underLine">উপজেলাঃ${applicentps}, জেলাঃ${applicentdis}</span>
                </div>
            </div>
            <div class="tCenter">
                [কেবলমাত্র অফিসে ব্যবহারের জন্য।]
            </div>
            <div class="apOffice">
                আবেদনকারী জনাব/বেগম........................................................................এর আবেদন ও দাখিলকৃত দলিলাদি পরীক্ষান্তে ........................................................................... ভোটার এলাকার জন্য প্রণীত ভোটার তালিকা হইতে তাহার নাম কর্তনপূর্বক.............................................................. ভোটার এলাকার ভোটার তালিকায় নাম অন্তর্ভুক্ত করা হইল।
            </div> <br> <br>
            <div class="textRight">
                <div class="ec">উপজেলা/থানা নির্বাচন কর্মকর্তা</div>
            </div> <br>
            <p class="Line"></p>
            <p class="tCenter">প্রাপ্তিস্বীকার পত্র</p>
            <div class="last">
                <p>জনাব/বেগম .................................................................................. এর আবেদন ফরম গৃহীত হইল। <br> 
                আবেদন ফরম নম্বরঃ............................................................। </p>
                <br> <br>
                <div class="textRight">
                    <p>গ্রহণকারীর স্বাক্ষর</p>
                </div>
            </div>`;