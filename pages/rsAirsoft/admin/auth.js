function lodeData() {
  document.querySelector(".popBox").style.display = "flex";
  fetch(
    "https://script.google.com/macros/s/AKfycbx22mCPUviT4JWcoyHNuSB8H4_Y_RPHeqzjMSnY2Ku0lRLtSKNhy3aUoA5PEl9g073FKg/exec"
  )
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".popBox").style.display = "none";
        let user = data[0].user;
        let password = data[0].pass;

        let user2 = document.getElementById('user').value;
        let password2 = document.getElementById('password').value;

        if (user2 == user && password2 == password) {
          authToken();
          alert("Authentication Success Full")
      }else{
        alert("Authentication Faild ! wrong password");   
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

function auth() {
  lodeData()
};

function authToken() {
    creatAuth();
};

const length = 32;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%&'()*+,-./{}[]<>-=";

const allChars = upperCase + lowerCase + number + symbol;

function creatAuth() {
  let authPassword = "";
  authPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
  authPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  authPassword += number[Math.floor(Math.random() * number.length)];
  authPassword += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > authPassword.length) {
    authPassword += allChars[Math.floor(Math.random() * authPassword.length)];
  }
    localStorage.setItem('authPassword', authPassword);
    window.location.href= `./rsProductPost.html?authKey=`+authPassword;
}