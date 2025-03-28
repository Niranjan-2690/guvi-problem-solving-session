//1. Determine if a number is positive or negative.

function positiveOrNegative(num){
    if(num > 0){
        return "Positive"
    }else if(num < 0){
        return "Negative"
    }else{
        return "Invalid Input"
    }
}

console.log(positiveOrNegative(2))

//-----------------------------------------------------------

//2. Find the sum of two integers.

function findSum(num1, num2){
    return num1 + num2;
}

console.log(findSum(2, -3))

//-----------------------------------------------------------

//3. Identify the max, mid and min of three numbers.

const findMax = (num1, num2) => num1 < num2 ? num2 : num1;
const findMin = (num1, num2) => num1 < num2 ? num1 : num2;

function minMax(num1, num2, num3){
    let min = findMin(findMin(num1, num2), num3)
    let max = findMax(findMax(num1, num2), num3)
    let mid = (num1 + num2 + num3) - (min + max)
    
    console.log(max, mid, min)

}

console.log(minMax(3, 2, 5))

//------------------------------------------------------------

// 4. Count the number of digits in a number

function countDigits(num){
    if(num < 0){
        num = -num
    }
    if(num === 0){
        return 1
    }
    let count = 0;
    while(num > 0){
        num = Math.floor(num / 10);
        count ++
    }
    return count
}
console.log(countDigits(2456788))

//------------------------------------------------------------

// 5. Check if a string contains only alphabets

function onlyAlpha(str){
    for(let i = 0; i<str.length; i++){
        const char = str[i]
        if(!(char >='a' && char <='z' || char >='A' && char <='Z'))
        return false
    }
   return true
}

console.log(onlyAlpha("Niranjan"))

//------------------------------------------------------------

// 6. Calculate the area of a circle with a given radius

function calculateArea(radius){
    return (Math.PI * radius * radius).toFixed(2)
}
console.log(calculateArea(3))

//------------------------------------------------------------

// 7. Check if a character is a vowel

function character(vowels){
    let alphabats = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    if(!(alphabats.includes(vowels))){
        return "the given character is not a vowel"
    }
    return `the given character ${vowels} is a vowel`
}

console.log(character("a"))

//------------------------------------------------------------

// 8. Calculate the difference between two integers.

function differeceBetween(num1, num2){
    if(num1 < num2){
        return num2 - num1
    }
    if(num1 > num2){
        return num1 - num2
    }
    if(num1 === num2){
        return 0
    }
}

console.log(differeceBetween(4, 4))

//------------------------------------------------------------

// 9. Check if a number is even or odd.

function evenOrOdd(num){
    if(!(Number.isInteger(num))){
        return "Invalid Input"
    }
    if(num % 2 === 0){
        return "Even number"
    }else{
        return "odd Number"
    }
}

console.log(evenOrOdd(2.5))

//------------------------------------------------------------

// 10. Calculate the perimeter of a rectangle.

function perimeterOfRectangle(l, w){
    if(typeof l !== "number" || typeof w !== "number"){
        return "Invalid input, l and w should be in number"
    }
    if(l <= 0 || w <= 0){
        return "Invalid input"
    }
    return 2 * (l + w)
}
console.log(perimeterOfRectangle(1, 2))

 //------------------------------------------------------------

 // 11. Find the largest of four numbers.

 function findLargest(num1, num2, num3, num4){
    let max = num1
    if(num2 > max){
        max = num2
    }
    if(num3 > max){
        max = num3
    }
    if(num4 > max){
        max = num4
    }
    return max
}

console.log(findLargest(8, 9, 6, 1))

//------------------------------------------------------------

//12. Calculate the average of three numbers

function average(num1, num2, num3){
    return ((num1 + num2 + num3) / 3).toFixed(2)
}

console.log(average(2, 3, 5))

//------------------------------------------------------------

//13. Count the number of vowels in a string

function numberOfVowels(str){
    if(typeof str !== "string"){
        return "Invalid Input"
    }
    
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let count = 0
    
    for(let i = 0; i<str.length; i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count
}

console.log(numberOfVowels("Hello"))

//------------------------------------------------------------

//14. Determine if a character is uppercase.

function upperCase(str){
    if(typeof str !== "string"){
        return "invalid input"
    }
    if(str===str.toUpperCase() && str === !str.toLowerCase()){
        return true
    }
    return false
}

console.log(upperCase("234"))

//------------------------------------------------------------

//15. Print the reverse of a string.

function reverseOf(str){

    let value = ""
    for(let i = str.length-1; i >= 0 ; i--){
        value += str[i]
    }
    return value
}
console.log(reverseOf("Hello"))

//------------------------------------------------------------

// 16. Find the square of a number.

function square(num){
    if(typeof num !== "number"){
        return "invalid input"
    }
    return num * num
}

console.log(square(10))