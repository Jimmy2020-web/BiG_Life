
let user_input = document.querySelector("#user_input");
let sBtn = document.querySelector("#sBtn");
let Shet_ID = "1TFwKqWHzA9ATUR0PQYvHlq2QPTKO2XRBIodLDKUWVDY";
let Shet_NAME = "Sheet1";
var Arry_Length = "";
let Shet_RANGE = `A2:AO${Arry_Length}`;
var data = "";

sBtn.addEventListener("click", () => {
    let sKye = Number(user_input.value - 253);
    
    if (sKye > Arry_Length) {
        createPopup((sKye+253)+' - এই নাম্বার কোন সনদ নেই!');
    } else if(sKye <= -1) {
        createPopup((sKye+253)+' - এই নাম্বার কোন সনদ নেই!');
    }else{
    let lode_Data = document.querySelector(".lode_Data");
    let lode_Data2 = document.querySelector(".lode_Data2");
    let sl_div = document.querySelector(".sl_div");
    Arry_Length = data.table.rows.length;
    localStorage.setItem("sKey", sKye);
    
    let view_btn = document.querySelector(".view_btn");
    let velige = document.querySelector(".velige");

    let NewBox  = document.createElement("span");
        NewBox.id = ("box" + sKye);
        NewBox.className = "Grid";
        lode_Data.append(NewBox);
        NewBox.innerHTML = data.table.rows[sKye].c[0].v;

        let sl = document.createElement("span");
        sl.innerHTML = `${sKye+253}`;
        sl_div.append(sl);
        

        let NewBox1  = document.createElement("span");
        NewBox1.id = ("box" + sKye);
        NewBox1.className = "Grid";
        lode_Data2.append(NewBox1);
        NewBox1.innerHTML = data.table.rows[sKye].c[1].v;

        let veligeName = document.createElement("span");
        veligeName.innerHTML = data.table.rows[sKye].c[2].v;
        velige.append(veligeName);

        let viewBtn = document.createElement("span");
        viewBtn.id = ("btn" + sKye);
        viewBtn.className = ("material-symbols-outlined");
        viewBtn.innerHTML = "print";
        view_btn.append(viewBtn);
        window.open("./page/print.html")
    }
});

let FULL_URL = ("https://docs.google.com/spreadsheets/d/" + Shet_ID + "/gviz/tq?sheet=" + Shet_NAME + "&range=" + Shet_RANGE);

function fetchData() {
    
fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    data = JSON.parse(rep.substr(47).slice(0, -2));

    // let lode_Data = document.querySelector(".lode_Data");
    // let lode_Data2 = document.querySelector(".lode_Data2");
    // let sl_div = document.querySelector(".sl_div");
    Arry_Length = data.table.rows.length;
    let total_Data_no = document.querySelector("#total_Data_no");
    total_Data_no.innerHTML = `সর্বমোট ${Arry_Length} [ ০১/০৩/২০২৩ হহিতে ]`;
    // let view_btn = document.querySelector(".view_btn");
    // let velige = document.querySelector(".velige");
    // filterData.push(data);
    
    // for (let i = 0; i < Arry_Length; i++) {
    //     let NewBox  = document.createElement("span");
    //     NewBox.id = ("box" + i);
    //     NewBox.className = "Grid";
    //     lode_Data.append(NewBox);
    //     NewBox.innerHTML = data.table.rows[i].c[0].v;

    //     let sl = document.createElement("span");
    //     sl.innerHTML = `${i+1}`;
    //     sl_div.append(sl);
        

    //     let NewBox1  = document.createElement("span");
    //     NewBox1.id = ("box" + i);
    //     NewBox1.className = "Grid";
    //     lode_Data2.append(NewBox1);
    //     NewBox1.innerHTML = data.table.rows[i].c[1].v;

    //     let veligeName = document.createElement("span");
    //     veligeName.innerHTML = data.table.rows[i].c[2].v;
    //     velige.append(veligeName);

    //     let viewBtn = document.createElement("span");
    //     viewBtn.id = ("btn" + i);
    //     viewBtn.className = ("material-symbols-outlined");
    //     viewBtn.innerHTML = "visibility";
    //     view_btn.append(viewBtn);
    // }
});
}

fetchData(0);


function createPopup(text) {
    let el = document.createElement('DIV');
    el.classList.add('popup');
    el.innerHTML = text;  
    document.body.appendChild(el);
    setTimeout(() => {
      el.remove();
    },5000);
}