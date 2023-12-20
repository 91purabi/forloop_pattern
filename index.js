// function printSquarePattern(size) {
//     for (let i = 1; i <= size; i++) {
//       let row = '';
//       for (let j = 1; j <= size; j++) {
//         row += '* ';
//       }
//       console.log(row);
//     }
//   }
  
//   printSquarePattern(7);

// function printRightTriangle(size) {
//     for (let i = 1; i <= size; i++) {
//       let row = '';
//       for (let j = 1; j <= i; j++) {
//         row += '* ';
//       }
//       console.log(row);
//     }
//   }
  
//   printRightTriangle(5);




// function printInvertedPyramid(height) {
//     for (let i = height; i >= 1; i--) {
//       let row = '';
//       for (let j = 1; j <= height - i; j++) {
//         row += ' ';
//       }
//       for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//       }
//       console.log(row);
//     }
//   }
  
//   printInvertedPyramid(4);

function printHollowSquare(size) {
    for (let i = 1; i <= size; i++) {
      let row = '';
      for (let j = 1; j <= size; j++) {
        if (i === 1 || i === size || j === 1 || j === size) {
          row += '* ';
        } else {
          row += '  ';
        }
      }
      console.log(row);
    }
  }
  
  printHollowSquare(5);
  
  
  
  