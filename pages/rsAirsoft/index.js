let root = document.querySelector(":root");
let rootStyle = getComputedStyle(root);
let bgColor = rootStyle.getPropertyValue("--bgClor");
let textColor = rootStyle.getPropertyValue("--textColor");
let inputColor = document.querySelector(".bgCl");
let inputColor2 = document.querySelector(".txC1");
let inputColor3 = document.querySelector(".txC2");

let flyBtn = document.querySelector(".fa-palette");
let flyBtnClose = document.querySelector(".fa-circle-xmark");
let flyManu = document.querySelector(".flyManu");

flyBtn.addEventListener("click", () => {
  flyManu.style.bottom = "15px";
});

flyBtnClose.addEventListener("click", () => {
  flyManu.style.bottom = "-200px";
});

inputColor.addEventListener("change", event => {
  root.style.setProperty("--bgClor", event.target.value);
});
inputColor2.addEventListener("change", event => {
  root.style.setProperty("--textColor", event.target.value);
});
inputColor3.addEventListener("change", event => {
  root.style.setProperty("--textColor2", event.target.value);
});

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
      if (AllText.toLowerCase().indexOf(inputValue) > -1) {
        Pr_card_item[i].style.display = '';
      }else{
        Pr_card_item[i].style.display = 'none';
      }
    }
  }
  
});


function lodeData() {
  document.querySelector("#onlode").classList.add("loder");
  fetch(
    "https://script.google.com/macros/s/AKfycbx22mCPUviT4JWcoyHNuSB8H4_Y_RPHeqzjMSnY2Ku0lRLtSKNhy3aUoA5PEl9g073FKg/exec"
  )
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#totalProduct").innerHTML = data.length;
      
      let productList = "";
      let brandList = "";
      let categoryFilter = "";

      const filteredData = data.filter((item, index, array) => {
        return array.findIndex(obj => obj.brand === item.brand) === index;
      });

      filteredData.forEach(product => {
        brandList += `
        <span>${product.brand}</span>
        `
      });

      const brandButton = data.filter((brand, index, array) => {
        return array.findIndex(obj => obj.category === brand.category) === index;
      })

      brandButton.forEach(brand => {
        categoryFilter += `
        <button data-name="${brand.category}">${brand.category}</button>
        `
      });

      data.forEach((item) => {
        productList += `
        <div class="Pr_card_item" data-name="${item.category}">
          <div class="firstPart">
            <img src="./image/${item.image}" alt="" srcset="">
            <span class="category">${item.category}</span>
            <div class="cardText">
                <p>${item.brand} <span id="code">[#${item.id}]</span> </p>
                <h3>${item.pName}</h3>
                <p>${item.stars}</p>
                <p id="Xprice"><sapn><i class="fa-solid fa-bangladeshi-taka-sign"></i></sapn> ${
                  item.price
                } <span class="xprice">[${item.xPrice}]</span></p>
            </div>
          </div>
          <div class="secendPart">
          <p>${item.Ditels}</p>
          <button Class="cart_Btn" data-pName="${
            item.pName
          }">Details <i class="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
        `;
      });

      document.querySelector(".Price_card").innerHTML = productList;
      document.querySelector(".brandItem").innerHTML = brandList;
      document.querySelector(".filterGrup").innerHTML = categoryFilter;

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

      document.querySelectorAll(".cart_Btn").forEach((button, index) => {
        // button.addEventListener("click", () => {
        //   const productName = button.dataset.pname;
        //   let matchItem;
        //   cart.forEach((item) => {
        //     if (productName === item.productName) {
        //       matchItem = item;
        //     }
        //   });

        //   if (matchItem) {
        //     matchItem.quantity += 1;
        //   } else {
        //     cart.push({
        //       productName: productName,
        //       quantity: 1,
        //     });
        //   }

        //   let cartQuantity = 0;
        //   cart.forEach((item) => {
        //     cartQuantity += item.quantity;
        //   });
        //   document.querySelector("#cartTotal").innerHTML = cartQuantity;
        // });
        button.addEventListener("click", () => {
          // window.open("https://www.facebook.com/profile.php?id=100009359734347&mibextid=ZbWKwL");
          localStorage.setItem("btnIndex", index);
          window.location.assign("./pages/view.html");
        });
      });
      document.querySelector("#onlode").classList.remove("loder");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

lodeData();


window.addEventListener("scroll", () => {
  let Pr_card_item = document.querySelectorAll(".Pr_card_item");
  const triggerBottm= window.innerHeight / 5 * 3.5;
  Pr_card_item.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottm) {
      box.classList.add("showCard");
    }else{
      box.classList.remove("showCard");
    }
  });
});

let faceBookBtn = document.querySelector(".facebook");
let mailBtn = document.querySelector(".mail");
let whatsAppBtn = document.querySelector(".whatsApp");

faceBookBtn.addEventListener("click", () =>{
  window.open("https://www.facebook.com/profile.php?id=100009359734347&mibextid=ZbWKwL");
});

mailBtn.addEventListener("click", () =>{
  window.open("https://mail.google.com/mail/u/0/#inbox?compose=new");
});

whatsAppBtn.addEventListener("click", () =>{
  window.open("https://wa.me/+966571418190");
});
