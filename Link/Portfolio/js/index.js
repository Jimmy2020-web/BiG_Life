document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("#show").forEach((show) => {
    show.onclick = function () {
      showPage(this.dataset.page);
    };
  });
});

function showPage(page) {
  document.querySelectorAll(".showP").forEach((showP) => {
    showP.style.display = "none";
  });
  document.querySelector(`#${page}`).style.display = "block";
}

document.getElementById("cloge").addEventListener("click", function () {
  document.querySelector("#manu").style.opacity = "1";
  // document.querySelector('#cloge').style.opacity = '0';
  // document.querySelector('#cloge').style.display = 'none';
  document.querySelector("#manu").style.transition = "0.3s ease-in-out";
  document.querySelector("#manu").style.transform = "translateX(10px)";
});

document.getElementById("cloge2").addEventListener("click", function () {
  document.querySelector("#manu").style.opacity = "0";
  document.querySelector("#manu").style.transition = "0.3s ease-in-out";
  // document.querySelector('#cloge').style.opacity = '1';
  // document.querySelector('#cloge').style.display = 'block';
  document.querySelector("#manu").style.transform = "translateX(430px)";
});

document.getElementById("abPage").addEventListener("click", function () {
  document.querySelector("#abotuPage").style.display = "block";
  document.querySelector("#homePage").style.display = "none";
});

document.getElementById("protPage").addEventListener("click", function () {
  document.querySelector("#recentWork").style.display = "block";
  document.querySelector("#homePage").style.display = "none";
});

document.getElementById("home1").addEventListener("click", function () {
  document.querySelector("#homePage").style.display = "block";
  document.querySelector("#recentWork").style.display = "none";
  document.querySelector("#abotuPage").style.display = "none";
  document.querySelector("#contactMe").style.display = "none";
  document.querySelector("#manu").style.transform = "translateX(430px)";
});

document.getElementById("about1").addEventListener("click", function () {
  document.querySelector("#homePage").style.display = "none";
  document.querySelector("#recentWork").style.display = "none";
  document.querySelector("#abotuPage").style.display = "block";
  document.querySelector("#contactMe").style.display = "none";
  document.querySelector("#manu").style.transform = "translateX(430px)";
});

document.getElementById("recrnt1").addEventListener("click", function () {
  document.querySelector("#homePage").style.display = "none";
  document.querySelector("#recentWork").style.display = "block";
  document.querySelector("#abotuPage").style.display = "none";
  document.querySelector("#contactMe").style.display = "none";
  document.querySelector("#manu").style.transform = "translateX(430px)";
});

document.getElementById("contact1").addEventListener("click", function () {
  document.querySelector("#homePage").style.display = "none";
  document.querySelector("#recentWork").style.display = "none";
  document.querySelector("#abotuPage").style.display = "none";
  document.querySelector("#contactMe").style.display = "block";
  document.querySelector("#manu").style.transform = "translateX(430px)";
});

document.getElementById("dwo").addEventListener("click", function () {
  let dwonFlie = "data/SHAHINUR.pdf";
  window.location.href = dwonFlie;
});

document.getElementById("dwo2").addEventListener("click", function () {
  let dwonFlie = "data/SHAHINUR.pdf";
  window.location.href = dwonFlie;
});

document.getElementById("proect1").addEventListener("click", function () {
  const div = document.getElementById("show-page");
  const prodastView = document.createElement("div");
  prodastView.classList.add("hallo");
  div.appendChild(prodastView);

  const colegBtn = document.createElement("button");
  colegBtn.classList.add("btnCloge");
  colegBtn.innerText = "+";
  prodastView.appendChild(colegBtn);

  const poupDetls = document.createElement("div");
  poupDetls.classList.add("poupDetls");
  prodastView.appendChild(poupDetls);
  const img = document.createElement('img');
  img.setAttribute('src', '../images/popup.png');
  poupDetls.appendChild(img);

  const hading = document.createElement('h1');
  hading.classList.add('hadeTitle');
  hading.innerText = 'Hallo World This my Frist Project';
  prodastView.appendChild(hading);

  // Cloge Button Start
  colegBtn.addEventListener("click", function () {
    prodastView.classList.add("fall");
    div.addEventListener("transitionend", function() {
      div.remove();
    });
  });
});
