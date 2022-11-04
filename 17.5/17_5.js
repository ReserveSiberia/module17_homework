function reverseStr(str) {
    let resStr = str
    let arrStr = resStr.split('')
    let newArrStr = arrStr.reverse()
    resStr = newArrStr.join('')
    return resStr;
  }
module.exports = reverseStr;