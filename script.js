function bmiCalculator(){




    
    const age = document.getElementById("age").value
    const weightBefore = document.getElementById("weight-in-pounds").value
    const heightInFeet = document.getElementById("height-in-feet").value;
    const heightInInches = document.getElementById("height-in-inches").value;
    

    
    let totalHeight = (heightInInches * 1) + (heightInFeet * 12);
    
    let weightInKilo = weightBefore * 703

    let bmi = weightInKilo / (totalHeight * totalHeight)
    
    const gender = checkGender();

    let message = ""
    if(age > 20){
    
    
        if(bmi < 16){
        
    }else if(bmi > 16 && bmi <= 17){
        message = "moderate thinness";

    }else if(bmi > 17 && bmi <= 18.5){
       message = "mild thinness"

    }else if(bmi > 18.5 && bmi <= 25 ){
      message = "normal";

    }else if(bmi > 25 && bmi <= 30){
    message = "overweight";
 
    }else if(bmi > 30 && bmi <= 35){
       message = "obese class 1";

    }else if(bmi > 35 && bmi <= 40){
        message =  "obese class 2";
    }else if(bmi > 40){
        message = "obese class 3";
    }  

    }else{
        if(gender.value === "Male"){
        
            if(age >= 2 && age <= 4){
                if(bmi < 14.4){
                   message =  "underweight" 
                 }else if(bmi >= 14 && bmi <= 18){
                    message =  "Healthy"
                 }else if(bmi > 18){
                    message =  "overweight"
                 
                
            }else if(age > 4 && age <= 6){
                if(bmi < 13.5){
                    message =  "underweight" 
                }else if(bmi >= 13.5 && bmi <= 16.8){
                    message =  "Healthy"
                }else if(bmi > 16.8){
                    message =  "overweight"
                }
            }else if(age > 6 && age <= 8){
                if(bmi < 13.4){
                    message =  "underweight" 
                }else if(bmi >= 13.4 && bmi <= 17.6){
                message =  "Healthy"
                }else if(bmi > 17.6){
                    message =  "overweight"
                }

            }else if(age > 8 && age <= 12){
                if(bmi < 14){
                    message =  "underweight" 
                }else if(bmi >= 14 && bmi <= 19.9){
                message =  "Healthy"
                }else if(bmi > 19.9){
                    message =  "overweight"
                }
            }else if(age > 12 && age <= 15){
                if(bmi < 15){
                    message =  "underweight" 
                }else if(bmi >= 15 && bmi <= 23){
                message =  "Healthy"
                }else if(bmi > 23){
                    message =  "overweight"
                }
            }else if(age > 15 && age <= 20){
                if(bmi < 17.2){
                    message =  "underweight" 
                }else if(bmi >= 17.2 && bmi <= 25.2){
                message =  "Healthy"
                }else if(bmi > 25.2){
                    message =  "overweight"
                }
            }
        }
            

        }else
                if(age >= 2 && age <= 4){
                if(bmi < 14.4){
                    message =  "underweight"  
                 }else if(bmi >= 14 && bmi <= 18){
                    message =  "Healthy"
                 }else if(bmi > 18){
                     message =  "overweight"
                 
                
            }else if(age > 4 && age <= 6){
                if(bmi < 13.5){
                    message =  "underweight" 
                }else if(bmi >= 13.5 && bmi <= 16.8){
                message =  "Healthy"
                }else if(bmi > 16.8){
                message =  "overweight"
                }
            }else if(age > 6 && age <= 8){
                if(bmi < 13.4){
                message =  "underweight" 
                }else if(bmi >= 13.4 && bmi <= 17.6){
                message =  "Healthy"
                }else if(bmi > 17.6){
                message =  "overweight"
                }

            }else if(age > 8 && age <= 12){
                if(bmi < 14){
                    message =  "underweight" 
                }else if(bmi >= 14 && bmi <= 19.9){
                message =  "Healthy"
                }else if(bmi > 19.9){
               message =  "overweight"
                }
            }else if(age > 12 && age <= 15){
                if(bmi < 15){
                    message =  "underweight" 
                }else if(bmi >= 15 && bmi <= 23){
                message =  "Healthy"
                }else if(bmi > 23){
                    message =  "overweight"         
                }
            }else if(age > 15 && age <= 20){
                if(bmi < 17.2){
                    message =  "underweight" 
                }else if(bmi >= 17.2 && bmi <= 25.2){
                message =  "Healthy"
                }else if(bmi > 25.2){
                    message =  "overweight"           
                }
            }
        }
    }

  
    


print(bmi, message, checkGender());
       
}


function checkGender(){
    const gender = document.querySelectorAll("input[name='gender']");


  for(i = 0; i < gender.length; i++){
    if(gender[i].checked){
        return gender[i].value;
        
    }
  }
  return null;
}



function print(bmi, message, gender){

document.getElementById("end").innerHTML = `
<br />
<h1>${bmi.toFixed(1)} ${message} ${gender} </h1>`;

}

function resetInfo(){
    document.getElementById("end").innerHTML = ``;
}