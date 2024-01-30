// how to pass parameter in function 
interface Person {
  name: string;
  age: number;
}

export function greet(person: Person) : string {
  return "hello " + person.name + " glad to see you are " + person.age + " years old";
}

console.log(greet({name: " ashutosh", age: 21}))
