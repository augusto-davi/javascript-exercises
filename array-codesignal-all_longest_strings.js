// Codesignal exercise
// All Longest Strings

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].


function solution(inputArray) {
    const mapArray = inputArray.map((element) => {
        return element.length
    })
    
    const reduceArray = mapArray.reduce((max, element) => {
        return max = max > element ? max : element 
    }, 1)
    
    const outputArray = inputArray.filter((element) => {
        return element.length === reduceArray
    })
    
    return outputArray;
}
