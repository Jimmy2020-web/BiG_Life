
function submitData() {
  var Quran_URL = "https://script.google.com/macros/s/AKfycby9WDtu8yhAUUGWI6yaq1PeZK6_CR4ITSM1IqBo7huO0J_-FSMadTQscD6i5NGQ_GZn/exec";
  var formData = document.getElementById("registrationForm");

  formData.addEventListener("submit", (e) => {
    let formReg = new FormData(formData);
    document.getElementById('loadingScreen').style.display = 'flex';
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
const closeButton = document.getElementById('closePopup');

function calculateAge(birthDate) {
  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

closeButton.addEventListener('click', () => {
  popup.style.opacity = '0';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 300); // Adjust the duration to match the CSS transition duration
});

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

const address = document.querySelector("#address");
address.value = 'এনায়েতপুর, পাক-এনায়েতপুর, রাণীনগর, নওগাঁ।';

setTimeout(() => {
  document.getElementById('loadingScreen').style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}, 3000);

// const btn_sub = document.getElementById("reset");
// btn_sub.addEventListener("click", function (icom) {

//   const url = 'https://script.google.com/macros/s/AKfycbw5sWFMwgaQWlmwGaqKdM-xBBYbQ3gg9a1EkD5b9YZQnrrm99bQ-ZM3fS5AfBHLFW7U/exec';

//   const phoneNumberToFind = document.getElementById("phoneNumber").value;

//   fetch(url)
//     .then(res => res.text())
//     .then(res => {
//       const objData = JSON.parse(res);
//       var inputData = objData.data;

//       function findIndex(phoneNumber) {
//         for (let i = 0; i < inputData.length; i++) {
//           if (inputData[i]["Phone Number"] === phoneNumber) {
//             return i;
//           }
//         }
//         // return -1;
//       };

//       const index = findIndex(phoneNumberToFind);

//       console.log(phoneNumberToFind)
//       console.log(inputData[index].Name + " আপনি ইতমধ্যে রেজিষ্টেশন করেছেন!"); // Output: 3
//     });

// })

function cakdata() {

  const url = 'https://script.google.com/macros/s/AKfycbw5sWFMwgaQWlmwGaqKdM-xBBYbQ3gg9a1EkD5b9YZQnrrm99bQ-ZM3fS5AfBHLFW7U/exec';

  const phoneNumberToFind = document.getElementById("phoneNumber").value;

  fetch(url)
    .then(res => res.json()) // Parse the response as JSON
    .then(data => {
      const inputData = data.data;
      console.log(inputData);
      // function findIndex(phoneNumber) {
      //   for (let i = 0; i < inputData.length; i++) {
      //     if (inputData[i]["Phone Number"] === phoneNumber) {
      //       return i;
      //     }
      //   }
      //   return -1; // Return -1 if phone number is not found
      // };

      // const index = findIndex(phoneNumberToFind);

      // if (index !== -1) {
      //   console.log(phoneNumberToFind)
      //   console.log(inputData[index].Name + " আপনি ইতমধ্যে রেজিষ্টেশন করেছেন!");
      // } else {
      //   console.log("Phone number not found");
      // }
    });
};

cakdata();
