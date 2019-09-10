var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function(){
  console.log(this.responseText);
  var jsonobj = JSON.parse(this.responseText);
  console.log(typeof jsonobj); // jsonobj
});

oReq.open("GET", "./json.txt");
oReq.send();
