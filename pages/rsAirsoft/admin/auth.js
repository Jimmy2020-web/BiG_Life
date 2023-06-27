function auth() {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    if (user == "Sagor" && password == "admin1") {window.location.assign('./rsProductPost.html');
    alert("Login success Click Okay")
    }else{
        alert("Login faild invalid User or password")
        return;
    }
}
