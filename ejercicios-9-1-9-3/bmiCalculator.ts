function calculateBmi(weight: number, height: number){
    let bmi = weight/(height**2);
    if(bmi < 18.5){
		return "Underweight"
	}
	else if(bmi > 18.5 && bmi < 22.9){
		return "Normal weight"
	}
	else if(bmi > 22.9 && bmi < 24.9){
		return "Overweight I"
	}
	else if(bmi > 25.0 && bmi < 29.9){
		return "Overweight II"
	}
	else{
		return "Overweight III"
	}
}

console.log(calculateBmi(74, 1.80));