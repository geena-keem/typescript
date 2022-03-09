{
    /**
     *  Javascript
     *  Primitive: number, string, boolean, bigint, symbol, null, undefined
     *  Object: function, array....
     */

    // number
    const num: number = 1;

    // string
    const str: string = 'hi';

    // boolean
    const bool: boolean = true;

    // undefined
    let age: undefined; // XXXXXX
    let name: string | undefined;
    name = undefined;
    name = 'name';

    function find (): number | undefined {
        return 1; // or return undefined;
    }

    // null
    let person: null; // XXXXXX
    let person2: string | null;

    // unknown 알 수 없는 타입
    let notSure: unknown = 0;
    notSure = 'hello';
    notSure = true;

    // any 모든 타입
    let anything: any = 0;
    anything = 'hello';

    // void 값을 반환하지 않는 함수에서 사용 (생략 가능, 변수에는 쓰이지 않음)
    function pring(): void {
        console.log('hello');
    }
    let unusable: void = undefined; // XXXXXX

    // never 절대 발생하지 않을 값을 나타내며, 어떠한 타입도 적용할 수 없다.
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
        while(true) {};
    }
    let neverEnding: never; // XXXXX

    // object
    // 여러 타입의 상위 타입이기 때문에 그다지 유용하지 않다.
    // 정확하게 타입을 지정하기 위해 객체의 프로퍼티의 타입을 개별적으로 지정할 수 있다.
    let obj: object; // XXXXX (타입을 명시해서 사용하면 좋다.)
    function acceptSomeObject(obj: object) {
        
    }
    acceptSomeObject({name: '지나'});
    acceptSomeObject({age: 1000});
}