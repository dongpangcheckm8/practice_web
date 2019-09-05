// javascript object

var obj = {name : "dongpang", age : 28};

var myFriend = {key : "value", addition : [
  {name : 'codesquad'}, {age : 2}
]};
//console.log(myFriend.key);
//console.log(myFriend["key"]);
//console.log(myFriend.addition[0].name);

// find values in Obj
for(value in myFriend){
  //console.log(value);
}

// find keys in Obj
for(key in myFriend){
  //console.log(myFriend[key]);
}

// return keys as array
//console.log(Object.keys(myFriend));

Object.keys(myFriend).forEach(function(v){
  //console.log(myFriend[v]);
});

// #practice 1
// url of sample code is invalid
