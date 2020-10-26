/* eslint-disable no-unused-vars */

const original = {
  author: '',
  title: '',
  year: 2017,
  rating: null,
};
//  # START:add
const defaults = {
  author: '',
  title: '',
  year: 2017,
  rating: null,
};

const book = {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript',
};

function addBookDefaults(book, defaults) {
  const fields = Object.keys(defaults);
  const updated = {};
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    updated[field] = book[field] || defaults[field];
  }
  return updated;
}
//  # END:add

// Object.assign(firstArg, SecondArg);
// if the key of firstArg is identical to SecondArg's key, firstArg will be updated with new value from SecondArd's value
// Mutation alert!!!!!
// console.log(Object.assign(defaults,book));
// {
//   author: 'Joe Morgan',
//   title: 'Simplifying JavaScript',
//   year: 2017,
//   rating: null
// }
// console.log(defaults);
  // {
  //   author: 'Joe Morgan',
  //   title: 'Simplifying JavaScript',
  //   year: 2017,
  //   rating: null
  // }

  // SOLUTION
  const updated = Object.assign({},defaults,book);
  console.log(updated);
  
  // with Spread
  // if keys are overlapped, last value will survive.
  const spreadUpdated = {...defaults,...book};
  console.log('object updated by spread');
  console.log(spreadUpdated);


  // improper to handle 2d, double object(deep copy/deep merge)

  // # START:deep
const defaultEmployee = {
  name: {
    first: '',
    last: '',
  },
  years: 0,
};

const employee = Object.assign({}, defaultEmployee);
console.log(employee);
// # END:deep

// # START:deepMutate
employee.name.first = 'Joe';

defaultEmployee;
console.log(defaultEmployee);

// {
//   name: {
//     first:'Joe',
//     last: '',
//   },
//   years: 0
// }
// # END:deepMutate


// # START:deepMerge
const employee2 = Object.assign(
  {},
  defaultEmployee,
  {
    name: Object.assign({}, defaultEmployee.name),
  },
);
console.log(employee2);

// with Spread
function deepMerge() {
  const defaultEmployee = {
    name: {
      first: '',
      last: '',
    },
    years: 0,
  };
  // # START:deepMerge
  const employee = {
    ...defaultEmployee,
    name: {
      ...defaultEmployee.name,
    },
  };
  // # END:deepMerge

  employee.name.first = 'joe';
  console.log(defaultEmployee.name.first, employee.name.first)
  return [defaultEmployee.name.first, employee.name.first];
}
// # END:endMerge