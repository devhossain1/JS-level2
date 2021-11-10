
/*
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
*/
/*
function interviewQuestion(job){
    if(job ==="designer"){
        return function(name){
          console.log(name + ', do you explaing the UI design ?');
        }
      
    }else if( job ==='teacher'){
        return function(name){
            console.log('what do you want to teach students,' + name);
        }
    }else{
        return function(name){
            console.log("hello" + name+ ' what do you do');
        }
    }
}

var designerQuestion = interviewQuestion('designer');
var teacherQuestion = interviewQuestion('teacher');

var doctorQuestion = interviewQuestion('doctor');
designerQuestion('john');
teacherQuestion('smith');
teacherQuestion('roy');
teacherQuestion('jonson');

doctorQuestion('mark');
interviewQuestion('designer')('hossain');

// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

(function(){
    var score = Math.random()*10;
    console.log(score >= 5);
})();
//console.log(score);

(function(goodluck){
    var score = Math.random()*10;
    console.log(score >= 5 - goodluck);
})(5);
*/
function retirement(retirementAge){

    return function(yearOfBirth){
        var a = 'years left until retirement';
        var age = 2021-yearOfBirth;
        console.log((retirementAge-age) +a );
    }
}
var retirementUs = retirement(66);
var retirementGer = retirement(65);
retirement(60)(1970);

retirementUs(1990);
retirementGer(1987);
//closures
function interviewQuestion(job){
    return function(name){
        if(job=='teacher'){
            console.log(name + ' can you please teach me ?');
        }else if(job == 'designer'){
            console.log(name + ' can you please explain ui design');
        }else{
            console.log(name + ' what can you please explain ui design');
        }
    }
}
interviewQuestion('teacher')("john");

var john = {
    name:'john',
    age:27,
    job:'teacher',
    presentation:function(style,timeOfDay){
        if(style == 'formal'){
            console.log('good '+ timeOfDay + ' ladies and gentlemen! I \' am ' + this.name + 
            ', I \' m a ' + this.job + ' and I am '+ this.age + ' years old.');
        }else if(style =='friendly'){
            console.log('Hi what\'s up I \'m '+ this.name + 
            ', I \' m a ' + this.job + ' and I am '+ this.age + ' years old. Have a nice day '+ timeOfDay+'.');

        }
    }
};


john.presentation('formal', 'morning');
