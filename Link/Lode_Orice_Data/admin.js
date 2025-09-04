
for (let index = 1; index <= 250; index++) {
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector(".bgAnis").appendChild(box);    
}

function boxAnimet() {
    let boxes = document.querySelectorAll(".box");
    let num = Math.floor(Math.random() * boxes.length);
    boxes[num].classList.toggle("animated");
}

setInterval(boxAnimet);

let user_input = document.querySelector("#user_input");
let sBtn = document.querySelector("#sBtn");
let Shet_ID = "1TFwKqWHzA9ATUR0PQYvHlq2QPTKO2XRBIodLDKUWVDY";
let Shet_NAME = "Sheet1";
var Arry_Length = "";
let Shet_RANGE = `A2:AO${Arry_Length}`;
var data = "";


let FULL_URL = ("https://docs.google.com/spreadsheets/d/" + Shet_ID + "/gviz/tq?sheet=" + Shet_NAME + "&range=" + Shet_RANGE);

function fetchData() {
    fetch(FULL_URL)
        .then(res => res.text())
        .then(rep => {
            const data = JSON.parse(rep.substr(47).slice(0, -2));

            // Total number of rows
            const Arry_Length = data.table.rows.length;
            document.querySelector("#appNo").innerHTML = Arry_Length;

            const apiData = document.getElementById("apiData");

            // ✅ Loop through all rows and collect all cells (c)
            const allCells = data.table.rows.flatMap(row => row.c);

            // ✅ Remove null and "-" values
            const filteredCells = allCells.filter(item => item !== null && item.v !== "-");

            // ✅ Create table
            const table = document.createElement("table");
            const tbody = document.createElement("div");
            tbody.className = "t24"

            filteredCells.forEach(item => {
                const row = document.createElement("span");
                const cell = document.createElement("span");
                cell.textContent = item.v;
                row.appendChild(cell);
                tbody.appendChild(row);
            });

            table.appendChild(tbody);
            console.log(filteredCells);

            // Append table to DOM
            apiData.appendChild(tbody);
        });
}


fetchData(0);