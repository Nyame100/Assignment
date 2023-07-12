const maleWave = document.getElementById("maleWave");
const femaleWave = document.getElementById("femaleWave");
const maleStand = document.getElementById("maleStand");
const femaleStand = document.getElementById("femaleStand");
const btn1 = document.getElementById("male");
const btn2 = document.getElementById("female");

function maleToggle() {
  maleStand.classList.toggle("disappear");
  maleWave.classList.toggle("appear");
  if (getComputedStyle(femaleWave).display === "block") {
    femaleWave.classList.toggle("appear");
    femaleStand.classList.toggle("disappear");
  }
}

function femaleToggle() {
  femaleStand.classList.toggle("disappear");
  femaleWave.classList.toggle("appear");
  if (getComputedStyle(maleWave).display === "block") {
    maleWave.classList.toggle("appear");
    maleStand.classList.toggle("disappear");
  }
}

function toggleGender(id) {
  if (id === "male") {
    maleToggle();
  } else {
    femaleToggle();
  }
}
