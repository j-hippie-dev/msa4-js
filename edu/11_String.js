// String(문자열) 객체
let str1 = "쌍따옴표";
let str2 = '홑따옴표';
let str3 = `백틱`;

// const string1 = new String('객체로 생성');
// 원래는 이렇게 객체를 생성해서 접근.

// 이터러블하다 -> 반복 가능한 객체. 연속적. 순서가 있다.
// length: 문자열 길이 반환
console.log(str1.length);

// String.charAt(idx): String
//    문자열에서 해당 인덱스에 맞는 문자를 반환
let str4 = "문자열입니다."; // 문장 부호도 문자.
console.log(str4.charAt(6));

// String.indexOf(searchStr, idx): Number
//    문자열에서 해당 검색어를 찾아 최초의 인덱스를 반환
//    없을 경우 -1 반환
let str5 = "문자열입니다. 문자열입니다."; // 공백도 문자.
console.log(str5.indexOf('열')); // 2
console.log(str5.indexOf('열', 4)); // 10
console.log(str5.indexOf('입니다.')); // 3 (첫글자의 인덱스)
console.log(str5.indexOf('아아')); // -1

// String.replace(pattern, replacement): String
//    문자열에서 해당 패턴의 첫번째 문자열을 찾아서,
//    대체문자열로 변경하고, 변경한 문자열을 반환
let str6 = "문자열입니다. 문자열입니다.";
// console.log(str6.replace('열', ''));
console.log(str6.replace('문자열', '돈까스').replace('문자열','돈까스'));

// String.replaceAll(pattern, replacement): String
//    문자열에서 해당 패턴의 모든 문자열을 찾아서,
//    대체문자열로 변경한 문자열을 반환
let str7 = "문자열입니다. 문자열입니다.";
console.log(str7.replaceAll('문자열', '돈까스'));

// String.substring(startIdx, endIdx): string
//    문자열에서 시작 인덱스부터 끝 인덱스까지 자른 문자열을 반환
//    끝 인덱스 생략 시, 시작 인덱스부터 끝까지 자른 문자열을 반환
let str8 = "문자열입니다. 문자열입니다.";
console.log(str8.substring(2, 3));

// String.split(separator, limit): Array
//    문자열에서 구분자를 기준으로 잘라 각 문자열을 배열로 만들어 반환
//    limit 배열의 길이를 조절, 생략가능
let str9 = '짜장면, 짬뽕, 탕수육, 라조기, 크림새우';
let str9Arr = str9.split(', '); // 공백 빼먹지 말기
console.log(str9Arr);
str9Arr.forEach(val => {
  console.log(val);
})

// for(let i = 0; i < str9Arr.length; i++ ){
//   console.log(str9Arr[i]);
// }

// String.trim(): String
//    문자열에서 시작과 끝의 공백을 제거한 문자열을 반환
let str10 = '          아아아 ';
console.log(str10);
console.log(str10.trim());

// String.toUpperCase(), String.toLowerCase()
//    문자열을 대소문자로 변경해서 반환
let str11 = 'gwefvwASFwefgwEF'
console.log(str11.toUpperCase());
console.log(str11.toLowerCase());