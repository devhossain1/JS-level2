
/*
var Person= function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth= yearOfBirth;
    this.job= job;
}

Person.prototype.calculateAge = function(){
    console.log(2021-this.yearOfBirth);
}

Person.prototype.lastName = 'smith';

var john = new Person('john',1990, 'teacher');
var mark = new Person('mark',1992, 'doctor');
var jane = new Person('jane',1994, 'developer');
john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(mark.lastName);
console.log(jane.lastName);

console.log(john);
console.log(mark);
*/
/*
var personProto = {
    calculateAge:function(){
        console.log(2021-this.yearOfBirth);
    }
};
var john= Object.create(personProto);
john.name='john';
john.yearOfBirth=1993;
john.job = 'teacher';

var jane = Object.create(personProto,{
    name: { value:'jane'},
    yearOfBirth: { value: 1992},
    job: { value: 'teacher'}
});
*/
//primitive and object

//primitive
/*
var a=23;
var b=a;
a=30;
console.log(a);
console.log(b);

//object
var obj1 = {
    name:'john',
    age:24
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
//function
var age = 34;
var obj = {
    name: 'jonas',
    city:'dhaka'
};

function change(a, b){
    a=28;
    b.city='Mirput';
};
change(age, obj);
console.log(age);
console.log(obj.city);
*/

var years = [1990,1986, 1993,2007,1967];
function arrayCalc(arr,fn){
    var arrRes =[];
    for(var i =0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el){
    return 2021-el;
}
function isFullAge(el){
    return el >= 18;
}
function maxHeartRate(el){
    return Math.round(206.9 -(.67 * el));
}
var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages,isFullAge);
var heartRate = arrayCalc(ages,maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(heartRate)

