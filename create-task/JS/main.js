import "../CSS/style.css";

const vector1 = [1, 2, 3];
const vector2 = [2, 3, 4];

const DOMSelectors = {
  vectorInputContainer: document.getElementById("vectorInputContainer"),
  vectorInput: document.getElementById("vectorInput"),
  submitVector: document.getElementById("submit"),
  startButton: document.getElementById("submitButton"),
};

let vectorArray = [];
console.log(vectorArray);

DOMSelectors.submitVector.addEventListener("click", (event) => {
  event.preventDefault();
  let vectorString = DOMSelectors.vectorInput.value;
  console.log(vectorString);
  let vectorJS = JSON.parse(vectorString); //User inputs as a string, converts into javascript
  console.log(vectorJS);
  vectorArray.push(vectorJS);
  console.log(vectorArray);
  DOMSelectors.vectorInput.value = "";
});

//ADD VECTORS 1 at a time, number of vectors needs to bne equal to dimension of vector, check dimension of vector by iterating thru values until  breaking when no value

//submit button iterates and makes sure length of all values is same YIPPIEEE

function createVectorArray() {}

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
