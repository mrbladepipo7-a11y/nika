const enterBtn = document.getElementById("enterBtn");
const storyBtn = document.getElementById("storyBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const signalBtn = document.getElementById("signalBtn");
const terminalScreen = document.getElementById("terminalScreen");
const choiceBtn = document.getElementById("choiceBtn");
const choiceText = document.getElementById("choiceText");

enterBtn.addEventListener("click", () => {
  document.getElementById("carriage").scrollIntoView({behavior:"smooth"});
});

storyBtn.addEventListener("click", () => modal.classList.add("open"));
closeModal.addEventListener("click", () => modal.classList.remove("open"));
modal.addEventListener("click", e => {
  if(e.target === modal) modal.classList.remove("open");
});

signalBtn.addEventListener("click", () => {
  signalBtn.disabled = true;
  signalBtn.innerHTML = "DECODING... <span>•••</span>";

  const lines = [
    "> RECEIVING LOW-FREQUENCY SIGNAL",
    "> 07:42:13",
    "> PASSENGER DETECTED",
    "> LOCATION: BEYOND THE LINE",
    "> MESSAGE: “DON'T LOOK BEHIND YOU.”"
  ];

  lines.forEach((line, index) => {
    setTimeout(() => {
      const p = document.createElement("p");
      p.textContent = line;
      p.style.color = index === lines.length - 1 ? "#b8ff57" : "#91a48c";
      terminalScreen.appendChild(p);
      terminalScreen.scrollTop = terminalScreen.scrollHeight;
    }, 500 * (index + 1));
  });

  setTimeout(() => {
    signalBtn.innerHTML = "SIGNAL RECEIVED <span>✓</span>";
  }, 3000);
});

choiceBtn.addEventListener("click", () => {
  const staying = choiceBtn.textContent.includes("STAY");
  choiceBtn.textContent = staying ? "I WOULD LEAVE" : "I WOULD STAY";
  choiceText.textContent = staying
    ? "The doors close at 07:43."
    : "Then the line continues.";
});

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const heroImage = document.querySelector(".hero-image");
  if(heroImage) heroImage.style.transform = `scale(1.05) translateY(${y * 0.08}px)`;
});

document.addEventListener("keydown", e => {
  if(e.key === "Escape") modal.classList.remove("open");
});
