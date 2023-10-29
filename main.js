let ChangeBgColour = document.getElementById("ChangeBgColour");
let WhiteBg = true;

function changeBgClr() {
      let body = document.body;
      if (WhiteBg) {
        body.style.backgroundColor = "darkgreen";
      } else {
        body.style.backgroundColor = "white";
      }
      WhiteBg = !WhiteBg;
    }
    ChangeBgColour.addEventListener("click", changeBgClr);
