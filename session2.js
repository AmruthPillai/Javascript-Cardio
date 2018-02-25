// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
function longestWord(sen) {
    // Create Filtered Array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    
    // Sort by Length
    const sorted = wordArr.sort((a, b) => b.length - a.length);

    // If there are multiple longest words, put it into an array
    const longestWordArr = sorted.filter(word => word.length === sorted[0].length);

    // Check if more than one array value
    if (longestWordArr.length === 1) {
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
function chunkArray(arr, len) {
    // Method 1 -----
    // // Initialized a Chunked Array
    // const chunkedArr = [];

    // // Set Index
    // let i = 0;

    // // Loop while index is less than array length
    // while (i < arr.length) {
    //     // Slice out from the index to the index + chunk length and push onto the chunked array
    //     chunkedArr.push(arr.slice(i, i + len));

    //     // Increment by Chunk Length
    //     i += len;
    // }

    // return chunkedArr;

    // Method 2 -----
    // Initialized a Chunked Array
    const chunkedArr = [];

    // Loop through Array
    arr.forEach(val => {
        // Get Last Element
        const last = chunkedArr[chunkedArr.length - 1];

        // Check if Last Exists and If Last Length is equal to the Chunk Length
        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });

    return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
function flattenArray(arrays) {
    // Method 1 -----
    // return arrays.reduce((a, b) => a.concat(b));

    // Method 2 -----
    // return [].concat.apply([], arrays);

    // Method 3 -----
    return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
function isAnagram(str1, str2) {
    return formatString(str1) === formatString(str2);
}

// Helper Function
function formatString(str) {
    return str
        .toLowerCase()
        .replace(/[^\w]/g, '')
        .split('')
        .sort()
        .join('');
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
function letterChanges(str) {
    // Change every letter of the string to the one that follows it
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        // Z should turn to A
        if (char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    // Capitalize the Vowels
    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

    return newStr;
}

// Call Function
const output = letterChanges('Helloz ThereZ');

console.log(output);