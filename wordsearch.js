const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
  
  const transpose = function(matrix) {
    const newMatrix = []; //empty array
    for (let i = 0; i < matrix[0].length; i++) { 
      //console.log(matrix[0].length) // -> length of each row
      newMatrix.push([]); 
      //console.log(newMatrix) // -> creates nested array
    }
    for (const row of matrix) {
      for (const column in row) {
        newMatrix[column].push(row[column]);
      }
    }
    //console.log(newMatrix)
    return newMatrix; //columns become rows
  };
  
  const traverseGrid = (grid, phraseArr) => {
    for (const arr of grid) { //arr = each letter
      //console.log(arr) ex. -> [ 'A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L' ]
      for (let i = 0; i < arr.length; i++) { //loop through arr
        if (arr[i] === phraseArr[0]) { //if first letter of word is found
          let word = arr.slice(i, phraseArr.length + i); //slice array from first letter to word.length
          if (eqArrays(word, phraseArr)) { //if arrays are equal return true
            return true;
          }
        }
      }
    }
    return false; //if above doesn't apply, return false
  };
  
  const wordSearch = (letters, word) => {
    const wordArr = word.split(""); //changes word string into array of characters ex. 'FRANK' -> ['F', 'R', 'A'...]
    const transposed = transpose(letters); //switches vertical to horizontal
    return ((traverseGrid(letters, wordArr) || (traverseGrid(transposed, wordArr)))); //compares letter array to word || compares transposed letter aray to word
  };
  
  module.exports = wordSearch;
  
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')
  
    console.log(result);
  // module.exports = wordSearch