/* Stack memory (premptive data type)  Heap(non premetive) */

//stack(copy of )
let myname="Divya"

let anothername=myname
anothername="Vidya"

console.log(myname)//Divya
console.log(anothername)//Vidya

//Heap(direct Refrence)

let userone ={
    name: "Aman",
    email: "@gmail.com"
}

let usertwo=userone

usertwo.name = "Gupta"

console.log(userone.name)//Gupta
console.log(usertwo.name)//Gupta

