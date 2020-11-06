const callback = function (collectedValues, item) { 
return [...collectedValues, item];
};

const saying = ['veni', 'vedi', 'veci'];
const initialValue = [];
const copy = saying.reduce(callback, initialValue);

console.log(copy);


// #START:developers
const developers = [
    {
      name: 'Jeff',
      language: 'php',
    },
    {
      name: 'Ashley',
      language: 'python',
    },
    {
      name: 'Sara',
      language: 'python',
    },
    {
      name: 'Joe',
      language: 'javascript',
    },
  ];
  // #END:developers
// #START:specialty
const aggregated = developers.reduce((specialities, developer) => {
    const count = specialities[developer.language] || 0;
    console.log(specialities[developer.language]);
    console.log(count);
    return {
    ...specialities,
    [developer.language]: count + 1,
    };
}, {});
// #END:specialty
console.log(aggregated);

