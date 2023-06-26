
let productList = "";

products.forEach((item) => {
   productList += `
        <div class="Pr_card_item">
            <img src="${item.image}" alt="" srcset="">
            <div class="cardText">
                <p>${item.brand}</p>
                <h3>${item.pName}</h3>
                <p>Rating: <span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-regular fa-star-half-stroke"></i></span></p>
                <p><sapn><i class="fa-solid fa-bangladeshi-taka-sign"></i></sapn> ${item.price} <span class="xprice">[${item.price}]</span></p>
                <button Class="cart_Btn" data-pName="${item.pName}">Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
            </div>
        </div>
    `;
});

document.querySelector(".Price_card").innerHTML = productList;

document.querySelectorAll(".cart_Btn").forEach((button) => {
    button.addEventListener("click", () =>{
       const productName = button.dataset.pname;

       let matchItem;
        cart.forEach((item) => {
            if(productName === item.productName) {
                matchItem = item;
            }
        });

        if(matchItem) {
            matchItem.quantity += 1;
        }else{
            cart.push({
             productName: productName,
             quantity:1
            });
        };

        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });
        document.querySelector("#cartTotal").innerHTML = cartQuantity;
    });
});