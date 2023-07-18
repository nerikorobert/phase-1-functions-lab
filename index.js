function distanceFromHqInBlocks(pickup_location) {
    const hq_location = 42;
    const distance = Math.abs(pickup_location - hq_location);
    return distance;
}
function distanceFromHqInFeet(blocks) {
    const feetPerBlock = 264; 
    const distanceInBlocks = distanceFromHqInBlocks(blocks);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  }
  function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(startBlock - endBlock);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  }
  function calculatesFarePrice(startBlock, endBlock) {
    const feetPerBlock = 264; 
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const distanceBeyond400Feet = distanceInFeet - 400;
      const fare = distanceBeyond400Feet * 0.02;
      return fare;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }