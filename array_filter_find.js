// .filter();
const team = [
    'Michelle B',
    'Dave L',
    'Dave C',
    'Courtney B',
    'Davina M'
]
// console.log(team[1].match(/Dav/)); 
// [ 'Dav', index: 0, input: 'Dave L', groups: undefined ]
// console.log(team[0].match(/Dav/));
// null;

const daves = [];
for (let i = 0; i<team.length; i++){
    if(team[i].match(/Dav/)){
        daves.push(team[i]);
    }
}
// console.log(daves);

const daves2 = team.filter(member => member.match(/Dav/));
console.log(daves2);



//.find();
const instructors = [
    {
        name: '짐',
       libraries: ['미디어교육정보 도서관']
    },
    {
        name: '새라',
       libraries: ['기념도서관', '문헌정보학 도서관']
    },
    {
        name: '엘리엇',
       libraries: ['중앙 도서관']
    }
];

let memorialInstructor;
for (let i = 0; i <instructors.length; i++){
    if(instructors[i].libraries.includes('기념도서관')){
        memorialInstructor = instructors[i];
        break;
    }
}
console.log(memorialInstructor);

const memorialInstructor2 = instructors.find(instructor => {
    return instructor.libraries.includes('기념도서관');
});

console.log(memorialInstructor2);
