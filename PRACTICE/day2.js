//setting the property value for object at the time of object create
class Person{
    constructor(fl,ag,skl,rn)
    {
        this.fullName=fl
        this.age=ag
        this.skills=skl
        this.rollNo=rn 
    }
}
let skd= new Person('sachin',22,['c++'],11)
let pankaj=new Person('pankaj more',24,['java'],34)
console.log(skd)
console.log(pankaj)