import "../CSS/style.css";

const vector1 = [1, 2, 3];
const vector2 = [2, 3, 4];

const DOMSelectors {
  vector1button: ,
}

function createVectorArray {

}

function dotProduct(vector1, vector2) {
  if (vector1.length == vector2.length) {
    let dotProduct = 0;
    for (let i = 0; i < vector1.length; i++) {
      dotProduct = dotProduct + vector1[i] * vector2[i];
    }
    return dotProduct;
  }
}

function orthogonalize(vectorArray) {

}

console.log(dotProduct(vector1, vector2));
