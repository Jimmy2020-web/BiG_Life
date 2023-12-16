var count = '';
document.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var parameter = urlParams.get('parameter');
    var param2 = urlParams.get('param2');
    var param3 = urlParams.get('param3');
    var param4 = urlParams.get("param4");
    var param5 = urlParams.get('param5');
 
    document.querySelector(".info1").innerHTML = `
    <p class="title_in"><i class="fa-solid fa-file-import"></i> INVOICE TO:</p>
            <p>Name: ${parameter}</p>
            <p>Mobile No: ${param2}</p>
            <p>Address: ${param3}</p>
    `
    document.querySelector(".gTotal").innerHTML =`
    <p>Grant Total: ${param5} <i class="fa-solid fa-bangladeshi-taka-sign"></i></p>
    `

    const data = JSON.parse(decodeURIComponent(param4));

    data.map(item => {
        const rows = document.createElement('p');
        rows.innerHTML = item;
        const invoiceItems = document.getElementById("invoiceItems");
        invoiceItems.appendChild(rows);
    })

    var today = new Date();
        // Format the date
        var options = { year: 'numeric', month: 'short', day: 'numeric' };
        var formattedDate = today.toLocaleDateString('en-US', options);

        // Display the date on the page
        var todayDateElement = document.getElementById('todayDate');
        todayDateElement.innerHTML = formattedDate;
        document.querySelector("#inv_date").innerHTML = formattedDate;
});

setTimeout(() => {
    count++;
    document.querySelector("#tcno").textContent = count;
    window.print();
}, 500);