// helpers.js

function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264; // Convert blocks to feet
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264; // Convert blocks to feet
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
      return 0;
  } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // $0.02 per foot
  } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for over 2000 feet
  } else {
      return 'cannot travel that far'; // Distance cap
  }
}

// Export the functions
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};
