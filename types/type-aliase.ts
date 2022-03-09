{
    /**
     * Type Aliases
     * 특정 타입이나 인터페이스를 참조할 수 있다. (제네릭도 사용가능)
     */
    type Text = string;
    const name: Text = '지나';
    const address: Text = '경기도';

    type Num = number;
    const id: Num = 1;

    type User = {
        name: string,
        age: number
    };
    const user: User = {
        name: '지나',
        age: 100
    };


    /**
     * String Literal Types
     */
    type Name = '지나';
    let myName: Name;
    myName = '지나';

    type JSON = 'json';
    const json: JSON = 'json';

    type Bool = true;
    const isTrue: Bool = true;
}