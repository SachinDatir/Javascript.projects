//js functions
//numbers,boolean,string,array
//functions,user defined ,maps,set

//function declaration
function addition(x,y){
    return x+y
}
let a = addition(12,45)
console.log(a)

//function expression
let addition2 = function(x,y){
    return x+y
}
let b = addition2(12,56)
console.log(b)

//arrow function
let addition3 = (x,y)=>{
    return x+ y 
}
let c = addition3(56,78)
console.log(c)

let addition4 = (x,y)=>x+ y
let d = addition4(76,89)
console.log(d)

//type as parameter 
//type as return

//number 
function add(x,y){
    return x+y
}
let s = add(78,89)
console.log(s)

//boolean
//as parameter

function canDrive(flag){
    if(flag){
        console.log('you can drive')
    }
    else{
        console.log('you cannot drive')
    }
}
canDrive(false)


function isEqual(x,y){
    if(x==y){
        return true
    }
    else{
        return false
    }
}
let v = isEqual(6,6)
console.log(v)

//string as parameter 
//string as return type
function calLength(word){
    if(word.length>=6){
        return "hello"
    }
    else{
        return "bye"
    }
}
let n = calLength("sachin")
console.log(n)


//array as parameter 
//array as return type
let transfer = [11,22,33,44,55,77,88]
function firstFive(arr){
    let nn = arr.slice(1,5)
    return nn
}
let rr = firstFive(transfer)
console.log(rr)

//object as parameter
//obj as return type
 let info = {
     firstName:"sachin",
     lastName:"datir"
 }
 function updateProperty(obj){
     obj.firstName = "rahul"
     return obj 
 }
 let ff = updateProperty(info)
 console.log(ff)
 console.log(ff.firstName)

 //boolean as aparameter and return
function isDrive(flag){
    if(flag){
        console.log('you can drive')
        return true 
    }
    else{
        console.log('you cannot drive')
        return false 
    }
}
let r = isDrive(true)
console.log(r)