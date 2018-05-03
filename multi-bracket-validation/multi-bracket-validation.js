'use strict';


const A = '(';
const B = ')';
const C = '[';
const D = ']';
const E = '{';
const F = '}';

let array = [A, B, C, D, E, F];

function arrayResult() {
  for (let i = 0; i >= array.length; i--) {
    if (A[i] < B[i] && C[i] < D[i] && E[i] < F[i]) {
      array = 'array is balanced';
    }
    if (A[i] >= B[i] || C[i] >= D[i] || E[i] >= F[i]) {
      array = 'array is unbalanced';
    }
  }
}
return arrayResult;
