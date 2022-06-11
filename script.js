function switchTheme() {
  // TODO: implement toggling the light/dark theme

  //-------------------------Body---------------------------
  document.querySelector("body").classList.toggle("bg-dark");

  //----------------------------Navbar-----------------------------
  document.querySelector("#navb").classList.toggle("bg-dark");
  document.querySelector("#navb").classList.toggle("navbar-dark");

  //--------------------------Switch Button-----------------------------
  let butn = document.querySelectorAll("#themeSwitch")[0];

  if (butn.innerHTML == "Activate Light Theme") {
    butn.innerHTML = "Activate Dark theme";
  } else {
    butn.innerHTML = "Activate Light Theme";
  }
  document.querySelector("#themeSwitch").classList.toggle("bg-light");
  document.querySelector("#themeSwitch").classList.toggle("text-dark");

  //----------------------Header h1----------------------
  let head1 = document.querySelectorAll("h1")[0];

  if (head1.innerHTML === "This is the Light theme") {
    head1.innerHTML = "Embrace the Dark Side";
    head1.style.color = "white";
  } else {
    head1.innerHTML = "This is the Light theme";
    head1.style.color = "black";
  }

  //---------------Cards--------------------------
  let crd = document.querySelectorAll(".card");

  for (let a = 0; a < crd.length; a = a + 1) {
    crd[a].classList.toggle("text-white");
    crd[a].classList.toggle("bg-dark");
    crd[a].classList.toggle("border-light");
  }

  let clmn = document.querySelectorAll(".col");

  for (let b = 0; b < clmn.length; b = b + 1) {
    clmn[b].classList.toggle("col-12");
  }

  //-----------------------------Form-----------------------------------------
  document.querySelectorAll(".bg-gradient")[0].classList.toggle("bg-dark");
  document.querySelectorAll(".bg-gradient")[0].classList.toggle("text-light");

  //-------------------------Page text----------------------------------
  document.querySelectorAll(".row")[2].classList.toggle("text-light");

  //----------------------Table-------------------
  let row = document.querySelectorAll("tr");
  for (let i = 0; i < row.length; i = i + 1) {
    row[i].classList.toggle("text-light");
  }

  //---------------------------Footer--------------------------------------------------------
  document.querySelector(".navbar-text").classList.toggle("text-light");
  document
    .querySelectorAll(".container-fluid")[1]
    .classList.toggle("justify-content-end");
}
