let SearchBtn = document.querySelector("#Search");
let trackLocation = document.querySelector("#trackLocation");
SearchBtn.addEventListener("click", () => {
  SearchBtn.innerHTML = "okay";
  console.log(trackLocation);
});

let erroe = `<img src="./image/errorPage.jpg" alt="" srcset="">`;

setInterval(() => {
  if (navigator.onLine === false) {
    lodeData();
  } else {
    document.querySelector(".Price_card").innerHTML = `${erroe}`;
  }
}, 10000);

function lodeData() {
  fetch(
    "https://script.google.com/macros/s/AKfycbx22mCPUviT4JWcoyHNuSB8H4_Y_RPHeqzjMSnY2Ku0lRLtSKNhy3aUoA5PEl9g073FKg/exec"
  )
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#totalProduct").innerHTML = data.length;

      let productList = "";

      data.forEach((item) => {
        productList += `
        <div class="Pr_card_item">
            <img src="./image/${item.image}" alt="" srcset="">
            <div class="cardText">
                <p>${item.brand}</p>
                <h3>${item.pName}</h3>
                <p>${item.stars}</p>
                <p><sapn><i class="fa-solid fa-bangladeshi-taka-sign"></i></sapn> ${item.price} <span class="xprice">[${item.xPrice}]</span></p>
                <button Class="cart_Btn" data-pName="${item.pName}">Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
            </div>
        </div>
        `;
      });

      document.querySelector(".Price_card").innerHTML = productList;

      document.querySelectorAll(".cart_Btn").forEach((button) => {
        button.addEventListener("click", () => {
          const productName = button.dataset.pname;

          let matchItem;
          cart.forEach((item) => {
            if (productName === item.productName) {
              matchItem = item;
            }
          });

          if (matchItem) {
            matchItem.quantity += 1;
          } else {
            cart.push({
              productName: productName,
              quantity: 1,
            });
          }

          let cartQuantity = 0;
          cart.forEach((item) => {
            cartQuantity += item.quantity;
          });
          document.querySelector("#cartTotal").innerHTML = cartQuantity;
        });
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}