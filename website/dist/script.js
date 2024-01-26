const initialLogos = [
  "Figma.png",
  "After Effects.png",
  "Illustrator.png",
  "Lightroom.png",
  "Xd.png",
  "Premiere Pro.png",
  "Photoshop.png",
  "image 13.png",
  "Miro.png",
  "spark.png",
  "unity.png",
  "blender.png"
];

// Function to display logos
function displayLogos(logos) {



    const container = document.getElementById("logoContainer");
  container.innerHTML = ""; // Clear existing logos

  // console.log(container);

  logos.forEach((logoURL, index) => {
    const logo = document.createElement("img");
    logo.src = logoURL;
    logo.alt = `Logo ${index + 1}`;
    logo.className = "logo";
    container.appendChild(logo);
  });
}


function moverersR () {
  console.log("clicked");
  const currentLeft = document.getElementById('borderMoverers').style.left;
  console.log(currentLeft);
  const targetLeft = (currentLeft === 81 ) ? 281 : 181 ;
  console.log(targetLeft);
  document.getElementById('borderMoverers').style.left = 324 + 'px'
  document.getElementById('borderMoverers').style.transitionDelay  = 1000 + 'ms';

};

function moverersL () {
  console.log("clicked");
  const currentLeft = document.getElementById('borderMoverers').style.left;
  console.log(currentLeft);
  const targetLeft = (currentLeft === 81 ) ? 281 : 181 ;
  console.log(targetLeft);
  document.getElementById('borderMoverers').style.left = 81 + 'px'
  document.getElementById('borderMoverers').style.transitionDelay  = 1000 + 'ms';
};

// Initial display of logos
displayLogos(initialLogos);

// Event listener for the change button
document.getElementById("buttonDev").addEventListener("click", function () {
  document.getElementById("buttonDes").classList.remove("active");

  // Add 'active' class to the clicked button
  document.getElementById("buttonDev").classList.add("active");
  moverersR()
  const devLogos = [
    "JavaScript.png",
    "React.png",
    "Php.png",
    "NodeJs.png",
    "css-1.png",
    "html-1.png",
    "C.png",
    "bootstrap.png",
  ];

  // Update displayed logos
  displayLogos(devLogos);
});

document.getElementById("buttonDes").addEventListener("click", function () {
  document.getElementById("buttonDev").classList.remove("active");
  moverersL();
  // Add 'active' class to the clicked button
  this.classList.add("active");

  const desLogos = [
    "Figma.png",
    "After Effects.png",
    "Illustrator.png",
    "Lightroom.png",
    "Xd.png",
    "Premiere Pro.png",
    "Photoshop.png",
    "image 13.png",
    "Miro.png",
  "spark.png",
  "unity.png",
  "blender.png"
  ];

  // Update displayed logos
  displayLogos(desLogos);
});


// function moveLeftRight(element) {
//   const currentLeft = parseInt(window.getComputedStyle(element).left);
//   const targetLeft = (currentLeft === 181) ? 281 : 181; // Toggle between 181px and 281px

//   element.style.left = targetLeft + 'px';
// }