const DOMSelectors = {
  button: document.getElementById("rebrand"),
  button1: document.getElementById("blue"),
  button2: document.getElementById("green"),
  button3: document.getElementById("red"),
  button4: document.getElementById("brown"),
  button5: document.getElementById("orange"),
  button6: document.getElementById("grey"),
  button7: document.getElementById("black"),
  button8: document.getElementById("yellow"),
  button9: document.getElementById("purple"),
  button10: document.getElementById("classic"),
  button11: document.getElementById("reboot"),
  button12: document.getElementById("big"),
  button13: document.getElementById("medium"),
  button14: document.getElementById("small"),
  button15: document.getElementById("tiny"),
  button16: document.getElementById("steam engine"),
  button17: document.getElementById("human"),
  button18: document.getElementById("road vehicles"),
  box: document.getElementById("boxarea"),
};

export { DOMSelectors };

DOMSelectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("rebrandlight")) {
    document.body.classList.add("rebranddark");
    document.body.classList.remove("rebrandlight");
  } else {
    document.body.classList.add("rebranddark");
    document.body.classList.remove("rebrandlight");
  }
});
