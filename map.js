const dogs = [
    {
        name :'Max',
        size :'small',
        species : 'Dakshund',
        color : 'black'
    },
    {
        name :'Terry',
        size :'medium',
        species : 'golden litriber',
        color : 'white'
    }    
]
// key === !String
// repeatedly key and value will be updated and edited. 

// how to use Map;

let filters = new Map();
filters.set('species','pitbull')
        .set('name','John')
        .set('size','small');
// The other way to declare Map with array;
// let filters = new Map(
//     [
//         ['species','pitbull'],
//         ['name','John'],
//         ['size','small']
//     ]
// )
console.log(filters.get('species'),filters.get('name'),filters.keys());



//  # START:mapActions
const petFilters = new Map();
function addFilters(filters, key, value) {
  filters.set(key, value);
}

function deleteFilters(filters, key) {
  filters.delete(key);
}

function clearFilters(filters) {
  filters.clear();
}
//  # END:mapActions