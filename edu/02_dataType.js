// 데이터 타입: 여러 종류의 데이터를 식별하는 분류 체계
// JS는 하나의 변수에 어떤 타입의 데이터도 저장이 가능
let num1 = 1;
num1 = 'ttt';

// number: 숫자
let num = 1; // 변수 = 리터럴 값
// num = '111'  // 변수에 담지 않고 직접 준 값은 -> liter 이라고 부름.

console.log(typeof num);

// string: 문자열
let str1 = '문자열';
let str2 = "문자열";
let str3 = `문자열 ${num}`; // 템플릿 리터럴: 변수에 저장된 값을 이용해 문자열을 합칠때 사용 //(변수에 담긴 값이랑) 문자열 합치기
console.log(str3);

let id = '아이디';
let pw = '비밀번호';
let msg = '가 틀렸습니다.';
`${id}${msg}`;
`${pw}${msg}`;

// boolean: 논리(참/거짓)
let bool1 = true;
let bool2 = false;

// undefined: 변수 선언했는데 값이 할당 되지 않은 상태 (시스템의 선택)
let undefinedVal;

// null: 변수에 값이 없음을 의도적으로 명시한 데이터 타입 (개발자의 선택)
let nullVal = null; // '이 처리가 동작되지 않았다'는 것을 알 수 있음. -> 언젠간 필요한데 지금 당장은 아니니까. null값을 넣어줌.

// Symbol: 절대 중복되지 않는 원시 타입(primitive Type) -> 중복되지 않으니까 보통은 const 사용
// 원시 타입 = 기본 타입 (num, srt, bool, undefined, null)
// Reference Type (Object)
const symbol1 = Symbol('test');

// Object (객체): 키(key,property)-값(value)를 쌍으로 저장하는 reference type
// 기본 문법 (구분자 콤마(,)) // 미리 콤마만 적어놔도 됨 //자바에서는 에러
let obj1 = {
  key1: 'val1',
  // key2: 1,  // del v2.0.0
  // key3: 3,  // del v2.0.0
  key3: 3,  //add v2.0.0
  key4: 4,  //add v2.0.0
};

let obj2 = {
  key1: 'val1'
  , key2: 1  // 수정-> 삭제 X 주석 처리 하고 언제 삭제했는지.
  , key3: 3  // 콤마 추가하는 것도 주석 달아줘야함. -> 앞에 달아주는게 편함
};

let obj = {
  key1: 'val1'
  , key2: 1
};
console.log(obj.key1);