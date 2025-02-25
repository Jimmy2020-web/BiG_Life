var count = '';
document.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var parameter = urlParams.get('parameter');
    var param2 = urlParams.get('param2');
    var param3 = urlParams.get('param3');
    var param4 = urlParams.get("param4");
    var param5 = urlParams.get('param5');
    var param6 = urlParams.get('param6');

    console.log(numberToBanglaWords(param5));
    
    document.querySelector("#tcno").innerHTML = `#TC${param6}`;
    document.querySelector("#inv_no").innerHTML = `#TC${param6}`;
    
    document.querySelector(".info1").innerHTML = `
    <p class="title_in"><i class="fa-solid fa-file-import"></i> বিল গ্রহিতাঃ</p>
            <p>নামঃ ${parameter}</p>
            <p>মোবাইল নংঃ ${param2}</p>
            <p>ঠিকানাঃ ${param3}</p>
    `
    document.querySelector(".gTotal").innerHTML =`
    <p>সর্বমোটঃ ${param5} <i class="fa-solid fa-bangladeshi-taka-sign"></i></p>
    <br/> কথায়ঃ ${numberToBanglaWords(param5)} টাকা মাত্র।
    `
    
    const data = JSON.parse(decodeURIComponent(param4));

    data.map(item => {
        const rows = document.createElement('p');
        rows.innerHTML = item;
        const invoiceItems = document.getElementById("invoiceItems");
        invoiceItems.appendChild(rows);
    })

    var today = new Date();
        // Format the date
        var options = { year: 'numeric', month: 'short', day: 'numeric' };
        var formattedDate = today.toLocaleDateString('en-US', options);

        // Display the date on the page
        var todayDateElement = document.getElementById('todayDate');
        todayDateElement.innerHTML = formattedDate;
        document.querySelector("#inv_date").innerHTML = formattedDate;
});

function numberToBanglaWords(num) {
    if (num === 0) return "শূন্য";

    let belowTwenty = ["", "এক", "দুই", "তিন", "চার", "পাঁচ", "ছয়", "সাত", "আট", "নয়", "দশ", 
                       "এগারো", "বারো", "তেরো", "চৌদ্দ", "পনেরো", "ষোল", "সতেরো", "আঠারো", "উনিশ"];
    
    let tens = ["", "", "বিশ", "ত্রিশ", "চল্লিশ", "পঞ্চাশ", "ষাট", "সত্তর", "আশি", "নব্বই",];

    let thousand = ["", "শত", "হাজার", "লক্ষ", "কোটি"];

    function helper(n) {
        if (n === 0) return "";
        else if (n < 20) return belowTwenty[n] + " ";
        else if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10);
        else return belowTwenty[Math.floor(n / 100)] + " শত " + helper(n % 100);
    }

    let i = 0, words = "";
    while (num > 0) {
        if (num % 100 !== 0) {
            words = helper(num % 100) + thousand[i] + " " + words;
        }
        num = Math.floor(num / 100);
        i++;
    }

    return words.trim();
}



// setTimeout(() => {
//     window.print();
// }, 500);