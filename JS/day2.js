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

const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

function getNumType(data, arr){
  for(key in data){
    if(typeof data[key] === 'object'){
      for(key2 in data[key]){
        if(typeof data[key][key2] === 'number'){
          arr.push(key2);
        }
      }
    }
  }
}

var arr = [];
getNumType(data, arr);
console.log(arr);

// #practice 2

const data2 = [{
	"id": 1,
	"name": "Yong",
	"phone": "010-0000-0000",
	"type": "sk",
	"childnode": [{
		"id": 11,
		"name": "echo",
		"phone": "010-0000-1111",
		"type": "kt",
		"childnode": [{
				"id": 115,
				"name": "hary",
				"phone": "211-1111-0000",
				"type": "sk",
				"childnode": [{
					"id": 1159,
					"name": "pobi",
					"phone": "010-444-000",
					"type": "kt",
					"childnode": [{
							"id": 11592,
							"name": "cherry",
							"phone": "111-222-0000",
							"type": "lg",
							"childnode": []
						},
						{
							"id": 11595,
							"name": "solvin",
							"phone": "010-000-3333",
							"type": "sk",
							"childnode": []
						}
					]
				}]
			},
			{
				"id": 116,
				"name": "kim",
				"phone": "444-111-0200",
				"type": "kt",
				"childnode": [{
					"id": 1168,
					"name": "hani",
					"phone": "010-222-0000",
					"type": "sk",
					"childnode": [{
						"id": 11689,
						"name": "ho",
						"phone": "010-000-0000",
						"type": "kt",
						"childnode": [{
								"id": 116890,
								"name": "wonsuk",
								"phone": "010-000-0000",
								"type": "kt",
								"childnode": []
							},
							{
								"id": 1168901,
								"name": "chulsu",
								"phone": "010-0000-0000",
								"type": "sk",
								"childnode": []
							}
						]
					}]
				}]
			},
			{
				"id": 117,
				"name": "hong",
				"phone": "010-0000-0000",
				"type": "lg",
				"childnode": []
			}
		]
	}]
}]

function find(){
  data2.forEach(function(i){
    if(i.type == "sk"){
      arr2.push(i.name);
    }
    if(i.childnode){
      find(i.childnode);
    }
  })
}
var arr2 = [];
find();
console.log(arr2);
