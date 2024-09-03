var URL = 'https://script.google.com/macros/s/AKfycbz_Olk3NFylw_5Mtv-ZkmO-LBKfausv8xq5uTMQwxvIHVRcbWyLH3utcKLJJDmJiqgJ_w/exec';

var listData = document.querySelector(".tadel");
var infobox = document.querySelector(".popup_box");

function inputCloud() {
    infobox.style.display = "flex";
    fetch(URL)
        .then((res) => res.json())
        .then(data => {
            infobox.style.display = "none";
            const apiData = data.data;
            apiData.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.upzila}</td>
                    <td>${item.udc_name}</td>
                    <td>${item.Name}</td>
                    <td>${item.Fat_name}</td>
                    <td>${item.NID}</td>
                    <td>${item.Ek_id}</td>
                    <td>${item.phone_no}</td>
                    <td class="eng">${item.email_no}</td>
                `;
                listData.appendChild(row);
            });
        })
}

inputCloud()