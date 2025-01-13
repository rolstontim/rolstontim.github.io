// Typing effect
document.addEventListener("DOMContentLoaded", () => {
  const typedText = "Hello, I'm Tim Rolston";
  const typingSpeed = 150; // Speed in ms
  const cursor = document.getElementById("cursor");
  const textElement = document.getElementById("typed-text");
  const subtext = document.getElementById("subtext");

  let index = 0;

  function typeLetter() {
    if (index < typedText.length) {
      textElement.textContent += typedText.charAt(index);
      index++;
      setTimeout(typeLetter, typingSpeed);
    } else {
      cursor.style.display = "none"; // Hide cursor after typing
      fadeInSubtext();
    }
  }

  function fadeInSubtext() {
    subtext.classList.remove("hidden");
  }

  typeLetter();
});
