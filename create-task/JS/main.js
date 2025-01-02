import "../CSS/style.css";

const vector1 = [1, 2, 3];
const vector2 = [2, 3, 4];

const DOMSelectors = {
  vectorInputContainer: document.getElementById("vectorInputContainer"),
  vectorInput: document.getElementById("vectorInput"),
  submitVector: document.getElementById("submit"),
  clearButton: document.getElementById("clearButton"),
  startButton: document.getElementById("submitButton"),
};

let vectorArray = [];
console.log(vectorArray);

DOMSelectors.submitVector.addEventListener("click", (submit) => {
  if (vectorArray.length == 0) {
    submit.preventDefault();
    let vectorString = DOMSelectors.vectorInput.value;
    console.log(vectorString);
    let vectorJS = JSON.parse(vectorString); //User inputs as a string, converts into javascript
    console.log(vectorJS);
    vectorArray.push(vectorJS);
    console.log(vectorArray);
    console.log("max length =", vectorJS.length);
    DOMSelectors.vectorInput.value = "";
  }
});

/*   submit.preventDefault();
  let vectorString = DOMSelectors.vectorInput.value;
  console.log(vectorString);
  let vectorJS = JSON.parse(vectorString); //User inputs as a string, converts into javascript
  console.log(vectorJS);
  vectorArray.push(vectorJS);
  console.log(vectorArray);
  if (vectorArray.length == 1) {
    let vectorLength = vectorJS.length;
    console.log("max length: ", vectorLength);
  }
  DOMSelectors.vectorInput.value = "";*/

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
