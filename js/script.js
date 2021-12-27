var pet_count = 21;
var colors = [
  "Peru",
  "SaddleBrown",
  "#333",
  "Gray",
  "DarkSlateGray",
  "LightSlateGray",
  "Sienna",
  "Chocolate",
  "#f7f7f7",
  "Black"
];

function buildPet() {
  var p = document.createElement("div");
  p.className = Math.random() < 0.5 ? "dog" : "cat";
  p.innerHTML = `<div class="head"></div>
                 <div class="body"></div>
                 <div class="legs"></div>`;

  p.style.setProperty(
    "--color-main",
    colors[Math.floor(Math.random() * colors.length)]
  );
  p.style.setProperty(
    "--head-height",
    Math.floor(Math.random() * 25) + 25 + "px"
  );
  
  document.body.appendChild(p);
}

function addPet() {
  for (var i = 0; i < pet_count; i++) {
    buildPet();
  }
}

function resetPage() {
  document.body.innerHTML = "";
  addPet();
}
resetPage();

window.addEventListener('click', resetPage);