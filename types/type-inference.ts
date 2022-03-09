/**
 * Type Inference (타입 추론)
 */

// 변수 text에 'hello'라는 문자열을 할당하면 
// 타입스크립트 코드에서 따로 타입을 명시하지 않아도 에러가 발생하지 않는다.
// text에 다른 문자열을 할당 할 수 있지만 문자열이 아닌 숫자를 할당하면 에러가 난다.
let text = 'hello';
text = 'hi';
// text = 1; // Error


// 에러는 안나지만 Parameter 'message' implicitly has an 'any' type, but a better type may be inferred from usage. 라는 경고가 뜬다.
// message 인자는 암묵적으로 any 타입을 가지고 있으나 타입을 명확하게 명시하는게 좋다.
// 문자열, 숫자... 어떤 값이든 다 받아올 수 있다.
function print(message) {
    console.log(message);
}
print('hello');

// 인자에 타입을 지정하거나 default parameter를 할당하는게 좋다
// function print2(message: string) {
function print2(message = 'default parameter') {
    console.log(message);
}
print2('hello2');



// 인자에 타입을 지정하고 return은 인자를 더한 값을 리턴할 경우
// return되는 값은 number로 자동으로 추론된다.
// void라면 생략이 가능하나 타입을 지정해주는게 좋다!
function add(x: number, y: number) {
    return x + y;
}

// function add(x: number, y: number): number {
//     return x + y;
// }

// add 함수를 호출하게 되면 add 함수는 숫자를 리턴하기 때문에
// result는 자동으로 숫자 타입으로 추론된다.
const result = add(1, 2);


// Best common type (최적 공통 타입)
// 최적 공통 타입 알고리즘은 각 후보 타입을 고려하여 모든 후보 타입을 포함할 수 있는 타입을 선택한다.
let arr = [0, 1, null];
// => let arr: (number | null)[] 로 추론 (array의 타입이 union 타입으로 추론)


// Contextual Typing (문맥상 타이핑)
// 경우에 따라 다른 방향 에서도 타입을 추론하는데 이를 문맥상 타이핑이라고 한다.
// 문맥상 타이핑은 표현식의 타입이 해당 위치에 암시될 때 발생한다.
window.onmousedown = function (mouseEvent: any) {
    console.log(mouseEvent.button); // success
    console.log(mouseEvent.sleep); // Error!!!!
    // window.onmousedown에 할당되는 함수의 타입을 추론하기 위해 window.onmousedown타입을 검사한다.
    // 타입 검사가 끝나고 나면 함수의 타입이 마우스 이벤트와 연관이 있다고 추론하기 때문에
    // mouseEvent 인자에 button속성은 있지만 sleep속성은 없다고 결론을 내려 에러가 난다.
}