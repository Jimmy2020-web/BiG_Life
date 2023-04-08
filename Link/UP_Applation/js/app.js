const saveBtn = document.querySelector("#saveBtn");
const xBtn = document.querySelector("#xBtn");
const closePop = document.querySelector(".popUp");
const popText = document.querySelector(".popText");
const eUser = document.querySelector("#eUser");
const pwBtn = document.querySelector(".pwBtn");
const pwBuserInputtn = document.querySelector(".userInput");
const chakePw = document.querySelector(".cpw");
const log_Out = document.querySelector("#log_Out");
const okBtn = document.querySelector("#okBtn");
const Loder = document.querySelector("#loder");

Loder.addEventListener("click", () => {
  Loder.style.display = "none";
});

pwBtn.addEventListener("click", () => {
    const eUser_info = document.querySelector("#eUser_info");
    const pwd = document.getElementById("pwd").value;
  if (pwd === "01925") {
    eUser.innerHTML = "শাহীনুর ইসলাম";
    eUser_info.value = eUser.innerHTML;
    chakePw.classList.add("okStatus");
    document.querySelector(".wroang").innerHTML = "lock_open";
    setTimeout(() => {
      chakePw.classList.remove("okStatus");
      pwBuserInputtn.style.display = "none";
    }, 300);
  } else if (pwd === "01761") {
    eUser.innerHTML = "মেহেদী হাসান";
    eUser_info.value = eUser.innerHTML;
    chakePw.classList.add("okStatus");
    document.querySelector(".wroang").innerHTML = "lock_open";
    setTimeout(() => {
      chakePw.classList.remove("okStatus");
      pwBuserInputtn.style.display = "none";
    }, 300);
  } else if (pwd === "01735") {
    eUser.innerHTML = "খায়রুল ইসলাম";
    eUser_info.value = eUser.innerHTML;
    chakePw.classList.add("okStatus");
    document.querySelector(".wroang").innerHTML = "lock_open";
    setTimeout(() => {
      chakePw.classList.remove("okStatus");
      pwBuserInputtn.style.display = "none";
    }, 300);
  } else if (pwd === "01757") {
    eUser.innerHTML = "সবুজ হোসেন";
    eUser_info.value = eUser.innerHTML;
    chakePw.classList.add("okStatus");
    document.querySelector(".wroang").innerHTML = "lock_open";
    setTimeout(() => {
      chakePw.classList.remove("okStatus");
      pwBuserInputtn.style.display = "none";
    }, 300);
  } else if (pwd === "sathi") {
    eUser.innerHTML = "সাথী বানু";
    eUser_info.value = eUser.innerHTML;
    chakePw.classList.add("okStatus");
    document.querySelector(".wroang").innerHTML = "lock_open";
    setTimeout(() => {
      chakePw.classList.remove("okStatus");
      pwBuserInputtn.style.display = "none";
    }, 300);
  } else {
    document.querySelector("#infoPwd").innerHTML = "আপনার গোপন সংখ্যাটি ভুল..?";
    document.querySelector(".wroang").innerHTML = "cancel";
    chakePw.classList.add("okStatus");
    setTimeout(() => {
      chakePw.classList.remove("okStatus");
    }, 300);
  }
});

function chake_Value() {
  var inp = document.querySelectorAll("input");
  inp.forEach((input) => {
    if (input !=="") {
      console.log("0")
    }
  });
};

saveBtn.addEventListener("click", () => {
  chake_Value();
  Loder.style.display = "flex";
});

closePop.addEventListener("click", () => {
  popText.classList.add("okStatus");
  setTimeout(() => {
    closePop.style.display = "none";
    popText.classList.remove("okStatus");
  }, 300);
});

function clearInput() {
  var inputs = document.querySelectorAll("#input");
  inputs.forEach((input) => (input.value = ""));
  localStorage.clear();
};

xBtn.addEventListener("click", () => {
  clearInput();
});

log_Out.addEventListener("click", () => {
    window.location.reload();
});

const URL = "https://script.google.com/macros/s/AKfycbztWST9QnSIhSE7QolZyS2priNxiKThE30CIbWAhK6Vd22W7EVn_1m3SiR7eR4RuOXG_w/exec";

const formData = document.forms['VGF_Data'];

formData.addEventListener("submit", e => {
  e.preventDefault();
  fetch(URL, { method: 'POST', body: new FormData(formData)})
      .then(() => {
        Loder.style.display = "none";
        closePop.style.display = "flex";
        popText.classList.add("okStatus");
        clearInput();
        setTimeout(() => {
          popText.classList.remove("okStatus");
        }, 300);
      })
      .catch(error => console.error('Error!', error.message))
});