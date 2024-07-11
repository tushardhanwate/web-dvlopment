

const prompt = require("prompt-sync")();
const alert = require("prompt-sync")();


let a = prompt("enter a number: ");
a=Number.parseInt(a)
console.log(typeof a)

if(a<0){
    alert("thiss is in valid age");  // hi condition barobr asn t hi aadhi run hoil

}
else if(a<9){
    alert("you are a  kid  cannot driv"); 
}
else if(a<18 && a>=9){
    alert( "after 18")
}
else{
    alert("above 18" )// pahilya condition run nhi zalya t hi run hoil 
}
console.log("doned")
console.log("you can ", a>18? "not drive":"drive")



