let age = prompt('Enter age here.');

if (age < 12) {
    console.log('Ticket price is $5');
} else if (age >= 12 && age <= 64) {
    console.log('Ticket price is $12');
} else {
    console.log('Ticket price is $8');
}