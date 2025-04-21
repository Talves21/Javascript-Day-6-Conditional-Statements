let hour = prompt('Enter hour of day here.')

if (hour >= 5 && hour < 12) {
    console.log('Good Morning');
} else if (hour >= 12 && hour < 17) {
    console.log('Good Afternoon');
} else if (hour >= 17 && hour < 21) {
    console.log('Good Evening');
} else {
    console.log('Good Night');
}
