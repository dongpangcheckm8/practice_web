var a = [1, 2, 3, "hello", null, true, [[{1:0}]]];

console.log(a.length);

// 배열에 자유롭게 원소를 추가할 수 있다
var b = [4];
b[1000] = 3;
console.log(b.length);
console.log(b[500]);

var c = [4];
c.push(5);
console.log(c.length);

[1, 2, 3, 4].indexOf(3);  // 2
[1, 2, 3, 4].concat(5, 6); // 1,2,3,4,5,6

var origin = [1, 2, 3, 4];
// spread operator (새로운 배열값을 반환)
var changedArray = [...origin, 2, 3]; // 1,2,3,4,2,3
console.log(origin, changedArray); // 1,2,3,4 / 1,2,3,4,2,3

changedArray.forEach(function(v, i, o) {
  console.log(v);
});

var mapped = changedArray.map(function(v){
  return v * 2; // changedArray의 원소를 돌면서, 값을 변경시킨 후 새로운 배열로 만들어서 반환
});

console.log(mapped, changedArray);
