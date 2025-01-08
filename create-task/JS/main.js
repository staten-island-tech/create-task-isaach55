import "../CSS/style.css";

const vector1 = [1, 2, 3];
const vector2 = [2, 3, 4];

const DOMSelectors = {
  vectorInputContainer: document.getElementById("vectorInputContainer"),
  vectorInput: document.getElementById("vectorInput"),
  submitVector: document.getElementById("submitButton"),
  clearButton: document.getElementById("clearButton"),
  startButtonContainer: document.getElementById("startButtonContainer"),
  vectorDisplay: document.getElementById("vectorDisplay"),
  maxLengthText: document.getElementById("maxLengthText"),
  statusBox: document.getElementById("statusBox"),
};

let vectorArray = [];
let maxLength = "";
console.log(vectorArray);

DOMSelectors.submitVector.addEventListener("click", (submit) => {
  DOMSelectors.statusBox.innerHTML = "";
  if (vectorArray.length == 0) {
    submit.preventDefault();
    let vectorString = DOMSelectors.vectorInput.value;
    console.log(vectorString);
    check(vectorString);
    let vectorJS = JSON.parse(vectorString); //User inputs as a string, converts into javascript
    console.log(vectorJS);
    vectorArray.push(vectorJS);
    console.log(vectorArray);
    maxLength = vectorJS.length;
    console.log("max length =", maxLength);
    DOMSelectors.vectorDisplay.insertAdjacentHTML(
      "beforeend",
      `<p>[${vectorJS}]</p>`
    );
    DOMSelectors.maxLengthText.insertAdjacentHTML(
      "afterbegin",
      `<p>Length of inserted vectors should be: ${maxLength}</p>`
    );
    DOMSelectors.vectorInput.value = "";
  } else {
    submit.preventDefault();
    let vectorString = DOMSelectors.vectorInput.value;
    check(vectorString);
    let vectorJS = JSON.parse(vectorString); //User inputs as a string, converts into javascript
    if (maxLength == vectorJS.length && maxLength != vectorArray.length) {
      DOMSelectors.vectorDisplay.insertAdjacentHTML(
        "beforeend",
        `<p>[${vectorJS}]</p>`
      );
      console.log(vectorJS);
      vectorArray.push(vectorJS);
      console.log(vectorArray);
      maxLength = vectorJS.length;
      console.log("max length =", maxLength);
    } else if (maxLength != vectorJS.length) {
      console.log("not the right length");
      insertStatus("Not the right vector length!");
    }
  }
  if (maxLength == vectorArray.length) {
    insertStatus("Right amount of vectors to perform orthogonalization!");
    //need to fix, if u add too many vectorts it makes multiple buttons
    DOMSelectors.startButtonContainer.insertAdjacentHTML(
      "afterbegin",
      `<button id = "startButton">Perform Orthogonalization</button>`
    );
    document.getElementById("startButton").addEventListener("click", () => {
      gramSchmidt(vectorArray);
      clearAll();
    });
  }
  DOMSelectors.vectorInput.value = "";
});

DOMSelectors.clearButton.addEventListener("click", () => {
  vectorArray = [];
  clearAll();
});

function check(vectorString) {
  try {
    JSON.parse(vectorString);
  } catch (error) {
    insertStatus("Not valid JS! Enter in the form of a matrix.");
    DOMSelectors.vectorInput.value = "";
  }
}

function insertStatus(text) {
  DOMSelectors.statusBox.innerHTML = "";
  DOMSelectors.statusBox.insertAdjacentHTML("afterbegin", `<p>${text}</p>`);
}

function dotProduct(vector1, vector2) {
  let dotProduct = 0;
  for (let i = 0; i < vector1.length; i++) {
    dotProduct = dotProduct + vector1[i] * vector2[i];
  }
  return dotProduct;
}

function gramSchmidt(array) {
  let orthoBasis = [];
  orthoBasis.push(array[0]);
  console.log(orthoBasis);
  for (let i = 1; i < array.length; i++) {}
}

function clearAll() {
  DOMSelectors.statusBox.innerHTML = "";
  DOMSelectors.vectorInput.value = "";
  DOMSelectors.maxLengthText.innerHTML = "";
  DOMSelectors.vectorDisplay.innerHTML = "";
  DOMSelectors.startButtonContainer.innerHTML = "";
  vectorArray = [];
  maxLength = "";
}

console.log(dotProduct(vector1, vector2));
