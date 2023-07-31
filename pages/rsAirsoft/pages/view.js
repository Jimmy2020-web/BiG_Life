let homePage = document.querySelector(".logo, img");

homePage.addEventListener("click", () => {
    window.location.assign("https://jimmy2020-web.github.io/BiG_Life/pages/rsAirsoft/index.html")
});

let btnIndex = localStorage.getItem("btnIndex");

function lodeAPIdata() {

    let onlode = document.querySelector("#onlode");
    let bodyHight = document.querySelector(".input");

    onlode.classList.add("loder");
    bodyHight.style.height = "100vh";

    fetch("https://script.google.com/macros/s/AKfycbx22mCPUviT4JWcoyHNuSB8H4_Y_RPHeqzjMSnY2Ku0lRLtSKNhy3aUoA5PEl9g073FKg/exec")
    .then((response) => response.json())
    .then((data) => {

        onlode.classList.remove("loder");
        bodyHight.style.height = "100%";
        document.querySelector(".input").innerHTML = `

        <div class="pathManu continer">
            <span>RS.Arisoft/ ${data[btnIndex].category} <i class="fa-solid fa-chevron-right"></i></span>
            <span> ${data[btnIndex].brand} <i class="fa-solid fa-chevron-right"></i></span>
            <span> ${data[btnIndex].pName} </span>
        </div>
        <div class="cardBox continer">
            <div class="gridBox">
                <div class="imgBox">
                    <img src="../image/${data[btnIndex].image}" alt="" srcset="">
                </div>
            </div>
            <div class="gridBox">
                <h2>Product Name: ${data[btnIndex].pName}</h2>
                <p>Product Code: [#${data[btnIndex].id}]</p>
                <p>Ratings: <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span></p>
                <div class="price">
                    <h2><span><i class="fa-solid fa-bangladeshi-taka-sign"></i></span>${data[btnIndex].price} <span class="xprice">[${data[btnIndex].xPrice}]</span></h2>
                </div>
                <p id="pd4">Categories: ${data[btnIndex].category}</p>
                <p id="pd4">Brand: ${data[btnIndex].brand}</p>
                <p id="pd4">Details: ${data[btnIndex].stars}</p>
                <p id="pd4">Quantity: 400 Ps</p>
                <p id="pd4">Delivery Charge: 100/- Tk</p>
            </div>
            <div class="gridBox">
                <h2 class="condation">Conditions</h2>
                <p class="condation"> <span><i class="fa-solid fa-location-dot"></i></span> Enayetpur, Raninagar, Naogaon.</p>
                <p class="condation"> <span><i class="fa-solid fa-truck"></i></span> Standard Delivery 7 - 13 Day(s)</p>
                <p class="condation"> <span><i class="fa-solid fa-sack-dollar"></i></span> Cash on Delivery Available</p>
                <p class="condation"> <span><i class="fa-solid fa-clock-rotate-left"></i></span> Retrun Option Not Available</p>
                <p class="condation"> <span><i class="fa-solid fa-shield-halved"></i></span> Warranty Not Available</p>
            </div>
            <div class="btn">
                <p>Model: ${data[btnIndex].brand}</p>
            </div>
            <div class="btn">
                <button id="shop"> <i class="fa-solid fa-cart-shopping"></i> Shop Now</button>
                <button id="home"> <i class="fa-solid fa-circle-left"></i> Back To Home</button>
            </div>
            <div class="btn">
                <p>${data[btnIndex].Ditels}</p>
            </div>
        </div>
        `;

        let shopBtn = document.querySelector('#shop');
        let backBtn = document.querySelector('#home');

        backBtn.addEventListener('click', () => {
            window.location.assign("../index.html")
        });
        shopBtn.addEventListener('click', () => {
            window.location.assign("https://www.facebook.com/profile.php?id=100009359734347&mibextid=ZbWKwL")
        });

    });
};

lodeAPIdata();

