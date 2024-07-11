// //non-primive data type (object) [type nnssbbu]
const item = {
    "tushar": true,
    "ajay": false,
    "rushi": 23, 
    "vaibhav": 2
}
console.log(item["tushar"])
console.log(item["ajay"])


//primive data type
let a = null;
let b = 45;
let c = "string"
let d = Symbol
let e 
let f = BigInt("565")
let g = true;
console.log(a,b,c,d,e,f,g)
// note-type konta aaahe te mahit mkrnyasathi typeof use
console.log(typeof (b))


// que.  create a variable of type string and try to add a number to it
let h = "tushar"
let i = 24
console.log(h+i)


// que.  type of operator to find the data type string
let j="tushar"
let k=2
console.log(typeof(j+k))


//que.   create const object in javascript can use change it to hold a number
const l={
    name:"tushar",
    std:10,
    section:1,
    isprinciple:false
}
console.log(l)
console.log(l["name"])


//que.  try to add a new key to the const object 
const l1={
    name:"tushar",
    std:10,
    section:1,
    isprinciple:false
}
l1['friends']="vishal"// add krnyasathi
l1['name']="ajay"//change krnyaathi( )

console.log(l1)
console.log(l1["std"])


// que. write a js program to creat a word meaning dictionary of 5 wold
const dict={
    hot:'is a hot',
    cool:'is a cool',
    rowdy:'is a rowdy'
}
console.log(dict.cool)
// or
console.log(dict["hot"])


