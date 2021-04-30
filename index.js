// Code your solution in this fi
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let fare=5
function createFareMultiplier(int) {
    return function fareMultiplier(fare){ 
        return fare*int}
}

const fareDoubler = (fare) => {return fare*2}

const fareTripler = (fare) => {return fare*3}

function selectDifferentDrivers(drivers,selector) {
    if (selector=returnFirstTwoDrivers(drivers)){
        return selectingDrivers[0](drivers)
    } else {
        return selectingDrivers[1](drivers)
    }
}