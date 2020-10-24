/* eslint-disable no-unused-vars */

//  # START:removeItemSpread
// const book = ['Reasons and Persons', 'Derek Parfit', 19.99,20,30];

// function removeItem(items, removable) {
//   if (items.includes(removable)) {
//     const index = items.indexOf(removable);
//     console.log(index);
//     console.log(...items.slice(0))
//     console.log(...items.slice(0,index))
//     console.log(...items.slice(1))
//     console.log(...items.slice(2))
//     console.log(...items.slice(3))
//     console.log(...items.slice(-2))
//     return [...items.slice(0, index), ...items.slice(index + 1)];
//   }
//   return items;
// }
// console.log(removeItem(book,19.99));
//  # END:removeItemSpread


//  # START:spreadArguments
const book = ['Reasons and Persons', 'Derek Parfit', 19.99,20,30];

function formatBook(title, author, price) {
  return `${title} by ${author} $${price}`;
}
//  # END:spreadArguments


//  # START:spreadArgumentsExample
formatBook(book[0], book[1], book[2]);

//  # END:spreadArgumentsExample

//  # START:spreadArgumentsExample2
console.log(formatBook(...book))
//  # END:spreadArgumentsExample2
