const URL = "https://script.google.com/macros/s/AKfycbx22mCPUviT4JWcoyHNuSB8H4_Y_RPHeqzjMSnY2Ku0lRLtSKNhy3aUoA5PEl9g073FKg/exec";

const formData = document.forms['Post_Data'];

formData.addEventListener("submit", e => {
    e.preventDefault();
    fetch(URL, { method: 'POST', body: new FormData(formData)})
        .then(() => {
            document.querySelector("#btnSubmit").value = 'Prossing..!';
            console.log("Success")
        })
        .catch(error => console.error('Error!', error.message))
});
