function getPercents(percent, number) {
    if(percent > 0) {
      return number / 100 * percent;
    } 
    else if (percent === 0) {
      return number
    }
    else {
      return "Wrong Data"
    }
    
  }
module.exports = getPercents;