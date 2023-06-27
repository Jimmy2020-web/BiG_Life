const URL = "https://script.google.com/macros/s/AKfycbyItFpoDLwEJDxTuHJE9n4-xtuwSV3X1iH3otAgW1NZH_cNzzWafxTHaQR_nY-wHCCvYg/exec";

const formData1 = document.forms['listData'];

formData1.addEventListener("submit", e => {
    document.querySelector("#btnSubmit").value = 'Prossasing..!';
    e.preventDefault();
    fetch(URL, { method: 'POST', body: new FormData(formData1)})
        .then(() => {
            document.querySelector("#btnSubmit").value = 'Add Product';
        })
        .catch(error => console.error('Error!', error.message))
});
