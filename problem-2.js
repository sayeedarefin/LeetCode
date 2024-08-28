function createCounter(n) {
    return function() {
        return n++;
    }
}

// Example 1
const counter1 = createCounter(10);
console.log(counter1()); // Output: 10
console.log(counter1()); // Output: 11
console.log(counter1()); // Output: 12

// Example 2
const counter2 = createCounter(-2);
console.log(counter2()); // Output: -2
console.log(counter2()); // Output: -1
console.log(counter2()); // Output: 0
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */