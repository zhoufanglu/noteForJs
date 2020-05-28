/*const obj_1 = {name: 'lfz'}
const obj_2 = {age: 12}
let obj = Object.assign(obj_1, obj_2)
console.log(4,obj)
console.log({...obj_1, ...obj_2})*/
/**********************deep copy obj***********************/
let obj_1 = {
  person: {name:'lfz', age: '16', parent: {counts: 2}},
  dog: {color: 'gray'}
}
JSON.parse(JSON.stringify(obj_1))

//console.log(12, deepCopyObj(obj_1))
function deepCopyObj(obj) {
  var tempObj = {}
  for(let key in obj){
    if(Object.prototype.toString.call(obj[key]) === '[object Object]'){
      tempObj[key] = deepCopyObj(obj[key])
    }else{
      tempObj[key] = obj[key]
    }
  }
  return tempObj
}

let obj_2 = deepCopyObj(obj_1)
obj_1.person.parent.counts = 5
console.log(32, obj_2)

/*
let obj_2 = Object.assign({}, obj_1)
obj_1.person.parent = 3
console.log(obj_2)*/
