const fibonacci = function(n) {
    if (n >= 0) {
    return Math.floor((((1 + 5 ** 0.5) / 2) ** n - ((1 - 5 ** 0.5) / 2) ** n) / 5 ** 0.5);
    }
    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;

