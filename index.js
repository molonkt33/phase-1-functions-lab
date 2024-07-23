// index.js

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(blocks) {
    const hq = 42;
    return Math.abs(blocks - hq);
  }
  
  // Function to calculate distance from HQ in feet
  function distanceFromHqInFeet(blocks) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(blocks) * feetPerBlock;
  }
  
  // Function to calculate distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(start - destination) * feetPerBlock;
  }
  
  // Function to calculate fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  // Export functions for testing
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  };
  