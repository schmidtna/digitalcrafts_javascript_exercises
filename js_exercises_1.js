function madlib (name, subject) {
    return `${name}'s favorite subject in school is ${subject}.`;
}
console.log(madlib("Nick", "coding"))


function tipAmount (bill, service) {
    if (service == "fair") {
        return(bill * 1.1);
    }   else if (service == "good") {
        return(bill * 1.15);
    }   else if (service == "great") {
        return(bill * 1.2);
    }   else {
        return("Invalid input")
    }
}
console.log(tipAmount(20, "great"))

function printNumbers (start, end) {
    for (var count=start; count < end + 1; count++) {
        console.log(count);
    }
}
printNumbers(1, 10)

function printNumbersToo (start, end) {
    count = start -1
    while (count < end) {
        count += 1;
        console.log(count)
    }
}
printNumbersToo(1, 10)