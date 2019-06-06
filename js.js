let hour = 14;
let min = 46;
let dayTime = 'AM';


function whenWakeUp(hour, min, dayTime) {

    let wakeArr = [];
    
    if (dayTime.indexOf('AM') === 0){
        
        hour++;
        min +=44;
        if (min > 59) {
            hour++;
            min -=60;
        }
        
        for (let i = 0; i < 6; i++) {
            
            wakeArr[i] = hour + ' ' + min;
            
            hour++;
            min +=30;

            if (min > 59) {
                hour ++;
                min -=60;
            }

            if (hour > 23) {
                hour -=24;
            }

        }
        
        return wakeArr;
    }

    else {
        return false;
    }

}

console.log(whenWakeUp(hour, min, dayTime));

