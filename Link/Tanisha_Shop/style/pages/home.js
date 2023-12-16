const authPassword = localStorage.getItem('authPassword');
const urlParams = new URLSearchParams(window.location.search);
const authKey = urlParams.get('authKey');

if (authKey === authPassword) {
    document.querySelector(".mainBody").style.display = 'block';
} else {
  document.querySelector(".ebox").style.display = "flex";
}

const saidManu = document.querySelectorAll(".siedManu a");

saidManu.forEach((anchor) => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const anchorText = anchor.innerHTML;

        document.querySelector("#titleData").innerHTML = anchorText;
        anchor.classList.toggle("shadow3");
    });
});

var disc = document.querySelector("#disc");
var qty = document.querySelector("#qty");
var price = document.querySelector("#price");
var subT = document.querySelector("#subT");

price.addEventListener("keyup", (e) => {
  subT.value = qty.value * price.value;
});

const addBtn = document.querySelector("#addBtn");
var addTabel = document.querySelector("#addTabel");
var count = 1;

var invoiceData = [];
var subTotal = [];


addBtn.addEventListener("click", (e) => {
  if (disc.value === "" ) {
    alert("Please Fill in the Field");
  }else{
  const rows= document.createElement("p");
  const cell = document.createElement("span");
  cell.innerText =  count++;
  rows.appendChild(cell);
  const discCell = document.createElement("span");
  discCell.innerText = disc.value;
  discCell.className = "textLeft";
  rows.appendChild(discCell);
  const cell1 = document.createElement("span");
  cell1.innerText = qty.value;
  rows.appendChild(cell1);
  const cell2 = document.createElement("span");
  cell2.innerText = price.value;
  rows.appendChild(cell2);
  const cell3 = document.createElement("span");
  cell3.innerText = subT.value;
  rows.appendChild(cell3);
  const cell4 = document.createElement("span");
  cell4.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
  cell4.id = "trashcan";
  rows.appendChild(cell4);
  addTabel.appendChild(rows);

  invoiceData.push(rows.innerHTML);
  subTotal.push(Number(subT.value));

  const sum = subTotal.reduce((acc, current) => acc + current, 0);

  document.querySelector("#gTotal").textContent = ` ${sum}`;

  disc.value = "";
  qty.value = "";
  price.value = "";
  subT.value = "";

  const deleteBtn = document.querySelectorAll("#trashcan");

  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
      count--;
    });
  });
};
});

const invoiceForm = document.querySelector("#invForm");

invoiceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const coustomerName = data.get("coustomerName");
  const mobile = data.get("mobile");
  const address = data.get("address");

  const sum = subTotal.reduce((acc, current) => acc + current, 0);
  const jsonObjArray = JSON.stringify(invoiceData);
  const invoice = './invoice.html?parameter=' + encodeURIComponent(coustomerName) + "&param2=" +encodeURIComponent(mobile) + "&param3=" + encodeURIComponent(address) + "&param4=" + encodeURIComponent(jsonObjArray) + "&param5=" + encodeURIComponent(sum);
  window.open(invoice, '_blank');

  invoiceData = [];
  subTotal = [];
});

invoiceForm.addEventListener('reset', (event) => {
  event.preventDefault();
  invoiceData = [];
  subTotal = [];
  addTabel.firstChild.remove();
});
