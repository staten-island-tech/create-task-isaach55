import "../CSS/style.css";

const vector1 = [1, 2, 3];
const vector2 = [2, 3, 4];

const DOMSelectors = {
  vectorInputContainer: document.getElementById("vectorInputContainer"),
  vectorInput: document.getElementById("vectorInput"),
  submitVector: document.getElementById("submitButton"),
  clearButton: document.getElementById("clearButton"),
  startButton: document.getElementById("startButton"),
  vectorDisplay: document.getElementById("vectorDisplay"),
  maxLengthText: document.getElementById("maxLengthText"),
  statusBox: document.getElementById("statusBox"),
};

let vectorArray = [];
let maxLength = "";
let canOrthogonalize = false;
console.log(vectorArray);

function check(vectorString) {
  try {
    JSON.parse(vectorString);
  } catch (error) {
    console.log("not valid JS!");
    DOMSelectors.vectorInput.value = "";
  }
}

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
    //Insert the HTML for the orthogonalization here!
  }
  DOMSelectors.vectorInput.value = "";
});

DOMSelectors.clearButton.addEventListener("click", (clearVectors) => {
  vectorArray = [];
  DOMSelectors.statusBox.innerHTML = "";
  DOMSelectors.vectorInput.value = "";
  DOMSelectors.maxLengthText.innerHTML = "";
  DOMSelectors.vectorDisplay.innerHTML = "";
});

function insertStatus(text) {
  DOMSelectors.statusBox.innerHTML = "";
  DOMSelectors.statusBox.insertAdjacentHTML("afterbegin", `<p>${text}</p>`);
}

DOMSelectors.startButton.addEventListener("click", (displayResults) => {
  DOMSelectors.statusBox.innerHTML = "";
  DOMSelectors.vectorInput.value = "";
  DOMSelectors.maxLengthText.innerHTML = "";
  DOMSelectors.vectorDisplay.innerHTML = "";
  gramSchmidt(vectorArray);
});

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

console.log(dotProduct(vector1, vector2));
