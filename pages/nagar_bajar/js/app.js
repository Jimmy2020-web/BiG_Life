
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
        const paid1_user = filterData("paid");

        const paid_user = data;

        document.getElementById("payTotalCount").textContent = `${paid1_user.length}/${data.length}`;
                
        
        let all_user = "";
        paid_user.forEach((item) => {
          const one_user = `
                    <div class="paid_parson">
                    <div class="container44">
                    <span class="slNo">${item.SL} <span class="popFont Luser">চাঁদার হার  ${item.tax}</span></span>
                      <div class="screen">
                          <span>
                              <img src="./style/image/${item.img_link}" alt="" srcset="">
                          </span>
                          <span>
                              <h3>${item.name}</h3>
                              <p>${item.father_name}</p>
                              <p>${item.shop_name}</p>
                              <p>
                                  <span>আদায়: <strong class="popFont"> ${item.total_pay}/-</strong></span>
                                  <span>বাঁকী <strong class="popFont">${item.total_due}/-</strong></span>
                              </p>
                          </span>
                      </div>
                  
                    <div class="year-block">
                      <h3>2025</h3>
                        <div class="grid">
                            <div class="${item.Jan25}">Jan</div>
                            <div class="${item.Feb25}">Feb</div>
                            <div class="${item.Mar25}">Mar</div>
                            <div class="${item.Apr25}">Apr</div>
                            <div class="${item.May25}">May</div>
                            <div class="${item.Jun25}">Jun</div>
                            <div class="${item.Jul25}">Jul</div>
                            <div class="${item.Aug25}">Aug</div>
                            <div class="${item.Sep25}">Sep</div>
                            <div class="${item.Oct25}">Oct</div>
                            <div class="${item.Nav25}">Nav</div>
                            <div class="${item.Dec25}">Dec</div>
                          </div>
                        </div>
                      </div>
                  
                      <div class="year-block">
                        <h3>2026</h3>
                        <div class="grid">
                          <div class="${item.Jan26}">Jan</div>
                          <div class="${item.Feb26}">Feb</div>
                          <div class="${item.Mar26}">Mar</div>
                          <div class="${item.Apr26}">Apr</div>
                          <div class="${item.May26}">May</div>
                          <div class="${item.Jun26}">Jun</div>
                          <div class="${item.Jul26}">Jul</div>
                          <div class="${item.Aug26}">Aug</div>
                          <div class="${item.Sep26}">Sep</div>
                          <div class="${item.Oct26}">Oct</div>
                          <div class="${item.Nav26}">Nav</div>
                          <div class="${item.Dec26}">Dec</div>
                        </div>
                      </div>
                    </div>
                    </div>
                `;
          all_user += one_user;
          container.innerHTML = all_user;
        });

        var authPw = localStorage.getItem("authPw");
        var userData26 = document.querySelectorAll(".Luser");
        
        console.log(authPw)

        if (authPw == 552) {
        userData26.forEach((item) => {
          item.classList.remove("slNo1");
          console.log("crrect");
        });
        }else{
          userData26.forEach((item) => {
            item.classList.add("slNo1");
          });
        }
        
        // const due_user = filterData("due");
        // document.getElementById("dueTotalCount").textContent = `${due_user.length}/${data.length}`;

        // let dueData = "";
        // due_user.forEach((item)=>{
        //   console.log(item);
        //   const one_user = `
        //             <div class="due_parson">
        //                 <div class="container44">
        //               <div class="screen">
        //                   <span>
        //                       <img src="./style/image/${item.img_link}" alt="" srcset="">
        //                   </span>
        //                   <span>
        //                       <h3>${item.name}</h3>
        //                       <p>${item.father_name}</p>
        //                       <p>${item.shop_name}</p>
        //                       <p>
        //                           <span>আদায়: <strong class="popFont">${item.total_pay}/-</strong></span>
        //                           <span>বাঁকী <strong class="popFont">${item.total_due}/-</strong></span>
        //                       </p>
        //                   </span>
        //               </div>
                  
        //               <div class="year-block">
        //                 <h3>2025</h3>
        //                 <div class="grid">
        //                   <div class="${item.Jan25}">Jan</div>
        //                   <div class="${item.Feb25}">Feb</div>
        //                   <div class="${item.Mar25}">Mar</div>
        //                   <div class="${item.Apr25}">Apr</div>
        //                   <div class="${item.May25}">May</div>
        //                   <div class="${item.Jun25}">Jun</div>
        //                   <div class="${item.Jul25}">Jul</div>
        //                   <div class="${item.Aug25}">Aug</div>
        //                   <div class="${item.Sep25}">Sep</div>
        //                   <div class="${item.Oct25}">Oct</div>
        //                   <div class="${item.Nav25}">Nav</div>
        //                   <div class="${item.Dec25}">Dec</div>
        //                 </div>
        //               </div>
                  
        //               <div class="year-block">
        //                 <h3>2026</h3>
        //                 <div class="grid">
        //                   <div>Jan</div><div>Feb</div><div>Mar</div><div>Apr</div><div>May</div><div>Jun</div>
        //                   <div>Jul</div><div>Aug</div><div>Sep</div><div>Oct</div><div>Nav</div><div>Dec</div>
        //                 </div>
        //               </div>
        //             </div>
        //             </div>
        //             </div>
        //         `;
        //     dueData += one_user;
        //     container2.innerHTML = dueData;
        // })

        let searchResult = document.querySelector(".searchResult");

        let resultData = "";
        data.forEach((item)=>{
          const result = `
          <div class="shoper">
            <div class="col">
              <img src="./style/image/${item.img_link}" alt="" srcset="">
            </div>
            <div class="col">
              <h3>${item.name}</h3>
              <p>দোকানের নাম: ${item.shop_name}</p>
              <span>আদায়: <span class="popFont">${item.total_pay}</span> টাকা, </span>
              <span>বাঁকী: <span class="popFont">${item.total_due}</span> টাকা</span>
            </div>
            </div>
          `;
          resultData += result;
          searchResult.innerHTML = resultData;
        })
        
        document.querySelector(".month_table").innerHTML = `
          <div class="table">
                        <div class="row">
                            <span>মাস</span>
                            <span>আয়</span>
                            <span>ব‍্যয়</span>
                            <span>অবশিষ্ট</span>
                            <span>বাঁকী</span>
                        </div>
                        <div class="row">
                            <span>${data[0].month_name}</span>
                            <span>${data[0].all_in}</span>
                            <span>${data[0].all_co}</span>
                            <span>${data[0].all_ha}</span>
                            <span>${data[0].all_due}</span>
                        </div>
                        <div class="row">
                            <span>${data[1].month_name}</span>
                            <span>${data[1].all_in}</span>
                            <span>${data[1].all_co}</span>
                            <span>${data[1].all_ha}</span>
                            <span>${data[1].all_due}</span>
                        </div>
                        <div class="row">
                            <span>${data[2].month_name}</span>
                            <span>${data[2].all_in}</span>
                            <span>${data[2].all_co}</span>
                            <span>${data[2].all_ha}</span>
                            <span>${data[2].all_due}</span>
                        </div>
                    </div>
        `;

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

