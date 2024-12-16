import "../CSS/style.css";

const vector1 = [1, 2, 3];
const vector2 = [2, 3, 4];

const DOMSelectors = {
  vectorInputContainer: document.getElementById("vectorInputContainer"),
  addVector: document.getElementById("vectorInput"),
};

DOMSelectors.addVector.addEventListener("click", (event) => {
  event.preventDefault();
  array.forEach((element) => {});
});

//ADD VECTORS 1 at a time, number of vectors needs to bne equal to dimension of vector, check dimension of vector by iterating thru values until  breaking when no value

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
