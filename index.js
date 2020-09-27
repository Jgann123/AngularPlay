"use strict";
var Person = /** @class */ (function () {
    function Person(first, last, age, eyecolor) {
        this.first = first;
        this.last = last;
        this.age = age;
        this.eyecolor = eyecolor;
    }
    return Person;
}());
var myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);
