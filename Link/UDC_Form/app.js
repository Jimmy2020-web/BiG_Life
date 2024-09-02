var URL = 'https://script.google.com/macros/s/AKfycbwOOXGnmy0MRvZg2tYLmON5tFyDdRWbAiOKrx_OM2u1x6Y9a1hrC8m1bagoGIdUm-ujFA/exec';

var formData = document.getElementById("dataForm");

formData.addEventListener("submit",(event)=>{
    event.preventDefault();
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
                }, 5000);
                return;
            }
        });
        if (!matchFound) {
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
        infobox.style.display = "flex";
        document.querySelector("#info").textContent = fres;
        setTimeout(() => {
            infobox.style.display = "none";
        }, 5000);
    })
}

