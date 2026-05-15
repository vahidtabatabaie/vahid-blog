const notes = [
  "Good systems do not shout. They quietly make better choices easier.",
  "A useful essay should leave the reader with a sharper instrument.",
  "The best interfaces respect attention as if it were expensive.",
  "Build the thing small enough that you can still hear what it wants to become."
];

const noteElement = document.querySelector("#rotating-note");
let noteIndex = 0;

window.setInterval(() => {
  noteIndex = (noteIndex + 1) % notes.length;
  noteElement.animate(
    [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(6px)" }
    ],
    { duration: 160, easing: "ease-out" }
  ).onfinish = () => {
    noteElement.textContent = notes[noteIndex];
    noteElement.animate(
      [
        { opacity: 0, transform: "translateY(-6px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 220, easing: "ease-out" }
    );
  };
}, 4200);
