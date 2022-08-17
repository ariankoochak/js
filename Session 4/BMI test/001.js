function BmiCalc() {
    let text = document.getElementById("frm1");
    let bmi = (text.elements[0].value / ((text.elements[1].value / 100) ** 2)).toFixed(1);
    console.log(bmi);
    if(bmi < 18.5){
        document.getElementById("bmi").innerHTML = "Your BMI Test Result : " + bmi;
        document.getElementById("res").innerHTML = "Underweight";
    }
    else if (bmi < 24.9) {
        document.getElementById("bmi").innerHTML = "Your BMI Test Result : " + bmi;
        document.getElementById("res").innerHTML = "Normal weight";
    }
    else if (bmi < 29.9) {
        document.getElementById("bmi").innerHTML = "Your BMI Test Result : " + bmi;
        document.getElementById("res").innerHTML = "Overweight";
    }
    else if (bmi < 34.9) {
        document.getElementById("bmi").innerHTML = "Your BMI Test Result : " + bmi;
        document.getElementById("res").innerHTML = "Obesity";
    }
    else {
        document.getElementById("bmi").innerHTML = "Your BMI Test Result : " + bmi;
        document.getElementById("res").innerHTML = "Obesity";
    }
}