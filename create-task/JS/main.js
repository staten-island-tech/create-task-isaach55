import "../CSS/style.css";

const DOMSelectors = {
  vectorInputContainer: document.getElementById("vectorInputContainer"),
  vectorInput: document.getElementById("vectorInput"),
  submitVector: document.getElementById("submitButton"),
  clearButton: document.getElementById("clearButton"),
  startButtonContainer: document.getElementById("startButtonContainer"),
  vectorDisplay: document.getElementById("vectorDisplay"),
  maxLengthText: document.getElementById("maxLengthText"),
  statusBox: document.getElementById("statusBox"),
  resultBox: document.getElementById("resultBox"),
};

let vectorArray = [];
let maxLength = "";

DOMSelectors.submitVector.addEventListener("click", (submit) => {
  DOMSelectors.statusBox.innerHTML = "";
  DOMSelectors.resultBox.innerHTML = "";
  DOMSelectors.startButtonContainer.innerHTML = "";
  if (vectorArray.length == 0) {
    submit.preventDefault();
    DOMSelectors.vectorDisplay.innerHTML = "";
    let vectorString = DOMSelectors.vectorInput.value;
    check(vectorString);
    let vectorJS = JSON.parse(vectorString);
    vectorArray.push(vectorJS);
    maxLength = vectorJS.length;
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
    let vectorJS = JSON.parse(vectorString);
    if (maxLength == vectorJS.length && maxLength != vectorArray.length) {
      DOMSelectors.vectorDisplay.insertAdjacentHTML(
        "beforeend",
        `<p>[${vectorJS}]</p>`
      );
      vectorArray.push(vectorJS);
      maxLength = vectorJS.length;
    } else if (maxLength != vectorJS.length) {
      insertStatus("Not the right vector length!");
    }
  }
  if (maxLength == vectorArray.length) {
    insertStatus("Right amount of vectors to perform orthogonalization!");
    DOMSelectors.startButtonContainer.insertAdjacentHTML(
      "afterbegin",
      `<button id="startButton" class="startButton">Perform Orthogonalization</button>`
    );
    document.getElementById("startButton").addEventListener("click", () => {
      let orthoBasis = gramSchmidt(vectorArray);
      let normalBasis = normalize(orthoBasis);
      clearAll();
      DOMSelectors.vectorDisplay.insertAdjacentHTML(
        "beforeend",
        `<p>Orthogonalized vectors:</p>`
      );
      for (let i = 0; i < orthoBasis.length; i++) {
        DOMSelectors.vectorDisplay.insertAdjacentHTML(
          "beforeend",
          `<p>Vector ${i + 1}:</p>
          <p>[${orthoBasis[i]}]</p>`
        );
      }
      DOMSelectors.resultBox.insertAdjacentHTML(
        "beforeend",
        `<p>After normalization:</p>`
      );
      for (let i = 0; i < normalBasis.length; i++) {
        DOMSelectors.resultBox.insertAdjacentHTML(
          "beforeend",
          `<p>Vector ${i + 1}:</p>
          <p>[${normalBasis[i]}]</p>`
        );
      }
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

function scalar(vector, scalar) {
  let result = [];
  for (let i = 0; i < vector.length; i++) {
    result.push(vector[i] * scalar);
  }
  return result;
}

function add(vector1, vector2) {
  let result = [];
  for (let i = 0; i < vector1.length; i++) {
    result.push(vector1[i] + vector2[i]);
  }
  return result;
}

function subtract(vector1, vector2) {
  let result = [];
  for (let i = 0; i < vector1.length; i++) {
    result.push(vector1[i] - vector2[i]);
  }
  return result;
}

function gramSchmidt(array) {
  let orthoBasis = [];
  for (let i = 0; i < array.length; i++) {
    let vector = array[i];
    let proj = [];
    for (let j = 0; j < vector.length; j++) {
      proj.push(0);
    }
    for (let k = 0; k < i; k++) {
      proj = add(
        proj,
        scalar(
          orthoBasis[k],
          dotProduct(vector, orthoBasis[k]) /
            dotProduct(orthoBasis[k], orthoBasis[k])
        )
      );
    }
    orthoBasis.push(subtract(vector, proj));
  }
  return orthoBasis;
}

function normalize(basis) {
  let normalBasis = [];
  for (let i = 0; i < basis.length; i++) {
    let vector = basis[i];
    let squareSum = 0;
    let normalizedVector = [];
    for (let j = 0; j < vector.length; j++) {
      squareSum = squareSum + vector[j] * vector[j];
    }
    let normalizeFactor = Math.sqrt(squareSum);
    for (let k = 0; k < vector.length; k++) {
      normalizedVector.push(vector[k] / normalizeFactor);
    }
    normalBasis.push(normalizedVector);
  }
  return normalBasis;
}

function clearAll() {
  DOMSelectors.statusBox.innerHTML = "";
  DOMSelectors.vectorInput.value = "";
  DOMSelectors.maxLengthText.innerHTML = "";
  DOMSelectors.vectorDisplay.innerHTML = "";
  DOMSelectors.resultBox.innerHTML = "";
  DOMSelectors.startButtonContainer.innerHTML = "";
  vectorArray = [];
  maxLength = "";
}
