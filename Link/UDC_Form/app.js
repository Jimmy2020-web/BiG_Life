var URL = 'https://script.google.com/macros/s/AKfycbwOOXGnmy0MRvZg2tYLmON5tFyDdRWbAiOKrx_OM2u1x6Y9a1hrC8m1bagoGIdUm-ujFA/exec';

var formData = document.getElementById("dataForm");

formData.addEventListener("submit",(event)=>{
    event.preventDefault();
    document.querySelector("#submit").textContent = "Verifying..!";
    chakData()
});

var infobox = document.querySelector(".popup_box");

function chakData() {
    fetch(URL)
    .then((res)=>res.json())
    .then(data =>{
        var apiData = data.data;
        let nidInput = document.querySelector("#nidNo").value.trim();
        let matchFound = false;
        apiData.forEach((item) => {
            if(item.NID===Number(nidInput)){
                matchFound = true;
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