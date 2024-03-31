
var url = 'https://script.google.com/macros/s/AKfycbx_p6asLE8RR0U5TT3UAu4dMdbs2UcEZUpjN-mJ_rvipmno2m9DmKkFPwNEm79-Xe77/exec';

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById('loadingScreen').style.display = 'flex';
    const getData = data.data;
    document.getElementById("total").innerText = getData.length;
    const tableBody = document.querySelector('#data-table tbody');
    getData.forEach(rowData => {
      const row = document.createElement('tr');
      Object.values(rowData).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });
      tableBody.appendChild(row);
      document.getElementById('loadingScreen').style.display = 'none';
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
