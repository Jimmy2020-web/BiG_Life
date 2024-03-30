
var formData = document.getElementById("registrationForm");
formData.addEventListener("submit", (e) =>{
  e.preventDefault();

  function cakdata() {
    const url = 'https://script.google.com/macros/s/AKfycbySMax8dmEGV1RZeUxhTie_JdHiagesrmKdxsJV_gVwzr27_mca6mIVBVSEI2risGxf/exec';
     
    fetch(url)
      .then(res => res.json()) // Parse the response as JSON
      .then(data => {
        var inputData = data.data;
        console.log(inputData.length);
        
        function findIndex(phoneNumber) {
          for (let i = 0; i < inputData.length; i++) {
            if (inputData[i]["BRIS No"] === phoneNumber) {
              return i;
            }
          }
          return -1; // Return -1 if phone number is not found
        };

        var phoneNumberToFind = document.getElementById("brisNo").value;
        var matchNo = Number(phoneNumberToFind);
        var index = findIndex(matchNo);

        if (index !== -1) {
          const popup = document.querySelector('.popup_bg');
          popup.style.display = 'block';
          const notish = document.querySelector("#notish");
                  notish.innerHTML = `${inputData[index].Name} আপনি ইতমধ্যে রেজিষ্টেশন করেছেন!`;
        } else {
          function submitData() {
            var Quran_URL = "https://script.google.com/macros/s/AKfycby9WDtu8yhAUUGWI6yaq1PeZK6_CR4ITSM1IqBo7huO0J_-FSMadTQscD6i5NGQ_GZn/exec";
            // var formData = document.getElementById("registrationForm");

            formData.addEventListener("submit", (e) => {
              document.getElementById('loadingScreen').style.display = 'flex';
              let formReg = new FormData(formData);
              fetch(Quran_URL, {
                method: "POST",
                body: formReg
              }).then((res) => res.text())
                .then((finalRes) => {
                  const notish = document.querySelector("#notish");
                  notish.innerHTML = finalRes;
                  popup.style.display = 'block';
                  setTimeout(() => {
                    popup.style.opacity = '1';
                  }, 10);
                  document.getElementById('loadingScreen').style.display = 'none';
                })
              e.preventDefault();
            });
          };

          const popup = document.querySelector('.popup_bg');
          

          function calculateAge(birthDate) {
            var today = new Date();
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
              age--;
            }
            return age;
          }

          document.getElementById("registrationForm").addEventListener("submit", function (event) {
            var dob = new Date(document.getElementById("dob").value);
            var age = calculateAge(dob);
            if (age > 15) {
              const notish = document.querySelector("#notish");
              notish.innerHTML = `আপনার বর্তমান বয়স  ${age}! " বয়স ৪ থেকে ১৫ বছরের মধ‍্যে হতে হবে!`
              popup.style.display = 'block';
              setTimeout(() => {
                popup.style.opacity = '1';
              }, 10);
              event.preventDefault();
            } else if (age < 3) {
              const notish = document.querySelector("#notish");
              notish.innerHTML = `আপনার বর্তমান বয়স  ${age}! " বয়স ৪ থেকে ১৫ বছরের মধ‍্যে হতে হবে!`
              popup.style.display = 'block';
              setTimeout(() => {
                popup.style.opacity = '1';
              }, 10);
              event.preventDefault();
            } else {
              submitData();
              event.preventDefault();
            }
          });
        }
      });
  };
  
  cakdata();
});

const address = document.querySelector("#address");
address.value = 'এনায়েতপুর, পাক-এনায়েতপুর, রাণীনগর, নওগাঁ।';

setTimeout(() => {
  document.getElementById('loadingScreen').style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}, 3000);

const closeButton = document.getElementById('closePopup');
closeButton.addEventListener('click', () => {
  const popup = document.querySelector('.popup_bg');
  popup.style.opacity = '0';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 300); // Adjust the duration to match the CSS transition duration
});

const listBtn = document.getElementById("listBtn");
listBtn.addEventListener("click", () =>{
  window.open("./style/page/list.html", "blank");
});