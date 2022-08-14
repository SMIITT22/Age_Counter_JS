var dateEl = document.getElementById('date');
var monthEl = document.getElementById('month');
var yearEl = document.getElementById('year');
var buttonEl = document.getElementById('btn');
var resultEl = document.getElementById('result');


buttonEl.addEventListener('click',()=>{

    //convert all the years and month in numbers.
    var userYear = Number(yearEl.value); // user birth year in number
    var presentYear = new Date().getFullYear(); // present year in number 
    var userMonth = Number(monthEl.value); //user month in number
    var presentMonth = (new Date().getMonth())+1;// present month in number
    var presentDays = Number(new Date().getDate())
  
    var diffpuYear = presentYear-userYear;
    var diffpuMonth = presentMonth-userMonth;

    var case1 = userMonth-presentMonth;
    var case2 = 12-case1;

if((monthEl.value == 01 || monthEl.value == 03 || 
    monthEl.value == 05 || monthEl.value == 07||
    monthEl.value == 08|| monthEl.value == 10||
    monthEl.value == 12)){

        var userDays31 = 31 - Number(dateEl.value);
        var finalDays31 =  presentDays + userDays31;

        if((finalDays31 >= 31) && (userMonth < presentMonth) ){
            resultEl.innerText = `your age is ${diffpuYear} year and ${diffpuMonth} month and ${finalDays31-31} days`
        }
        
        if((finalDays31 <=31) && (userMonth < presentMonth) ){
            resultEl.innerText = `your age is ${diffpuYear} year and ${diffpuMonth-1} month and ${finalDays31} days`
        }
        else if((finalDays31 >= 31) && (presentMonth < userMonth)){
            resultEl.innerText = `your age is ${diffpuYear -1 } year and ${case2} month and ${finalDays31-31} days`

        }
        else if((finalDays31 <= 31) && (presentMonth < userMonth)){
            resultEl.innerText = `your age is ${diffpuYear -1 } year and ${case2-1} month and ${finalDays31} days`

        }

        //for same months
        else if((finalDays31 <= 31) && (presentMonth == userMonth)){
            resultEl.innerText = `your age is ${diffpuYear-1} year and ${case2-1} month and ${finalDays31} days`

        }
        else if((finalDays31 >= 31) && (presentMonth == userMonth)){
            resultEl.innerText = `your age is ${diffpuYear} year and ${0} month and ${finalDays31-31} days`

        }

}
else if((monthEl.value == 04|| monthEl.value == 06
    ||monthEl.value == 09|| monthEl.value == 11)){
  
        var userDays30 = 30 - Number(dateEl.value);
        var finalDays30 =  presentDays + userDays30

    if((finalDays30 >= 30) && (userMonth <= presentMonth)){
      resultEl.innerText = `your age is ${diffpuYear} year and ${diffpuMonth} month! and ${finalDays30-30} days`
    }
    else if((finalDays30 <= 30) && (userMonth <= presentMonth)){
        resultEl.innerText = `your age is ${diffpuYear} year and ${diffpuMonth-1} month! and ${finalDays30} days`
    }
    else if((finalDays30 >= 30) && (presentMonth <= userMonth)){
        resultEl.innerText = `your age is ${diffpuYear-1} year and ${case2} month! and ${finalDays30-30} days`
    }
    else if((finalDays30 <= 30) && (presentMonth <= userMonth)){
        resultEl.innerText = `your age is ${diffpuYear-1} year and ${case2-1} month! and ${finalDays30} days`
    }

     //for same months
    else if((finalDays30 <= 30) && (presentMonth == userMonth)){
          resultEl.innerText = `your age is ${diffpuYear-1} year and ${case2-1} month and ${finalDays30} days`
    
     }
    else if((finalDays30 >= 30) && (presentMonth == userMonth)){
        resultEl.innerText = `your age is ${diffpuYear} year and ${0} month and ${finalDays30-31} days`

     }

    }
else if(monthEl.value == 02){
    
    var userDays1 = 29 - Number(dateEl.value);
    var finalDays1 =  presentDays + userDays1;

    var userDays2 = 28 - Number(dateEl.value);
    var finalDays2 =  presentDays + userDays2

    if(userYear % 4 == 0){
        if((finalDays1 >= 29) && (userMonth <= presentMonth)){
            resultEl.innerText = `your age is ${diffpuYear} year and ${diffpuMonth} month! and ${finalDays1-29} days`
        }
        else if((finalDays1 <= 29) && (userMonth <= presentMonth)){
            resultEl.innerText = `your age is ${diffpuYear} year and ${diffpuMonth-1} month! and ${finalDays1} days`
        }
        else if((finalDays1 >= 29) && (presentMonth <= userMonth)){
            resultEl.innerText = `your age is ${diffpuYear-1} year and ${case2} month! and ${finalDays1-29} days`
        }
        else if((finalDays1 <= 29) && (presentMonth <= userMonth)){
            resultEl.innerText = `your age is ${diffpuYear-1} year and ${case2-1} month! and ${finalDays1} days`
        }

    //for same months
    else if((finalDays1 <= 29) && (presentMonth == userMonth)){
        resultEl.innerText = `your age is ${diffpuYear-1} year and ${case2-1} month and ${finalDays1} days`
  
   }
    else if((finalDays1 >= 29) && (presentMonth == userMonth)){
        resultEl.innerText = `your age is ${diffpuYear} year and ${0} month and ${finalDays1-29} days`

   }
    }

    else{
        if((finalDays2 >= 28) && (userMonth <= presentMonth)){
            resultEl.innerText = `your age is ${diffpuYear} year and ${diffpuMonth} month! and ${finalDays2-28} days`
        }
        else if((finalDays2 <= 28) && (userMonth <= presentMonth)){
            resultEl.innerText = `your age is ${diffpuYear} year and ${diffpuMonth-1} month! and ${finalDays2} days`
        }
        else if((finalDays2 >= 28) && (presentMonth <= userMonth)){
            resultEl.innerText = `your age is ${diffpuYear-1} year and ${case2} month! and ${finalDays2-28} days`
        }
        else if((finalDays2 <= 28) && (presentMonth <= userMonth)){
            resultEl.innerText = `your age is ${diffpuYear-1} year and ${case2-1} month! and ${finalDays2} days`
        }
            //for same months
    else if((finalDays2 <= 28) && (presentMonth == userMonth)){
        resultEl.innerText = `your age is ${diffpuYear-1} year and ${case2-1} month and ${finalDays2} days`
  
   }
    else if((finalDays2 >= 28) && (presentMonth == userMonth)){
        resultEl.innerText = `your age is ${diffpuYear} year and ${0} month and ${finalDays2-29} days`

   }
        
}
    
}})