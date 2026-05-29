"use strict";
/*
A class can include the following:
Constructor
Properties
Methods
*/
class Person {
    name;
    age;
    workId;
    constructor(name, age, workId) {
        this.name = name;
        this.age = age;
        this.workId = workId;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Work ID: ${this.workId}`);
        console.log("-----Person Class has been initialized------");
    }
}
// Create an instance of the Person class
const person1 = new Person('Aliye', 28, 2005); // person1 is an object of the Person class.
// Call the displayInfo method to show the person's information
person1.displayInfo();
const person2 = new Person("Ahmet", 30, 2006); // person2 is an object of the Person class.
person2.displayInfo();
class Student {
    firstName;
    lastName;
    studentId;
    phoneNumber;
    age;
    constructor(firstName, lastName, studentId, phoneNumber, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentId = studentId;
        this.phoneNumber = phoneNumber;
        this.age = age;
    }
    displayStudentInfo() {
        console.log(`FirstName: ${this.firstName}, LastName: ${this.lastName}, StudentId: ${this.studentId}, PhoneNumber: ${this.phoneNumber}, Age: ${this.age}`);
    }
}
const student1 = new Student("Ayşe", "Yılmaz", 1001, "555-1234", 20);
student1.displayStudentInfo();
const student2 = new Student("Mehmet", "Demir", 1002, "555-5678", 22);
student2.displayStudentInfo();
