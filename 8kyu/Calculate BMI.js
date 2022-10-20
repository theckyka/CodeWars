/** 
 Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
 */

// My solution 

function bmi(weight, height) {
    a = weight / (height * height);
    if(a <= 18.5 ) {
        return "Underweight"
    } else if (a <= 25.0 ) {
        return "Normal";
    } else if (a <= 30.0) {
        return "Overweight"
    } else if(a > 30 ) {
        return "Obese";
    }
  }

bmi(80, 1.80);