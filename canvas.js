window.addEventListener("load", () => {
  console.log("Welcome");
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  // Resizing

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  
});

window.addEventListener("resize", () => {});
