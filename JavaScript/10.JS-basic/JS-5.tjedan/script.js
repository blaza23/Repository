
const array=[
    { name: 'Zagreb', postalCode: 10000, type: 1 },
    { name: 'Varazdin', postalCode: 42000, type: 2 },
    { name: 'Split', postalCode: 21000, type: 2 },
    { name: 'Rijeka', postalCode: 51000, type: 3 },
    { name: 'Osijek', postalCode: 31000 },
    { name: 'Zadar', postalCode: 23000 }
]

console.log(array.sort((x,y) => x.name - y.name && x.type - y.type));



// { name: "Zagreb", postalCode: 10000, type: 1 }
// { name: "Split", postalCode: 21000, type: 2 }
// { name: "Varazdin", postalCode: 42000, type: 2 }
// { name: "Rijeka", postalCode: 51000, type: 3 }
// { name: "Osijek", postalCode: 31000 }
// { name: "Zadar", postalCode: 23000 }