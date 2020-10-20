let generateColor = document.querySelector(".btn");
let colorPalette = document.querySelectorAll(".color-box");
let colorCode = document.querySelectorAll(".color-code");

// on spacebar click change the colors
document.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    for (let i = 0; i < colorPalette.length; i++) {
      let randomValue = "#" + "";
      let colorRange = "abcdef1234567890";
      for (j = 0; j < 6; j++) {
        randomValue = randomValue + colorRange[Math.floor(Math.random() * 16)];
      }

      // color value
      colorCode[i].value = randomValue;
      // background color 
      colorPalette[i].style.backgroundColor = randomValue;
    }
  }
})

// change colors and text on button click
for (let i = 0; i < colorPalette.length; i++) {
  generateColor.addEventListener("click", () => {
    let randomValue = "#" + "";
    let colorRange = "abcdef1234567890";
    for (j = 0; j < 6; j++) {
      randomValue = randomValue + colorRange[Math.floor(Math.random() * 16)];
    }

    colorCode[i].value = randomValue;
    colorPalette[i].style.backgroundColor = randomValue;
  });
}

// copy to clipboard
let clipboard = new ClipboardJS('.palette');

clipboard.on('success', (e) => {
  // toast notification 
  const palettes = document.querySelectorAll('.palette')
  palettes.forEach((palette) => {
    palette.addEventListener('click', () => {
      let toast = document.getElementById("toast");
      toast.classList.add("show");
      toast.innerHTML = 'Color copied to your clipboard';
      setTimeout(() => {
        toast.classList.remove("show");
      }, 1000);
    });
  });
  // console.log(e.text);
  e.clearSelection();
})