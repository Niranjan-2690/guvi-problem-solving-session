//? Day 2: Maths & Pattern Creation
//* Session Focus: Solving fundamental math problems and creating patterns.
//? Session Practice Questions:


// 1. Calculate the factorial of a number.

function factorial(n){
    let fact = 1
    for(let i = n; i > 1; i--){
    fact *= i
    }
    return fact
}
console.log(factorial(4))

//------------------------------------------------------

// 2. Generate the Fibonacci sequence up to N terms.

function fibonacci(N){
    let arr = []
    if(N > 0) arr.push(0)
    if(N > 1) arr.push(1)
    
    for(let itr = 2; itr < N; itr++){
        arr.push(arr[itr-1] + arr[itr-2])
    }
    return arr
}
console.log(fibonacci(6))

//------------------------------------------------------
// 3. Find the nth term of fibonacci series

function fibonacci(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    let n1 = 0;
    let n2 = 1;
    for(let itr = 1; itr < n; itr++){
        let sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    return n2
}
console.log(fibonacci(9))

//------------------------------------------------------

// 4. Check if a number is prime. (Time Complexity).

function isPrime(n){
    for(let i = 2; i < n; i++){
       if(n % i === 0){
           return false
       } return true
    }
}

console.log(isPrime(15)) 

//------------------------------------------------------

// 5. Sum of digits in a number.

function sumOfDigits(num){
    let sum = 0;
    while (num > 0){
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}

console.log(sumOfDigits(57))

//------------------------------------------------------

// 6. Check if a number is a palindrome.

function reverse(num){
    let rev = 0
    while (num > 0){
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10)
    }
    return rev
}

function isPlaindrome(num){
    let reversedNum = reverse(num);
    return num === reversedNum
}
console.log(isPlaindrome(123))

//------------------------------------------------------

// 7. Print a right - angled triangle pattern of asterisks.

function rightAngleTriangle(n){
    for(let row = 0; row < n; row++){
        let arr = []
        for(let col = 0; col <= row; col++){
            arr.push('*')
        }
        console.log(arr.join(""))
    }
}
console.log(rightAngleTriangle(10))

//------------------------------------------------------

// 8. Print a hollow square pattern.

function printHollowSquarePattern(n) {
    for (let row = 0; row < n; row++){
        let arr = []
        for (let col = 0; col < n; col++){
            if (row == 0 || row == n - 1 || col == 0 || col == n - 1) {
                arr.push("*")
            } else {
                arr.push(" ")
            }
        }
        console.log(arr.join(""))
    }
}
    
console.log(printHollowSquarePattern(6))

//------------------------------------------------------

// 9. Find the LCM of two numbers.
// 10. Generate a pyramid pattern of numbers.
// 11. Calculate the GCD of two numbers.
// 12. Print an inverted triangle pattern of stars.
// 13. Check if two numbers are coprime.
// 14. Print a diamond pattern of stars.
// 15. Print Pascal’s triangle up to N rows.
// 16. Find all divisors of a number.
// 17. Print a checkerboard pattern.