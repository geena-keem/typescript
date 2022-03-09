{
    /**
    * Type Assertions (XXXXX)
    * 1. as -문법
    * str as string
    *  => 타입스크립트를 JSX와 사용할 경우는 as -문법만 허용
    * 
    * 2. angle-bracket 문법
    * <string>str
    */

    function jsStrFunc(): any {
        return 'hello';
        // return 1
    }
    const result = jsStrFunc();
    // result.length -> XXX
    // result는 any 타입으로 문자열 타입이 아니므로 문자열의 길이 등 문자열 타입에 사용 가능한 API를 사용할 수 없다.
    // 이때 Type Assertion을 사용할 수 있다.
    // result가 string 타입인걸 알고 있을 때 해당 변수를 문자열처럼 사용할 것이라고 캐스팅할 수 있다.
    console.log((result as string).length);
    // 위 함수에서 숫자를 return 했을 경우 문자열이라고 장담을 했기 떄문에 
    //코드를 작성하는 시점에는 에러 및 경고가 발생하지 않지만 실행하게 되면 undefined으로 출력된다.



    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // Type Error!!!



    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    // numbers.push(2); // Error! 
    // numbers가 숫자 배열일 수도 있지만 undefined일 수도 있기 때문에 push를 사용하지 않는게 좋다.

    numbers!.push(2);
    // 무조건 절대적으로 배열이라고 확신할 수 있을 때 변수명 뒤에 !를 작성하면 된다.
    // optional parameter와 반대되는 의미!

    // 함수를 호출한 다음에 ! 붙여도 된다.
    const numbers2 = findNumbers()!;
    numbers2.push(2);



    // 1.
    const button = document.querySelector('class');
    // querySelector는 요소를 return 할 수도 있고 요소가 존재하지 않으면 null을 return하는 함수이다.
    //button.nodeValue // 이렇게 접근할 경우 object는 button이 null일 수도 있다는 경고 메세지를 띄운다.

    // 조건문이 button이 true일 경우 타입스크립트는 button의 존재를 알고
    // 해당 블럭 안에서 button에 있는 요소에 접근을 할 수 있다.
    if (button) {
        button.nodeValue;
    }

    // 2.
    const button2 = document.querySelector('class')!;
    button2.nodeValue;
}