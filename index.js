// Getting the first two drivers in an array
const scuberDrivers = ['Antonia','Nuru','Amari','Mo'];
    function returnFirstTwoDrivers(){
       return scuberDrivers.slice(0,2);
    }
// Getting the last two drivers in an array
function returnLastTwoDrivers (){
    return scuberDrivers.slice(-2);
}
// Returns output of the functions returnFirstTwoDrivers & returnLastTwoDrivers
const selectingDrivers =  [returnFirstTwoDrivers,returnLastTwoDrivers];

// Doubling & tripling fare
function createFareMultiplier(multiplier){
    return function (value){
        return value * multiplier;
    }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// Selecting different drivers
function selectDifferentDrivers (arrayOfDrivers,driverSelectorFunction){
    return driverSelectorFunction(arrayOfDrivers);
}


