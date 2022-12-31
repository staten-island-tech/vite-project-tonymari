import "../styles/style.css";
import { train } from "./trains";
import { DOMSelectors } from "./dom";

train.forEach((el) => {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `
        <div class="sodor">
        <p>${el.name}</p>
        <img class="height" src="${el.img}" alt="add image">
        </div>`
  );
});

const remove = function () {
  document.querySelectorAll(".sodor").forEach((e) => e.remove());
};

const options = {
  getAll: function () {
    document.getElementById("all").addEventListener("click", function () {
      remove();
      train.forEach((el) => {
        console.log(el.name);
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
        <div class="sodor">
        <p>${el.name}</p>
        <img class="height" src="${el.img}" alt="add image">       
        </div>`
        );
      });
    });
  },

  getBlue: function () {
    document.getElementById("blue").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.color.includes("blue"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getGreen: function () {
    document.getElementById("green").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.color.includes("green"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getRed: function () {
    document.getElementById("red").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.color.includes("red"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getBrown: function () {
    document.getElementById("brown").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.color.includes("brown"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getOrange: function () {
    document.getElementById("orange").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.color.includes("orange"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getGrey: function () {
    document.getElementById("grey").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.color.includes("grey"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getBlack: function () {
    document.getElementById("black").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.color.includes("black"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getYellow: function () {
    document.getElementById("yellow").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.color.includes("yellow"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getPurple: function () {
    document.getElementById("purple").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.color.includes("purple"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getClassic: function () {
    document.getElementById("classic").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.era.includes("classic"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getReboot: function () {
    document.getElementById("reboot").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.era.includes("reboot"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getBig: function () {
    document.getElementById("big").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.size.includes("big"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getMedium: function () {
    document.getElementById("medium").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.size.includes("medium"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getSmall: function () {
    document.getElementById("small").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.size.includes("small"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getTiny: function () {
    document.getElementById("tiny").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.size.includes("tiny"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getSteam: function () {
    document.getElementById("steam").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.type.includes("steam"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getHuman: function () {
    document.getElementById("human").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.type.includes("human"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
  getRoad: function () {
    document.getElementById("road").addEventListener("click", function () {
      remove();
      train
        .filter((el) => el.type.includes("road"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="sodor">
          <p>${el.name}</p>
          <img class="height" src="${el.img}" alt="add image">       
          </div>`
          );
        });
    });
  },
};

options.getAll();
options.getBlue();
options.getGreen();
options.getRed();
options.getBrown();
options.getOrange();
options.getGrey();
options.getBlack();
options.getYellow();
options.getPurple();
options.getClassic();
options.getReboot();
options.getBig();
options.getMedium();
options.getSmall();
options.getTiny();
options.getSteam();
options.getHuman();
options.getRoad();
