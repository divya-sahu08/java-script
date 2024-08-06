const score=1000
console.log( score)//1000

const anothernumber = new Number(1345.678)
console.log( anothernumber) //[Number: 1000]
console.log(typeof anothernumber) //object


console.log(anothernumber.toFixed(1))//1345.7
console.log(anothernumber.toFixed(2))//1345.68
console.log(anothernumber.toPrecision(5))//1345.7


const hundreds =1000000000000000
console.log(hundreds.toLocaleString())//1,000,000,000,000,000
console.log(hundreds.toLocaleString('en-IN'))//1,00,00,00,00,00,00,000


/* ********    MATHS   ********** */

console.log(Math)
console.log(Math.abs(-5))//   5 (always give positive value) 
console.log(Math.round(5.6)) //6 (roundoff the value)
console.log(Math.ceil(4.1)) // 5 (give heigher value)
console.log(Math.floor(3.9))//3 (gives lower value)
console.log(Math.min(2,3,4,5,8,9)) //2
console.log(Math.max(9,5,7,9,8)) //9


console.log(Math.random()) //Returns a pseudorandom number between 0 and 1
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10 + 1))


const min=1
const max=6
console.log(Math.floor(Math.random()*(max-min +1) )+ min)

