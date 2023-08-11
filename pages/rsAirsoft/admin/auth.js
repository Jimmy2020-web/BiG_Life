function auth() {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if (user == "Sagor" && password == "admin1") {
        authToken();
        alert("Login success Click Okay");
    }else{
        alert("Login faild invalid User or password");
    }
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