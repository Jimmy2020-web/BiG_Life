var url = 'https://script.google.com/macros/s/AKfycbx_p6asLE8RR0U5TT3UAu4dMdbs2UcEZUpjN-mJ_rvipmno2m9DmKkFPwNEm79-Xe77/exec';

function checkDatabase() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var getData = data.data;

            function findIndex(phoneNumber) {
                for (let i = 0; i < getData.length; i++) {
                  if (Number(getData[i]["BRIS No"]) === phoneNumber) {
                    return i;
                  }
                }
                return -1; // Return -1 if phone number is not found
              };

              var phoneNumberToFind = document.getElementById("brisNo");
              phoneNumberToFind.addEventListener("change", (e) =>{
                var matchNo = Number(e.target.value);
                findIndex(matchNo)
                
                var index = findIndex(matchNo);
    
                if (index !== -1) {
                    const popup = document.querySelector('.popup_bg');
                    popup.style.display = 'block';
                    const notish = document.querySelector("#notish");
                    notish.innerHTML = `${getData[index].Name} আপনি ইতমধ্যে রেজিষ্টেশন করেছেন!`;
                } else {
                  chakAeg();
                };
                
                function calculateAge(birthDate) {
                  var today = new Date();
                  var age = today.getFullYear() - birthDate.getFullYear();
                  var m = today.getMonth() - birthDate.getMonth();
                  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                  }
                  return age;
                };

                function chakAeg() {
                  var popup = document.querySelector('.popup_bg');
                  var dob = new Date(document.getElementById("dob").value);
                  var age = calculateAge(dob);
                  if (age > 15) {
                    console.log("i am okay" + age)
                    const notish = document.querySelector("#notish");
                    notish.innerHTML = `আপনার বর্তমান বয়স  ${age}! " বয়স ৪ থেকে ১৫ বছরের মধ‍্যে হতে হবে!`
                    popup.style.display = 'block';
                    setTimeout(() => {
                      popup.style.opacity = '1';
                    }, 10);
                    
                  } else if (age < 3) {
                    console.log("i am okay" + age)
                    const notish = document.querySelector("#notish");
                    notish.innerHTML = `আপনার বর্তমান বয়স  ${age}! " বয়স ৪ থেকে ১৫ বছরের মধ‍্যে হতে হবে!`
                    popup.style.display = 'block';
                    setTimeout(() => {
                      popup.style.opacity = '1';
                    }, 10);
                    
                  } else {
                    submitData();
                    
                  };
                  function submitData() {
                    var Quran_URL = "https://script.google.com/macros/s/AKfycby9WDtu8yhAUUGWI6yaq1PeZK6_CR4ITSM1IqBo7huO0J_-FSMadTQscD6i5NGQ_GZn/exec";
                    var formData = document.getElementById("registrationForm");
        
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
                };
              });
        })
        .catch(error => console.error('Error checking database:', error));
};

checkDatabase();

const address = document.querySelector("#address");
address.value = 'এনায়েতপুর, পাক-এনায়েতপুর, রাণীনগর, নওগাঁ।';

setTimeout(() => {
  document.getElementById('loadingScreen').style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}, 3000);

const closeButton = document.getElementById('closePopup');
closeButton.addEventListener('click', () => {
  window.location.reload();
  const popup = document.querySelector('.popup_bg');
  popup.style.opacity = '0';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 300); // Adjust the duration to match the CSS transition duration
});