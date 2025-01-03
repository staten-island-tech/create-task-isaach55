import "../CSS/style.css";

const vector1 = [1, 2, 3];
const vector2 = [2, 3, 4];

const DOMSelectors = {
  vectorInputContainer: document.getElementById("vectorInputContainer"),
  vectorInput: document.getElementById("vectorInput"),
  submitVector: document.getElementById("submitButton"),
  clearButton: document.getElementById("clearButton"),
  startButton: document.getElementById("startButton"),
};

let vectorArray = [];
let maxLength = "";
let canOrthogonalize = false;
console.log(vectorArray);

function check(vectorString) {
  try {
    let vectorJS = JSON.parse(vectorString);
  } catch (error) {
    console.log("not valid JS!");
    DOMSelectors.vectorInput.value = "";
  }
}

DOMSelectors.submitVector.addEventListener("click", (submit) => {
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
    DOMSelectors.vectorInput.value = "";
  } else {
    submit.preventDefault();
    let vectorString = DOMSelectors.vectorInput.value;
    check(vectorString);
    let vectorJS = JSON.parse(vectorString); //User inputs as a string, converts into javascript
    if (maxLength == vectorJS.length && maxLength != vectorArray.length) {
      console.log(vectorJS);
      vectorArray.push(vectorJS);
      console.log(vectorArray);
      maxLength = vectorJS.length;
      console.log("max length =", maxLength);
    } else {
      if (maxLength != vectorJS.length) {
        console.log("not the right length");
      } else {
        console.log("too many vectors");
      }
      //error message inserted into html
    }
    DOMSelectors.vectorInput.value = "";
  }
});

DOMSelectors.clearButton.addEventListener("click", (clearVectors) => {
  vectorArray = [];
  console.log(vectorArray);
});

//ADD VECTORS 1 at a time, number of vectors needs to bne equal to dimension of vector, check dimension of vector by iterating thru values until  breaking when no value

//submit button iterates and makes sure length of all values is same YIPPIEEE

function createVectorArray(vectors) {}

function dotProduct(vector1, vector2) {
  if (vector1.length == vector2.length) {
    let dotProduct = 0;
    for (let i = 0; i < vector1.length; i++) {
      dotProduct = dotProduct + vector1[i] * vector2[i];
    }
    return dotProduct;
  }
}

function gramSchmidt(vectorArray) {}

console.log(dotProduct(vector1, vector2));
