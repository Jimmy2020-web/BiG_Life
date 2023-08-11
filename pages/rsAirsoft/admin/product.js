const authPassword = localStorage.getItem('authPassword');
const urlParams = new URLSearchParams(window.location.search);
const authKey = urlParams.get('authKey');

if (authKey === authPassword) {
  document.querySelector(".authPopup").style.display = "none";
} else {
  document.querySelector(".authPopup").style.display = "flex";
}

const cakeValue = document.querySelector("#textarea");
cakeValue.addEventListener("keyup", () => {
  if (cakeValue.value.length > 245) {
    cakeValue.style.background = "#ca0404";
    cakeValue.style.color = "#fff";
  }else{
    cakeValue.style.background = "#fff";
    cakeValue.style.color = "#313131";
  }
});

const URL =
  "https://script.google.com/macros/s/AKfycbyItFpoDLwEJDxTuHJE9n4-xtuwSV3X1iH3otAgW1NZH_cNzzWafxTHaQR_nY-wHCCvYg/exec";

const formData1 = document.forms["listData"];

formData1.addEventListener("submit", (e) => {
  document.querySelector("#btnSubmit").value = "Prossasing..!";
  document.querySelector(".loder").style.display = "flex";
  e.preventDefault();
  fetch(URL, { method: "POST", body: new FormData(formData1) })
    .then(() => {
      document.querySelector("#btnSubmit").value = "Add Product";
      document.querySelector(".loder").style.display = "none";
      lodeData();
    })
    .catch((error) => console.error("Error!", error.message));
});

function lodeData() {
  fetch(
    "https://script.google.com/macros/s/AKfycbx22mCPUviT4JWcoyHNuSB8H4_Y_RPHeqzjMSnY2Ku0lRLtSKNhy3aUoA5PEl9g073FKg/exec"
  )
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#countPd").innerHTML = data.length;
      document.querySelector("#pdid").value = `rsPd0${data.length + 1}`;
      document.querySelector("#imges").value = `rsPd0${data.length + 1}.png`;

      let categoryFilter = "";

      const brandButton = data.filter((brand, index, array) => {
        return array.findIndex(obj => obj.category === brand.category) === index;
      })

      brandButton.forEach(brand => {
        categoryFilter += `
        <option value="${brand.category}">${brand.category}</option> 
        `
      });
      document.querySelector("#filterGrup").innerHTML = categoryFilter;
    });
  }


lodeData();
