let number = prompt('Enter number here.');

if (number > 0) {
    console.log('The number is positive.');
} else if (number < 0) {
    console.log('The number is negative.');
} else {
    console.log('The number is zero.');
};


let score = prompt('Enter score here.');

// Checking for single condition
if(score >= 90) {
    console.log('Grade: A');
}

// If else statemens adda fallback action if the first conditon isn't met
if(score >= 90) {
    console.log('Grade: A');
} else {
    console.log('Grade: Not A');
}

// Allow multiple conditions in sequence
if (score >= 90) {
    console.log('Grade: A');
} else if(score >= 80) {
    console.log('Grade: B');
} else if(score >= 70) {
    console.log('Grade: C');
} else if(score >= 60) {
    console.log('Grade: D');
} else {
    console.log('Grade: F');
}

// Nested Conditionals
if(score >= 90) {
    if(score === 100) {
        console.log('Grade: A+ with honors');
    } else {
        console.log('Grade: A');
    }
} else {
    console.log('Grade: Below A');
}

// Ternary Operator
let g = score >= 90 ? 'A' : 'Not A';
console.log('Grade:', g)


// Switch Statement
let grade = prompt('Enter grade here.')

switch (grade) {
    case 'A': 
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good Job');
        break;
    case 'C':
        console.log('Needs Improvement');
        break;
    default:
        console.log('Fail')
}





