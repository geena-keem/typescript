{
    // Array
    const str: string[] = ['a', 'b', 'c'];
    const num: number[] = [1, 2, 3];
    const numArr: Array<number> = [1, 2, 3];

    // readonly를 사용할 경우 type[] 형태로 작성해야 한다. (Array<T>는 허용되지 않음) 
    // readonly 함수에 전달되는 인자를 함수 내부에서 변경할 수 없게하며 불변성을 유지해주기 때문에 자주 사용한다.
    function printArray(str: readonly string[]) {
        // str.push --> Error
    }


    // Tuple - interface, type alias, class로 대체해서 사용하는 것이 좋다.
    // 서로 다른 타입을 함께 가질 수 있는 배열이다.
    // 튜플 타입을 사용하면, 요소의 타입과 개수가 고정된 배열을 표현할 수 있다.
    let user: [string, number];
    user = ['지나', 0];
    console.log(user[0]); // '지나'
    console.log(user[1]); // 0
    // obeject의 Destructuring을 사용하면 불편한 방법을 피할수는 있지만 데이터를 사용하는 곳에서 임의의 이름을 지정해서 사용해야 하는 단점이 있다.
    const [name, age] = user;


}