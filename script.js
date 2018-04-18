//Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function fullAge(el) {
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el))
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);
var fullAges = arrayCalc(ages, fullAge);
console.log(fullAges);
var heartRate = arrayCalc(ages, maxHeartRate);
console.log(heartRate);
