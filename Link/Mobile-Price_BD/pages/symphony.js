const phoneDetels = [
  {
    pname: "Xaiomi",
    Model: "Redmi Note 9 Pro",
    BDprice: "TK: 25,999",
    bPrice: "Glacier White, Interstellar Grey, Tropical Green",
    releaseDate: "5020mAh Non-removable Lithium Ion Polymer Battery",
    pimage:
      "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-note-10-lite/specs-header.png",
    AndirodV: "10.0",
    camera: "Back 8MP/64MP AI Quad Camera, Font 8MP",
    RAM: "available for Redmi Note 9 pro 6GB + 64GB also available",
    ROM: "up to 2.3GHz Qualcomm® Snapdragon™ 720G",
  },
];

function phoneImageLode(phoneDetels) {
  return `
    <div class="phoneImg my-5">
        <h2 class="p-title">${phoneDetels.Model}<h2>
        <img src="${phoneDetels.pimage}" alt=""/>
        <h2 class="p-title pb-4">${phoneDetels.BDprice}<h2/>
    <div/>
    `;
}

document.getElementById("phoneImg").innerHTML = `
${phoneDetels.map(phoneImageLode).join("")}
`;

function phoneDataLode(phoneDetels) {
  return `
  <div class="table2 p-5">
  <span class="Over-view">Over View and Spaction<span/>
  <table class="table table-bordered table-md text-left">
    <thead>
      <tr>

        <th scope="col">Title</th>
        <th scope="col">Discription</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Brand : </td>
        <td>${phoneDetels.pname}</td>
      </tr>
      <tr>
        <td>Modle :</td>
        <td>${phoneDetels.Model}</td>
      </tr>
      <tr>
        <td>Price :</td>
        <td>${phoneDetels.BDprice}</td>
      </tr>
      <tr>
        <td>Battery :</td>
        <td>${phoneDetels.releaseDate}</td>
      </tr>
      <tr>
        <td>Camera :</td>
        <td>${phoneDetels.camera}</td>
      </tr>
      <tr>
        <td>Procesor :</td>
        <td>${phoneDetels.ROM}</td>
      </tr>
      <tr>
        <td>RAM :</td>
        <td>${phoneDetels.RAM}</td>
      </tr>
      <tr>
        <td>Color :</td>
        <td>${phoneDetels.bPrice}</td>
      </tr>
    </tbody>
  </table>
</div>
    `;
}

document.getElementById("phoneData").innerHTML = `
${phoneDetels.map(phoneDataLode).join("")}
`;

//**************footur animation style***************

function scrollApper() {
  const fadeanimation = document.querySelector(".profile-fottur");
  const textPosation = fadeanimation.getBoundingClientRect().top;
  const screenPosation = window.innerHeight / 1.3;

  if (textPosation < screenPosation) {
    fadeanimation.classList.add("fadeanimation-add");
  }
}

window.addEventListener("scroll", scrollApper);

function scrollApper2() {
  const fadeanimation = document.querySelector(".pro-detls");
  const textPosation = fadeanimation.getBoundingClientRect().top;
  const screenPosation = window.innerHeight / 1.3;

  if (textPosation < screenPosation) {
    fadeanimation.classList.add("fadeanimation-add");
  }
}

window.addEventListener("scroll", scrollApper2);
//**********end*************