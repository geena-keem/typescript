{
    // javascript
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }
    // typescript
    function tsAdd(num1: number, num2: number): number {
        return num1 + num2;
    }

    // javascript
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }
    // typescript
    function tsFetchNum(id: string): Promise<number> {
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // ? (Optional parameter)
    // 함수를 선언했을 때, 필수적으로 받아오지 않아도 되는 파라미터가 있다면, '?'를 사용하여 옵셔널로 지정할 수 있다.
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('steve', 'jobs');
    printName('steve');
    printName('steve', undefined);

    // Default parameter
    // 파라미터에 인자를 전달하지 않은 경우에 대해 디폴트 파라미터를 위와 같이 지정할 수 있다.
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest parameter
    // 함수의 파라미터 개수를 가변적으로 전달 받을 수 있다.
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));
}