/*
If I understand the time complexities correctly than each of the below functions has a
runtime of O(n*log(n)) because each one is a for loop with a nested if statement that 
uses a small set of data. I believe while the map.has() is not a loop function, in a 
practical application with large sets of data it may functionally act as a loop. Which 
would make the worst case scenario and the appropriate runtime to use as an estimate O(n^2). 
*/

/* 1) Sum Zero */

const sumZero = (arr) => {
    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        let sum = 0 - arr[i]

        if(map.has(sum)) {
            return true
        }

        map.set(arr[i])
    }
    return false
}

  console.log("sumZero Test: " + sumZero([1]))
  console.log("sumZero Test: " + sumZero([1, 2, 3, 5, 6]))
  console.log("sumZero Test: " + sumZero([-3, -2, -1, 1, 2]))

/* 2) Unique Characters */

const hasUniqueChars = (word) => {
    let arr = word.split('')
    
    let map = new Map()
    
    for (let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            return false
        }

        map.set(arr[i])
    }
    return true
}

console.log("hasUniqueChars Test: " + hasUniqueChars("A"))
console.log("hasUniqueChars Test: " + hasUniqueChars("ABC"))
console.log("hasUniqueChars Test: " + hasUniqueChars("ABCA"))

/* 3) Panagram Sentence */



/* 4) Longest Word */

const find_longest_word = (arr) => {
    let longest = 0

    for(let i = 0; i< arr.length; i++) {
        length = arr[i].length

        if (length >= longest) {
            longest = length
        }
    }
    
    return longest
} 

console.log("find_longest_word: " + find_longest_word(["hello", "howdy"]))
console.log("find_longest_word: " + find_longest_word([""]))
console.log("find_longest_word: " + find_longest_word(["short", "longest"]))