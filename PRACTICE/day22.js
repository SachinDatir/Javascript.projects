//object literal

let sachin = {
    firstname: "sachin",
    lastname: "datir",
    age: 22,
    rollNo: 10,
    display: function () {
        console.log('sachin d')
    }
}
sachin.display()

//function constructor
let Person = function (fn, ln, ag, rn) {
    this.firstName = fn,
        this.lastName = ln,
        this.age = ag,
        this.rollno = rn
    this.display = function () {
        console.log(this.firstName, this.lastName)
    }
}

let skd = new Person('sachin1', 'datir2', 223, 103)
let skd1 = new Person('sachin3', 'datir4', 256, 101)
let skd2 = new Person('sachin4', 'datir44', 223, 100)
let skd3 = new Person('sachin5', 'datir5', 225, 102)
let skd4 = new Person('sachin7', 'datir7', 223, 106)
//console.log(skd)

let names = [skd,skd1,skd2,skd3,skd4]
console.log(names)

names.forEach(function(el){
    el.city = "akole"
})
console.log(names)
 
let Person2 = (function(fn,ln){
    this.firstName = fn,
    this.lastName = ln
    this.display = function(){
        console.log(this.firstName + this.lastName)
    }
})
let ram = new Person2("Ram","sharma")
let shyam = new Person2("shyam","verma")
// console.log(ram)
// console.log(shyam)
 ram.display()
 shyam.display()

console.log(ram._proto_===Person2.prototype)
console.log(shyam._proto_===Person2.prototype)