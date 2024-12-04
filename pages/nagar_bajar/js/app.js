
const URL = 'https://script.google.com/macros/s/AKfycbwewb1Q27VK8tGeFFLVqnVA_Wj3jL_71mzJLH8rL1priN1mCk9wDhbfNUUesjDrFuNs/exec';


// Fetch data and build the HTML
function fetchData() {
    let loder = document.querySelector(".loding_container");
    loder.style.display = "block";
    fetch(URL)
      .then((response) => response.json()) // Assuming the API returns JSON
      .then((data) => {
        loder.style.display = "none";
        const container = document.getElementById("paidPersonsContainer"); // Target
        const container2 = document.getElementById("duePersonsContainer"); // Target
        const totalCount_shop = document.getElementById("totalCount_shop"); // Target
        const active_shop = document.getElementById("active_shop"); // Target
        const all_total = document.getElementById("ctk"); // Target
        const Buy_total = document.getElementById("Mtk"); // Target
        const Remaining = document.getElementById("invest"); // Target
        const All_due = document.getElementById("cash"); // Target

        const balance = document.getElementById("Mtk1");
        const balance2 = document.getElementById("Mtk2");
        const balance3 = document.getElementById("invast2");
        const balance4 = document.getElementById("cash2");

        const psValu = document.getElementById("psValu");
        const psValu2 = document.getElementById("psValu2");
        const psValu3 = document.getElementById("psValu3");
        const psValu4 = document.getElementById("psValu4");
        
        let total_per = Math.floor((data[0].All_due / data[0].All_total)*100);
        let Buy_total_per = Math.floor((data[0].Buy_total / data[0].All_total)*100);
        let Remaining_per = Math.floor((data[0].Remaining / data[0].All_total)*100);
        let All_due_per = Math.floor((data[0].All_due / data[0].All_total)*100);
        
        psValu.textContent = `${100-(total_per)}%`;
        psValu2.textContent = `${Buy_total_per}%`;
        psValu3.textContent = `${Remaining_per}%`;
        psValu4.textContent = `${All_due_per}%`;

        balance.style.background = `conic-gradient(#04088d ${(98-total_per) * 3.7}deg, #fff  0deg)`;
        balance2.style.background = `conic-gradient(#04088d ${Buy_total_per * 3.7}deg, #fff  0deg)`;
        balance3.style.background = `conic-gradient(#04088d ${Remaining_per * 3.7}deg, #fff  0deg)`;
        balance4.style.background = `conic-gradient(#04088d ${All_due_per * 3.7}deg, #fff  0deg)`;
      
        all_total.innerHTML = `${data[0].All_total} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
        Buy_total.innerHTML = `${data[0].Buy_total} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
        Remaining.innerHTML = `${data[0].Remaining} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
        All_due.innerHTML = `${data[0].All_due} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
        totalCount_shop.textContent = data.length;
        active_shop.textContent = data.length;
        
        function filterData(pass) {
          return data.filter((item) => item.status.includes(pass));
        }
        const paid_user = filterData("paid");
        
        let all_user = "";
        paid_user.forEach((item) => {
          const one_user = `
                    <div class="paid_parson">
                    <div class="shatus">চালু</div>
                    <div class="row">
                            <span class="parson">ক্রমিক ${item.SL}</span>
                            <span class="parson">নাম: ${item.name}</span>
                            <span class="parson">পিতা: ${item.father_name}</span>
                            <span class="parson">দোকানের নাম: ${item.shop_name}</span>
                        </div>
                        <div class="row">
                            <span class="parson">মাস ${item.total_pay / item.tax} / ${(item.total_due / item.tax)+(item.total_pay / item.tax)} <i class="fa-regular fa-clock"></i></span>
                            <span class="parson">আদায় ${item.total_pay} <i class="fa-solid fa-bangladeshi-taka-sign"></i></span>
                            <span class="parson">বাঁকী ${item.total_due} <i class="fa-solid fa-bangladeshi-taka-sign"></i></span>
                            <span class="parson">বাঁকী ${item.total_due / item.tax} <i class="fa-solid fa-calendar-days"></i></span>
                        </div>
                    </div>
                `;
          all_user += one_user;
          container.innerHTML = all_user;
        });

        const due_user = filterData("due");
        let dueData = "";
        due_user.forEach((item)=>{
          const one_user = `
                    <div class="due_parson">
                      <div class="shatus">চালু</div>
                        <div class="row">
                            <span class="parson">ক্রমিক ${item.SL}</span>
                            <span class="parson">নাম: ${item.name}</span>
                            <span class="parson">পিতা: ${item.father_name}</span>
                            <span class="parson">দোকানের নাম: ${item.shop_name}</span>
                        </div>
                        <div class="row">
                            <span class="parson">মাস ${item.total_pay / item.tax} / ${(item.total_due / item.tax)+(item.total_pay / item.tax)} <i class="fa-regular fa-clock"></i></span>
                            <span class="parson">আদায় ${item.total_pay} <i class="fa-solid fa-bangladeshi-taka-sign"></i></span>
                            <span class="parson">বাঁকী ${item.total_due} <i class="fa-solid fa-bangladeshi-taka-sign"></i></span>
                            <span class="parson">বাঁকী ${item.total_due / item.tax} <i class="fa-solid fa-calendar-days"></i></span>
                        </div>
                    </div>
                `;
            dueData += one_user;
            container2.innerHTML = dueData;
        })
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
}

fetchData();




document.querySelector('.toggle').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');
});

document.getElementById('callButton').addEventListener('click', function() {
  window.location.href = 'tel:01761293854';
});