const searchBtn = document.getElementById("searchBtn");
const closeBtn = document.getElementById("closeBtn");

var srarchPopup = document.querySelector(".srarchPopup");
searchBtn.addEventListener("click", ()=>{
  srarchPopup.style.display = "flex";
  
})

closeBtn.addEventListener('click', ()=>{
  srarchPopup.style.display = "none";
})


var search = () => {
  const searchBox = document.getElementById("searchBox").value; // Convert input to lowercase
  const shoper = document.querySelectorAll(".shoper");

  for (let i = 0; i < shoper.length; i++) {
    let match = shoper[i].getElementsByTagName("h3")[0];
    if (match) {
      let textValue = match.innerText || match.innerHTML;
      
      if (textValue.indexOf(searchBox) > -1) {
        
        shoper[i].style.display = "";
      } else {
        
        shoper[i].style.display = "none";
      }
    }
  }
};

const searchInput = document.querySelector("#searchBox");
searchInput.addEventListener("keyup", () => {
  search();
  
});




function openDefaultBrowser() {
    // Replace 'https://www.example.com' with the URL you want to open
    window.open('https://drive.google.com/drive/folders/1sB--pN30tpUkpB09i6FcbJmDOoVIL5PU?usp=sharing', '_blank');
}



  const popup = document.getElementById("popup");
  const adminPasswordDiv = document.getElementById("adminPassword");
  const passwordInput = document.getElementById("passwordInput");
  const submitBtn = document.getElementById("submitBtn");

  const radioButtons = document.querySelectorAll('input[name="role"]');

  let selectedRole = null;

  radioButtons.forEach(radio => {
    radio.addEventListener("change", () => {
      selectedRole = radio.value;
      adminPasswordDiv.style.display = selectedRole === "admin" ? "block" : "none";
    });
  });

  submitBtn.addEventListener("click", () => {
    if (selectedRole === "admin") {
      const enteredPassword = passwordInput.value;
      localStorage.setItem("authPw", enteredPassword);
      popup.style.display = "none";
      fetchData()
    } else if (selectedRole === "user") {
      popup.style.display = "none";
      localStorage.clear();
      fetchData()
    } else {
      alert("পরিচয় দিন?");
    }
  });