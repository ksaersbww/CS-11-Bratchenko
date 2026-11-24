const input = document.getElementById("source-text");
const button = document.getElementById("go");
const result = document.getElementById("result-text");

function convert() {
  const text = input.value;
  result.innerHTML = "";
  let addSpace = false;

  for (let i = 0; i < text.length; i++) {
    const letter = text[i];

    if (letter === " ") {
      addSpace = true;
      continue;
    }

    const img = document.createElement("img");

    if (letter >= "A" && letter <= "Z") {
      img.src = "images/" + letter + ".png";
    } else if (letter >= "a" && letter <= "z") {
      img.src = "images/small_" + letter + ".png";
    } else {
      continue;
    }

    if (addSpace) {
      img.style.marginLeft = "30px";
      addSpace = false;
    }

    img.style.setProperty("--anim-delay", i * 0.05 + "s");
    result.appendChild(img);
  }
}

button.addEventListener("click", convert);
