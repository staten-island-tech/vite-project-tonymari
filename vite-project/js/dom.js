const DOMSelectors = {
  button: document.getElementById("rebrand"),
  button1: document.getElementById("blue"),
  button2: document.getElementById("green"),
  button3: document.getElementById("grey"),
  button4: document.getElementById("red"),
  button5: document.getElementById("black"),
  button6: document.getElementById("brown"),
  button7: document.getElementById("orange"),
  button8: document.getElementById("classic"),
  button9: document.getElementById("reboot"),
  button10: document.getElementById("big"),
  button11: document.getElementById("medium"),
  button12: document.getElementById("little"),
  button13: document.getElementById("edible"),
  button14: document.getElementById("all"),
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
