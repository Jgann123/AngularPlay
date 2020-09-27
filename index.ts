

class Person {
  first: String;
  last: String;
  age: Number;
  eyecolor: String;


  constructor(first: String, last: String, age: Number, eyecolor: String) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.eyecolor = eyecolor;

  }

}

var myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather);