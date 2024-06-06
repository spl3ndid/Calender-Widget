const monthname = document.getElementById("month-name");
const dayname = document.getElementById("dayname");
const daynum = document.getElementById("daynumber");
const yearel = document.getElementById("year");

// Create a new Date object to get the current date
const date = new Date();

// Array of month names
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Array of day names
const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

// Get the current month, day name, day number, and year
const currentMonth = monthNames[date.getMonth()];
const currentDayName = dayNames[date.getDay()];
const currentDayNum = date.getDate();
const currentYear = date.getFullYear();

// Set the innerText of the elements to the current date details
monthname.innerText = currentMonth;
dayname.innerText = currentDayName;
daynum.innerText = currentDayNum;
yearel.innerText = currentYear;


