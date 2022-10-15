let Person = function(fn,ln,ag,rn){
    this.firstName = fn
    this.lastName = ln 
    this.age  = ag
    this.rn = rn
    this.display =function(){
        console.log(this.firstName , this.lastName)
    }
}

let amol2 = new Person("amol2","rao2",13,44)
let amol3 = new Person("amol3","rao2",13,44)
let amol4 = new Person("amol4","rao2",13,44)
let amol5 = new Person("amol5","rao2",13,44)
let amol6 = new Person("amol6","rao2",13,44)
// console.log(amol2)
let students= [amol2,amol3,amol4,amol5,amol6]
console.log(students)