
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
        const off_shop = document.getElementById("off_shop"); // Target
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
        
        // psValu.textContent = `${100-(total_per)}%`;
        // psValu2.textContent = `${Buy_total_per}%`;
        // psValu3.textContent = `${Remaining_per}%`;
        // psValu4.textContent = `${All_due_per}%`;

        function animateValue(id, start, end, duration, isPercent = false) {
          const obj = document.getElementById(id);
          
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1
            );
            const value = Math.floor(progress * (end - start) + start);
            
            obj.textContent = isPercent ? value + "%" : value + " ৳";
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }

  // Example use:
  animateValue("psValu", 0, 100-total_per, 3500, true);  // 0% to 100% in 1.5 seconds
  animateValue("ctk", 0, data[0].All_total, 4000); // 0 to 25000 in 2 seconds         // 0 to 25000 in 2 seconds

  animateValue("psValu2", 0, Buy_total_per, 3500, true);  // 0% to 100% in 1.5 seconds
  animateValue("Mtk", 0, data[0].Buy_total, 4000);         // 0 to 25000 in 2 seconds

  animateValue("psValu3", 0, Remaining_per, 3500, true);  // 0% to 100% in 1.5 seconds
  animateValue("invest", 0, data[0].Remaining, 4000);         // 0 to 25000 in 2 seconds

  animateValue("psValu4", 0, All_due_per, 3500, true);  // 0% to 100% in 1.5 seconds
  animateValue("cash", 0, data[0].All_due, 4000);         // 0 to 25000 in 2 seconds

        // balance.style.background = `conic-gradient(#04088d ${(98-total_per) * 3.7}deg, #fff  0deg)`;
        // balance2.style.background = `conic-gradient(#04088d ${Buy_total_per * 3.7}deg, #fff  0deg)`;
        // balance3.style.background = `conic-gradient(#04088d ${Remaining_per * 3.7}deg, #fff  0deg)`;
        // balance4.style.background = `conic-gradient(#04088d ${All_due_per * 3.7}deg, #fff  0deg)`;

        
const targetDeg = (100 - total_per) * 3.7;
const targetDeg2 = Buy_total_per * 3.7;
const targetDeg3 = Remaining_per * 3.7;
const targetDeg4 = All_due_per * 3.7;

let currentDeg = 0;
const duration = 4000; // in ms
const startTime = performance.now();

function animateGradient(currentTime) {
  const elapsed = currentTime - startTime;
  const progress = Math.min(elapsed / duration, 1);
  const angle = targetDeg * progress;
  const angle2 = targetDeg2 * progress;
  const angle3 = targetDeg3 * progress;
  const angle4 = targetDeg4 * progress;

  balance.style.background = `conic-gradient(#04088d ${angle}deg, #fff 0deg)`;
  balance2.style.background = `conic-gradient(#04088d ${angle2}deg, #fff 0deg)`;
  balance3.style.background = `conic-gradient(#04088d ${angle3}deg, #fff 0deg)`;
  balance4.style.background = `conic-gradient(#04088d ${angle4}deg, #fff 0deg)`;

  if (progress < 1) {
    requestAnimationFrame(animateGradient);
  }
}

