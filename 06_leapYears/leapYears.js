const leapYears = (year) => (
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    )

// Do not edit below this line
module.exports = leapYears;

//leap years 
//divisible by 4 but not by 100 unless divisible by 400

// input
//check if the input is leap or not
    //if year = divisible by 4 and 100 but not 400
//return true or false