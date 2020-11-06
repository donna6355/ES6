const names = ['walter', 'white'];
const capital = [];
const capitalized = names.forEach(name => name.toUpperCase());
//forEach는 함수 외부에 영향을 준다. 부수효과. 그래서 아무런 동작을 하지 않고 undefined 반환
names.forEach(name => capital.push(name.toUpperCase()));
//조작은 조심해야되기 때문에 이경우 차라리 .map()을 이용하는 것이 바람직하다. 
const capitalMap = names.map(name => name.toUpperCase());
console.log(capitalized);
console.log(capital);
console.log(capitalMap);
// undefined
