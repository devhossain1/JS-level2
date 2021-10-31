
function calculateAge(birthYear){
    return 2021-birthYear;
}
let johnAge=calculateAge(1992);
console.log(johnAge);

function untilRetirement(year, firstName){
    let age = calculateAge(year);
    let retirement = 60-age;
    if(retirement>0){
        console.log(firstName + ' retires in ' + retirement +' years');
    }else{
        console.log( firstName +' is already retired');
    }
    

}
untilRetirement(1992, 'hossain');
untilRetirement(1980, 'john');
untilRetirement(1960, 'karim');

//function expression
var whatDoYouDo = function(job,firstName){
    switch(job){
      case 'teacher':
          return firstName+ ' is a good teacher';
      case 'driver':
          return firstName + ' is a good driver';
      case 'designer':
          return firstName + 'is the best designer';       
      default:
          return firstName + 'does something else';
    }
}
console.log(whatDoYouDo('teac', 'john'));

function tipCalculator(bill){
    let percentage;
    if(bill<50){
        percentage = .20;
    }else if(bill >= 50 && bill<200){
        percentage=.15;
    }else{
        percentage = .1;
    }
    return percentage * bill;
}

var bills= [124,48,268];
let tips =[tipCalculator(bills[0]),
          tipCalculator(bills[1]),
          tipCalculator(bills[2])];

let finalValue =[bills[0] + tips[0],
                bills[0] + tips[0],
                bills[0] + tips[0]];              
console.log(tips, finalValue);

// var john = {
//    firstName:'john',
//    lastName:'Doe',
//    birthYear:1992,
//    calcAge: function(){
//        this.age= 2021-this.birthYear;
//    }
// }
// john.calcAge();
//console.log(john);

//chalange for object
var john = {
    fullName:'john doe',
    mass:75,
    height:1.70,
    calcBMI:function(){
        this.bmi= this.mass/(this.height*this.height);
        return this.bmi;
    }
 }

 var mark = {
    fullName:'mark doe',
    mass:95,
    height:1.75,
    calcBMI:function(){
        this.bmi= this.mass/(this.height*this.height);
        return this.bmi;
    }
 }

// john.calcBMI();
// mark.calcBMI();


if(john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName + " has a higher BMI of " + john.bmi);
}else if(mark.bmi > john.bmi){
    console.log(john.fullName + " has a higher BMI of " + mark.bmi); 
}else{
    console.log('they have the same BMI');
}
let johna = ['john', 'smith', 1234, true, 'blue'];
// for(let i=0; i<johna.length; i++){
//     if( typeof johna[i] !=='string') continue;
//     console.log(johna[i]);
// }

for(let i=johna.length-1; i>=0; i--){
    console.log(johna[i]);
}