function BmiCalc() {
    let text = document.getElementById("frm1");
    console.log(+text.elements[0].value);
    console.log(+text.elements[1].value);
    if (text.elements[0].value && text.elements[1].value){
        let bmi = (+text.elements[0].value / ((+text.elements[1]. value / 100) ** 2)).toFixed(1);
        console.log(bmi);
        if(bmi < 18.5){
            document.getElementById("bmi").innerHTML = "Your BMI Test Result : " + bmi;
            document.getElementById("res").innerHTML = "Underweight";
            document.getElementById("image").setAttribute("src","Underweight.png");
        }
        else if (bmi < 24.9) {
            document.getElementById("bmi").innerHTML = "Your BMI Test Result : " + bmi;
            document.getElementById("res").innerHTML = "Normal weight";
            document.getElementById("image").setAttribute("src", "Normal.png");
        }
        else if (bmi < 29.9) {
            document.getElementById("bmi").innerHTML = "Your BMI Test Result : " + bmi;
            document.getElementById("res").innerHTML = "Overweight";
            document.getElementById("image").setAttribute("src", "Overweight.png");
        }
        else {
            document.getElementById("bmi").innerHTML = "Your BMI Test Result : " + bmi;
            document.getElementById("res").innerHTML = "Obese";
            document.getElementById("image").setAttribute("src", "Obese.png");
        }
    }
    else if (!text.elements[0].value && text.elements[1].value){
        document.getElementById("res").innerHTML = "Please Enter Weight";
    }
    else if (text.elements[0].value && !text.elements[1].value) {
        document.getElementById("res").innerHTML = "Please Enter Height";
    }
    else if (!text.elements[0].value && !text.elements[1].value) {
        document.getElementById("res").innerHTML = "Please Enter Weight & Height";
    }
}