requestAnimationFrame(animateGradient);
      
        // all_total.innerHTML = `${data[0].All_total} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
        // Buy_total.innerHTML = `${data[0].Buy_total} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
        // Remaining.innerHTML = `${data[0].Remaining} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
        // All_due.innerHTML = `${data[0].All_due} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
        totalCount_shop.textContent = data.length;
        
        
        function filterData(pass) {
          return data.filter((item) => item.stats.includes(pass));
        }
        
        const userInput = document.getElementById("shopStatusSelect").value;

        const paid_user = filterData(userInput);
        active_shop.textContent = paid_user.length;
        off_shop.textContent = data.length - paid_user.length;

        document.getElementById("payTotalCount").textContent = `${paid_user.length}/${data.length}`;
                
        
        let all_user = "";
        paid_user.forEach((item) => {
          const one_user = `
                    <div class="paid_parson" id="${item.SL}">
                    <div class="container44">
                    <span class="slNo">${item.SL} <span class="popFont Luser">চাঁদার হার  ${item.tax}৳</span></span>
                      <div class="screen">
                          <span>
                              <img src="./style/image/${item.img_link}" alt="" srcset="">
                          </span>
                          <span>
                              <h3>${item.name}</h3>
                              <p>${item.father_name}</p>
                              <p>${item.shop_name}</p>
                              <p>
                                  <span>আদায়: <strong class="popFont"> ${item.total_pay}৳</strong></span>
                                  <span>বাঁকী <strong class="popFont">${item.total_due}৳</strong></span>
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
                          <button id="${item.SL}" class="Sub_Payment Luser">পরিষোধ করুন</button>
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

          const view_payment = document.querySelectorAll(".Sub_Payment");
          view_payment.forEach((item) => {
            const now = new Date();
            now.setMonth(now.getMonth() - 1);
            const month = now.getMonth() + 1;
            console.log(month);
            const year = now.getFullYear();
            const prevMonthName = now.toLocaleString("default", { month: "short" });
            
            item.addEventListener("click", () => {
  
              const userId = item.id-1;
              const latest = data[userId];

              document.getElementById("pay_img").src = `./style/image/${latest.img_link}`;
              document.getElementById("name").textContent = latest.name;
              document.getElementById("shopName").textContent = latest.father_name;
              document.getElementById("shop_name").textContent = latest.shop_name;
              
              document.getElementById("row").value = userId+2;
              document.getElementById("colAmount").value = 6+month;
              document.getElementById("taka").value = latest.tax;
              document.getElementById("month").value = prevMonthName + " - "+ year;
              document.querySelector(".payment_model").style.display = "flex";
            });
          });


        var authPw = sessionStorage.getItem("authPw");
        var userData26 = document.querySelectorAll(".Luser");
        
        if (authPw == 19255) {
        userData26.forEach((item) => {
          item.classList.remove("slNo1");
          
        });
        }else{
          userData26.forEach((item) => {
            item.classList.add("slNo1");
          });
        }
        

        let searchResult = document.querySelector(".searchResult");

        // Build result list dynamically
        data.forEach((item) => {
          const wrapper = document.createElement("div");
          wrapper.classList.add("shoper");

          wrapper.innerHTML = `
      <div class="col">
        <img src="./style/image/${item.img_link}" alt="">
        <span class="jumpBtn"> দেখুন </span>
      </div>
      <div class="col">
        <p>দোকান নং ${item.SL}</p>
        <h3>${item.name}</h3>
        <p>${item.shop_name}</p>
        <span>আদায়: <span class="popFont">${item.total_pay}</span>৳, </span>
        <span>বাঁকী: <span class="popFont">${item.total_due}</span>৳</span>
      </div>
    `;

          // Add click event to "দেখুন"
          wrapper.querySelector(".jumpBtn").addEventListener("click", () => {
            scrollToDiv(item.SL);
          });

          searchResult.appendChild(wrapper);
        });

        // Get all target divs
        const divs = document.querySelectorAll(".paid_parson");

        // Just logging their positions (optional)
        divs.forEach(div => {
          const rect = div.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          
        });

        // Scroll function (GLOBAL)
        function scrollToDiv(id) {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            document.querySelector(".srarchPopup").style.display = "none";
          }
        }

  //       let resultData = "";
  //       data.forEach((item)=>{
  //         const result = `
  //         <div class="shoper">
  //           <div class="col">
  //             <img src="./style/image/${item.img_link}" alt="" srcset="">
  //             <span onclick="scrollToDiv(${item.SL})"> দেখুন </span>
  //           </div>
  //           <div class="col">
  //             <P>দোকান নং ${item.SL}</P>
  //             <h3>${item.name}</h3>
  //             <p>${item.shop_name}</p>
  //             <span>আদায়: <span class="popFont">${item.total_pay}</span>৳, </span>
  //             <span>বাঁকী: <span class="popFont">${item.total_due}</span>৳</span>
  //           </div>
  //           </div>
  //         `;
  //         resultData += result;
  //         searchResult.innerHTML = resultData;
  //       })

  // const divs = document.querySelectorAll(".paid_parson");

  // // Check each div’s position (in pixels from top of page)
  // divs.forEach(div => {
  //   const rect = div.getBoundingClientRect();
  //   const top = rect.top + window.scrollY; // Y position on page
  //   console.log("Div ID:", div.id, "Position Y:", top);
  // });

  // // Function to scroll to a div by id
  // function scrollToDiv(id) {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     el.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }
        
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
                            <span class="popFont">${data[0].all_in}</span>
                            <span class="popFont">${data[0].all_co}</span>
                            <span class="popFont">${data[0].all_ha}</span>
                            <span class="popFont">${data[0].all_due}</span>
                        </div>
                        <div class="row">
                            <span>${data[1].month_name}</span>
                            <span class="popFont">${data[1].all_in}</span>
                            <span class="popFont">${data[1].all_co}</span>
                            <span class="popFont">${data[1].all_ha}</span>
                            <span class="popFont">${data[1].all_due}</span>
                        </div>
                        <div class="row">
                            <span>${data[2].month_name}</span>
                            <span class="popFont">${data[2].all_in}</span>
                            <span class="popFont">${data[2].all_co}</span>
                            <span class="popFont">${data[2].all_ha}</span>
                            <span class="popFont">${data[2].all_due}</span>
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

  const popDisplay = sessionStorage.getItem("authPw");
  if (!popDisplay) {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }

  if( popDisplay == 19255) {
    document.querySelector("#logout").textContent = "লগ আউট";
  }else{
    document.querySelector("#logout").textContent = "লগ ইন";
  }

document.querySelector("#logout").addEventListener("click", () => {
  sessionStorage.removeItem("authPw");
  popup.style.display = "flex";
  document.querySelector("#logout").textContent = "লগ ইন";
});

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
      sessionStorage.setItem("authPw", enteredPassword);
      popup.style.display = "none";
      fetchData()
    } else if (selectedRole === "user") {
      popup.style.display = "none";
      sessionStorage.setItem("authPw", "Shoper");
      fetchData()
    } else {
      alert("পরিচয় দিন?");
    }
  });

