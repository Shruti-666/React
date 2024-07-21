//basic understanding of detsructuring
let arr = [3, 5, 6, 4, 5, 7, 8];
let [a, , , ...rest] = arr;
console.log(a, rest);
