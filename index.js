const returnFirstTwoDrivers = (function(arrayOfDrivers) {
    return arrayOfDrivers.slice(0,2)
});

// using const = functionName makes functionName into a variable
// that you can call without executing the function itself.
// e.g. try console.log(functionName) and see what happens.

// Anonymous functions use this syntax:
// (function(parameterName1, parameterName2...){
//      // function body
//})
// ^ The thing that makes this an anonymous function is the parentheses
// around the whole thing, and the fact that function doesn't
// have a name, only the parameters do.

const returnLastTwoDrivers = (function(arrayOfDrivers) {
    return arrayOfDrivers.slice(-2)
});

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){

    return function multiplyFare(fare){

        return (fare*integer);
    }


}

// fareDoubler() — Declare a variable with const and assign a 
// function returned by createFareMultiplier() to it. Invoke 
// createFareMultiplier() in such a way that the new fareDoubler() 
// function accepts a fare as its lone argument and doubles it.

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, functionName){

    if (functionName == returnFirstTwoDrivers){

       return returnFirstTwoDrivers(drivers);

    }
    else if (functionName == returnLastTwoDrivers){

        return returnLastTwoDrivers(drivers);
 
     }

}