// Replace this with your real GET API endpoint
  const getAPI = 'https://script.google.com/macros/s/AKfycbwewb1Q27VK8tGeFFLVqnVA_Wj3jL_71mzJLH8rL1priN1mCk9wDhbfNUUesjDrFuNs/exec'; 
  // Replace this with your real POST API endpoint
  const postAPI = "https://script.google.com/macros/s/AKfycbwlyjUk25NoysUhe4-Dl4Iktg_D7b1Q1S4sCN8DUAVv9PFSw53YC4sM06Ay7VTb04lz/exec";

async function fetchUserData() {
  try {
    const res = await fetch(postAPI);
    const data = await res.json();
    
  } catch (err) {
    alert('Failed to fetch user data.');
    console.error(err);
  }
}

document.getElementById('paymentForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  document.querySelector("#submit").textContent = "অপেক্ষা করুন";
  document.querySelector("#submit").style.background = "red";
  const row = document.getElementById('row').value;
  const amount = document.getElementById('taka').value;
  const colAmount = document.getElementById('colAmount').value;

  const payload = { row, colAmount, amount };

  try {
    const res = await fetch(postAPI, {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      // alert('Payment submitted!');
      document.querySelector("#submit").textContent = "সংরক্ষন করুন";
      fetchData(); // Refresh data after submission
      document.getElementById('paymentForm').reset();
      document.querySelector(".payment_model").style.display = "none";
    } else {
      alert('Submission failed.');
    }
  } catch (err) {
    console.error(err);
    alert('Network error.');
  }
});


  const close_payment_model = document.querySelector("#close_pay");
  close_payment_model.addEventListener("click", () => {
    document.querySelector(".payment_model").style.display = "none";
  });
