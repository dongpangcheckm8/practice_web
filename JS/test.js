var result = [1, 2, 3, 4];
var arr = [];
result.forEach(function(v, i){
  console.log(v);
  return arr.push(v);
});
console.log(arr);
