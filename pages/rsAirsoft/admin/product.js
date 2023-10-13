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
  "https://script.google.com/macros/s/AKfycbw7RK4jYVm7B3I0gY5hQruD9u_CCWGO3_qoKvL_xoousu0fPyt5lSb8P2J-Jhrb9IcsvA/exec?action=product";

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
    "https://script.google.com/macros/s/AKfycbzki351eeGjEFQ7oGvO9hUv4vNv4-Oib8HM30WZeDERaWix6i9NneY8B3JVoG6InyaUBA/exec"
  )
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#countPd").innerHTML = data.length;
      document.querySelector("#pdid").value = `rsPd0${data.length + 1}`;
      // document.querySelector("#imges").value = `rsPd0${data.length + 1}.png`;

      let categoryFilter = "";

      const brandButton = data.filter((brand, index, array) => {
        return array.findIndex(obj => obj.category === brand.category) === index;
      })

      brandButton.forEach(brand => {
        console.log(brand);
        categoryFilter += `
        <option value="${brand.category}">${brand.category}</option> 
        `
      });
      document.querySelector("#filterGrup").innerHTML = categoryFilter;
    });
  }


lodeData();

let uplodeImage = document.querySelector("#uImage");
uplodeImage.addEventListener("change", () => {
  let image = new FileReader();
  image.addEventListener("loadend", () =>{
    document.querySelector(".loder").style.display = "flex";
    let res = image.result;
    let mainimg = res.split("base64,")[1];
    let imageObj = {
      base64: mainimg,
      type: uplodeImage.files[0].type,
      name: uplodeImage.files[0].name,
    }
    fetch("https://script.google.com/macros/s/AKfycbzNKBeKBEZtUyhT98b1hqijLEpt4LzDNYSPmeDCx0QLl4_sftIL_6UP11qmZP9tUlavIg/exec?action=image", {method: "POST", body: JSON.stringify(imageObj)})
  .then(res => res.text())
  .then(data => {
    document.querySelector("#imges").value =` https://drive.google.com/uc?id=${data}&export=view`;
    document.querySelector("#uimg").src = ` https://drive.google.com/uc?id=${data}&export=view`;
    document.querySelector(".loder").style.display = "none";
  })
  })
  image.readAsDataURL(uplodeImage.files[0]);
});