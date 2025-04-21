let weightKg = prompt('Enter weight here');

let heightM = prompt('Enter height here');

let bmi = weightKg / (heightM * heightM);

console.log(bmi);

if (bmi < 18.5) {
    console.log('Underweight');
} else if (bmi < 25) {
    console.log('Normal Weight');
} else if (bmi < 30) {
    console.log('Overweight');
} else {
    console.log('Obese');
}