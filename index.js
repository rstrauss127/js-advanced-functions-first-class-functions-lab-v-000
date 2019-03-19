function returnFirstTwoDrivers(drivers) {

}

function returnLastTwoDrivers(drivers) {
  const lastTwo = function(drivers) {
    return [drivers[drivers.length], drivers[drivers.length-1]];
  }
  return lastTwo;
}

selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()];

function createFareMultiplier(int) {
  const multiplier = int;
  return function(fare) {
    return multiplier*fare;
  }
}

function fareDoubler(fare) {
  const doubler =  createFareMultiplier(2);
  return doubler(fare);
}

function fareTripler(fare) {
  const tripler = createFareMultiplier(3);
  return tripler(fare);
}

function fetchSpecifiedDrivers(drivers, fn) {
  return fn(drivers);
}
