let SearchBtn = document.querySelector("#Search");
let trackLocation = document.querySelector("#trackLocation");


SearchBtn.addEventListener("input", (e) => {
  let inputValue = e.target.value.toLowerCase();
  let Price_card = document.querySelector(".Price_card");
  let Pr_card_item = document.querySelectorAll(".Pr_card_item");
  let productTitle = Price_card.getElementsByTagName("h3");

  for (let i = 0; i < productTitle.length; i++) {
    let match = Pr_card_item[i].getElementsByTagName('h3')[0];
    let match2 = Pr_card_item[i].getElementsByTagName('p')[0];
    if (match){
      let textValue = match.textContent || match.innerHTML;
      let textValue2 = match2.textContent || match2.innerHTML;
      let AllText = textValue + textValue2;
      console.log(textValue2.indexOf(inputValue));
      if (AllText.toLowerCase().indexOf(inputValue) > -1) {
        Pr_card_item[i].style.display = '';
      }else{
        Pr_card_item[i].style.display = 'none';
      }
    }
  }
  
});


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
        <div class="Pr_card_item" data-name="${item.category}">
          <div class="firstPart">
            <img src="./image/${item.image}" alt="" srcset="">
            <p class="category">${item.category}</p>
            <div class="cardText">
                <p>${item.brand}</p>
                <h3>${item.pName}</h3>
                <p>${item.stars}</p>
                <p><sapn><i class="fa-solid fa-bangladeshi-taka-sign"></i></sapn> ${
                  item.price
                } <span class="xprice">[${item.xPrice}]</span></p>
            </div>
          </div>
          <div class="secendPart">
          <p>${item.Ditels}</p>
          <button Class="cart_Btn" data-pName="${
            item.pName
          }">Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
        `;
      });

      document.querySelector(".Price_card").innerHTML = productList;

      function dataListFilter() {
        let filterBtn = document.querySelectorAll(".filterBtnGrup button");
        let filterCards = document.querySelectorAll(".Price_card .Pr_card_item");
      
        const filterData = (e) => {
          document.querySelector(".active").classList.remove("active");
          e.target.classList.add("active");
      
          filterCards.forEach((card) => {
            card.classList.add("hide");
      
            if (
              card.dataset.name === e.target.dataset.name ||
              e.target.dataset.name === "all"
            ) {
              card.classList.remove("hide");
            }
          });
        };
      
        filterBtn.forEach((button) => button.addEventListener("click", filterData));
      }

      dataListFilter();

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

lodeData();

