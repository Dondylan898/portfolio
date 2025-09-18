/*document.querySelector(".cancel").addEventListener("click", toggleMenu);

function toggleMenu() {
    const dropdown = document.querySelector(".dropdown");
    const hamburg = document.querySelector(".hamburg");
    const cancel = document.querySelector(".cancel");

    if (dropdown.classList.contains("active")) {
        dropdown.classList.remove("active");
        hamburg.classList.remove("hidden");
        cancel.classList.add("hidden");
    } else {
        dropdown.classList.add("active");
        hamburg.classList.add("hidden");
        cancel.classList.remove("hidden");
    }
}

document.querySelector(".hamburg").addEventListener("click", toggleMenu);*/
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  const hamburgIcon = document.querySelector(".hamburg");
  const cancelIcon = document.querySelector(".cancel");

  navbar.classList.add("active");         // Slide dropdown in
  hamburgIcon.style.display = "none";     // Hide ☰
  cancelIcon.style.display = "block";     // Show ✖
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  const hamburgIcon = document.querySelector(".hamburg");
  const cancelIcon = document.querySelector(".cancel");

  navbar.classList.remove("active");      // Slide dropdown out
  hamburgIcon.style.display = "block";    // Show ☰
  cancelIcon.style.display = "none";      // Hide ✖
}

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "WEBTISE"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;



  function showProfile(type) {
    const codeSection = document.getElementById("code-profile");
    const civilSection = document.getElementById("civil-profile");

    if (type === "code") {
      codeSection.style.display = "block";
      civilSection.style.display = "none";
    } else {
      codeSection.style.display = "none";
      civilSection.style.display = "block";
    }
  }

