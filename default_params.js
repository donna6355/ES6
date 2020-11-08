// 2.2pound = 1kg;
// pound to kg fn
const convertWeight = (weight) => {
    return weight / 2.2;
}

// 16ounce = 1pound;
//ounce added
const convertWeight2 = (weight, ounces) =>{
    const oz = ounces ? ounces / 16 : 0;
    const total = weight + oz;
    return total /2.2;
}

console.log(convertWeight2(21,16));

// 부동 소수점 연산 문제 해결  
function roundToDecimalPlace(number, decimalPlaces) {
    const round = 10 ** decimalPlaces;
    return Math.round(number * round) / round;
  }
  
  // START:convert
  function convertWeight3(weight, ounces, roundTo) {
    const oz = ounces / 16 || 0;
    const total = weight + oz;
    const conversion = total / 2.2;
  
    const round = roundTo === undefined ? 2 : roundTo;
  
    return roundToDecimalPlace(conversion, round);
  }
  // END:convert


//default params
const convertWeightFin = (weight, ounces = 0, roundTo = 2) => {
    const total = weight + (ounces / 6);
    const conversion = total / 2.2;
    return roundToDecimalPlace(conversion, roundTo);
}

console.log(convertWeight(24));