{
    // object oriened programming (static)

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7;
        // class level: class와 연결되어 있기 때문에 object마다 생성되지 않아 메모리 낭비 X
        // static 변수는 this 대신 className으로 접근한다.
        coffeeBeans: number = 0;
        // instance (object) level

        constructor(beans: number) {
            this.coffeeBeans = beans;
        }

        // static 함수는 class 내부에 있는 속성 값이 필요하지 않을 때 사용한다.
        // constructor를 호출하지 않고 새로운 함수를 사용할 수 있다.
        // 외부에서도 클래스를 만들지 않고 CoffeMaker class에 있는 makeMachine 함수를 이용해 
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            // makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            };
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker);

    const maker2 = new CoffeeMaker(12);
    // 함수에 static이 없을 경우 만들어진 object안에서 해당 함수를 호출할 수 있다.
    // maker2.makeMachine(4);
    console.log(maker2);


    // static 함수
    const maker3 = CoffeeMaker.makeMachine(3)
    console.log(maker3);
}