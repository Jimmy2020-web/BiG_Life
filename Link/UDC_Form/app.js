var URL = 'https://script.google.com/macros/s/AKfycbz_Olk3NFylw_5Mtv-ZkmO-LBKfausv8xq5uTMQwxvIHVRcbWyLH3utcKLJJDmJiqgJ_w/exec';

var formData = document.getElementById("dataForm");

formData.addEventListener("submit",(event)=>{
    event.preventDefault();
    document.querySelector("#submit").textContent = "Verifying..!";
    chakData()
});

var infobox = document.querySelector(".popup_box");
var div2 = document.querySelector(".div");

function chakData() {
    div2.style.display="block";
    fetch(URL)
    .then((res)=>res.json())
    .then(data =>{
        var apiData = data.data;
        let nidInput = document.querySelector("#nidNo").value.trim();
        let matchFound = false;
        apiData.forEach((item) => {
            if(item.NID===Number(nidInput)){
                matchFound = true;
                div2.style.display="none";
                infobox.style.display = "flex";
                document.querySelector("#info").textContent = `${item.Name}  আপনি ইতমধ‍্য রেজিষ্টেশন করেছেন!`
                setTimeout(() => {
                    infobox.style.display = "none";
                    document.querySelector("#submit").textContent = "Submit";
                }, 5000);
                return;
            }
        });
        if (!matchFound) {
            div2.style.display="block";
            document.querySelector("#submit").textContent = "Submitting..!";
            submitData();
        }
    })
}

function submitData(){
    let data = new FormData(formData);
    fetch(URL,{
        method:"POST",
        body:data
    }).then((res)=>res.text())
    .then((fres)=>{
        div2.style.display="none";
        document.querySelector("#submit").textContent = "Submitted..!";
        infobox.style.display = "flex";
        document.querySelector("#info").textContent = fres;
        setTimeout(() => {
            infobox.style.display = "none";
            document.querySelector("#submit").textContent = "Submit";
        }, 5000);
    })
}

const btnList = document.querySelector("#list");
btnList.addEventListener("click",()=>{
    window.open("./page/list.html")
})
