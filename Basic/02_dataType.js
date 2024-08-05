"use strict "
let a=1 // a is a number
a="hello"//a is a string
a=true //a is a boolean
console.log(typeof a)//  boolean (last re-assigned value )

let b;
console.log(typeof b)// undefined.

let c=null
console.log(typeof c)//The type of null is an object

let d="null"
console.log(typeof d)// String

console.log(c +" "+ d) /*implicit type conversion 
                      output(null null)*/

let e=1
console.log(typeof e) //Number


/*NON-PREMETIVE DATATYPE 
        Array ,Object, Function */

        //ARRAY
        const A=["apple","banana","orange"]

        //Object
        let myObj = {
            name:Divya,
            age:20,
        }

        //Function
        const myfunction=function(){
            console.log("Hello World");
        }





