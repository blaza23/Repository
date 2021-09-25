const compSide = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
};

let compS;

function DNAStrand (dnaString){
    compS = '';
    for(letter of dnaString) {
        compS = compS + compSide[letter] + '';
    }
    return compS;
}
console.log(DNAStrand('ATTGC'));
console.log(DNAStrand('GTAT'));

