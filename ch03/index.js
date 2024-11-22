var string = "1";
var number = 1;
var result;
var calculate = function (a, b) {
    if (Number.isInteger(a) === false || Number.isInteger(b) == false) {
        throw new Error("Invalid type: a parameter is not an integer");
    }
    else {
        return a + b;
    }
};
result = calculate(number, number);
console.log("value: ".concat(result, ", type of ").concat(typeof (result)));
result = calculate(number, string);
console.log("value: ".concat(result, ", type of ").concat(typeof (result)));
