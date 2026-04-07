for( let i = 1; i < 6; i++ ) {
  console.log('*****');
}

let ast = '';
for( let i = 1; i < 6; i++) {
  ast += '*';
  console.log(ast);
}

// for( let i = 1; i < 6; i++ ) {
//   let star = '';
//   for(let j = 1; j <= i; j++ ) {
//     star += '*';
//   }
//   console.log(star);
// }

// let h = 5;
// for( let i = 1; i <= h; i++ ) {
//   let line ='';

//   for( let j = 1; j <= h - i; j++ ) {
//     line += ' ';
//   }

//   for( let z = 1; z <= 2*i-1; z++ ){
//     line += '*';
//   }
//   console.log(line);
// }

// ★ 박병주 강사님 ★
let space = '     ';
let star = '';
for(let i = 0; i < 5; i++) {
  star += '*';
  console.log(`${space.slice(1, space.length - i)}${star}`);
}

// for( let i = 0; i < 5; i++ ) {
//   let space = '';
//   for( let z = 4; z > i; z-- ){
//     space += ' ';
//   }

//   let star = '';
//   for( let y = 0; y <= i; y++ ) {
//     star += '*';
//   }
//   console.log(`${space}${star}`);
// }


// ★김민수님★
// let arr = [1,2,3,4,5];

// // for(let i= 0; i < arr.length; i++){
// //   if(arr[i] === 4 || arr[i] === 5){
// //     arr.splice(i, 1);
// //   }
  
// // }
// for(let i= arr.length-1; i >=0; i--){
//   if(arr[i] === 4 || arr[i] === 5){
//     arr.splice(i, 1);
//   }
  
// }

// console.log(arr);