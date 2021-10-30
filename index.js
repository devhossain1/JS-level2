// var firstName, lastName;
// firstName= "hossain";
// lastName = "ahmed"

// //alert(`${firstName} ${lastName} is the full name`);
// var lastName= prompt('what is the last name');
// console.log(firstName + ' ' + lastName);

let massmark = 78;
let heightmark = 1.69;
let massjohn = 92;
let heightjohn = 1.92;
let bmiMark = massmark/(heightmark*heightmark);
let bmiJohn = massjohn/(heightjohn*heightjohn);
console.log(bmiMark, bmiJohn);
let hegherThan = bmiMark>bmiJohn;
console.log(`is it true or false? = ${hegherThan}`);

//ternary operator
var age=18;

let drink = age >= 18 ? 'he is adult' : 'he is boy'
console.log(drink);

var job = "driver";
switch(job){
    case 'teacher':
        console.log(`john is a good teacher`);
        break;
    case 'driver':
        console.log(`john is a good driver`);
        break; 
    case 'labour':
        console.log(`john is a good labour`);
        break;
    default:
        console.log("He does anather job");        
}

switch(true){
    case age < 13:
        console.log("john is a boy"); 
        break;
    case age >=13 && age<20:
        console.log("john is a adult");
        break;
    case age>=20 && age<30:
        console.log("john is a young");
        break;
    default:
        console.log('he is anather man');    
}

var height;
height = 22;
if(height || height===0){
    console.log("variable is defined");
}else{
    console.log("variable is not defined");
}

let johnScore = (15+20+45)/2;
let mikeScore = (25+30+45)/2;
let maryScore = (35+50+45)/2;
console.log(johnScore,mikeScore,maryScore);
if(mikeScore>johnScore && mikeScore>maryScore){
    console.log(` mike ${mikeScore} is winner`);
}else if(maryScore>johnScore && maryScore>mikeScore){
    console.log(` mary ${maryScore} is winner`);
}else{
    console.log('no one can win');
}