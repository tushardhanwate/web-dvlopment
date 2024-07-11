/*  //for loops ||
const prompt = require("prompt-sync")();
let sum = 0
let n=prompt("enter the value of n")
n=Number.parseInt(n)

for (let i=0; i<n; i++){
sum += (i+1)
    console.log((i+1))
}
    console.log("sum of first" +n+"nature number is "+sum)
*/

   // for in  loops||


   let obj = {
    tushar:41,
    ajay:42,
    vishal:43,
    rushi:44,
    vaibhav:45
   }
   for(let a in obj)
   {
    console.log(" show the "+a+ "  markes  "+ obj[a])
   }