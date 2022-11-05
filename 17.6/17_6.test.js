const getPercents = require('./17_6');

describe('tests for getPersents funciton', () => {
  const randomNum = Math.random()
  it('71 of 1059 equal to 751.89', () => {
    expect(getPercents(71, 1059)).toBe(751.89)
  })

  it('-1 percets of random number equal to "Wrong Data"', () => {
    expect(getPercents(-1, randomNum)).toBe('Wrong Data')
  })
  
  it('0 percets of random number equal to random number', () => {
    expect(getPercents(0, randomNum)).toBe(randomNum)
  })
});