
//object and array problem solving
let john = {
    fullName:"john smith",
    bills:[124, 48, 268, 180, 42],
    calcTips:function(){
        this.tips=[];
        this.finalValues=[];
        for(let i=0; i<this.bills.length; i++){
            //determine the percentage based tipping rules
            let percentage;
            let bill= this.bills[i];
            if(bill<50){
                percentage=.2;
            }else if(bill>=50 && bill<200){
                percentage = .15;
            }else{
                percentage =.1;
            }
            //add result to the corresponding array
            this.tips[i]=bill*percentage;
            this.finalValues[i]=bill+ bill*percentage;
        }

    }
}
let mark = {
    fullName:"mark smith",
    bills:[77, 475, 110, 45],
    calcTips:function(){
        this.tips=[];
        this.finalValues=[];
        for(let i=0; i<this.bills.length; i++){
            //determine the percentage based tipping rules
            let percentage;
            let bill= this.bills[i];
            if(bill<100){
                percentage=.2;
            }else if(bill>=100 && bill<300){
                percentage = .15;
            }else{
                percentage =.25;
            }
            //add result to the corresponding array
            this.tips[i]=bill*percentage;
            this.finalValues[i]=bill+ bill*percentage;
        }
    }
}

function calcAverage(tips){
    var sum = 0;
    for(i=0; i<tips.length; i++){
       sum = sum + tips[i];
    }
    return sum / tips.length;
}


john.calcTips();
mark.calcTips();

john.average=calcAverage(john.tips);
mark.average=calcAverage(mark.tips);
console.log(john,mark);
if(john.average>mark.average){
    console.log(john.fullName + '\'s family pay higher tips , \
    with an average $'+ john.average);

}else if(mark.average>john.average){
    console.log(john.fullName + '\'s family pay higher tips , with \
    an average $'+ mark.average);

}

