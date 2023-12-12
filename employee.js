// Your code here

class Employee{

    consturctor(name ,  occupation)
    {
        this.name = name;
        this.occupation = occupation;
    }

    sayName()
    {
        console.log(`${this.name} says hello`);
    }

    sayOccupation()
    {
       console.log(`Employee's name and occupation like so: ${this.name} is a ${this.occupation}`);
    }

}

module.exports = Employee;
