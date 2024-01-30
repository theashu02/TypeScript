interface personinterface {
  name: string;
  age: number;
}

class Person implements personinterface {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  greet(){
    return "hi " + this.name;
  }
}

const personobj = new Person("John", 30);
console.log(personobj.greet());
