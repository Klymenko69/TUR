function collapseMenu() {
    let frame = document.getElementById("pictures");
    let blur = document.getElementById("container-blur");
    if (frame.style.display === "flex") {
        frame.style.display = "none";
        blur.style.filter = 'none';
    } else {
        frame.style.display = "flex";
        blur.style.filter = 'blur(10px)';
    }
  }