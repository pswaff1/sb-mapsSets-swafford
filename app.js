// Maps and Sets
// Patrick Swafford

// Quick Question 1
const qq1 = () => new Set([1, 1, 2, 2, 3, 4]); // Returns {1,2,3,4}

// Quick Question 2
const qq2 = () => [...new Set("referee")].join(""); // Returns 'ref'

// Quick Question 3
const qq3 = () => {
    let m = new Map();
    console.log(m.set([1, 2, 3], true)); // Map(1) {Array(3) => true}
    console.log(m.set([1, 2, 3], false)); // Map(2) {Array(3) => true, Array(3) => false}
};

// hasDuplicate
const hasDuplicate = () => {
    console.log(checkDuplicates([1,3,2,1])); // true
    console.log(checkDuplicates([1,5,-1,4]));// false
}

const checkDuplicates = (arr) => {
    const arrSet = new Set(arr);
    return !(arr.length === arrSet.size);
}