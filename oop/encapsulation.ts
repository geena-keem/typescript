{
    // encapsulation

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public
    // private
    // protected: 외부에서는 접근이 불가하나 해당 클래스를 상속한 자식 클래스에서만 접근이 가능하다.
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        // static을 사용하는 것은 생성자를 이용해서 생성하는 것을 막기 위해 사용하기 때문에
        // constructor를 private으로 만들고 항상 static method를 사용할 수 있게 하는 것이 좋다.
        private constructor(beans: number) {
            this.coffeeBeans = beans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0!')
            }
            this.coffeeBeans += beans;
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

    const maker = CoffeeMaker.makeMachine(87);
    maker.fillCoffeeBeans(36);




    // getter, setter

    class User {
        // private firstName: string;
        // private lastName: string;

        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        private internalAge = 9;
        get age(): number {
            return this.internalAge;
        }

        set age(num: number) {
            if (num < 0) {
                throw new Error('no!!!!!!!!!!!!!!!!!!!!')
            }
            this.internalAge = num;
        }

        // 생성자에 접근 제어자를 설정하면 멤버 변수로 설정이 된다.
        constructor(private firstName: string, private lastName: string) {
            // this.firstName = firstName;
            // this.lastName = lastName;
        }
    }

    const user = new User('steve', 'jobs');
    console.log(user.fullName); // get 키워드를 사용해서 함수형태가 되지만 접근할 때는 함수 형태가 아니라 멤버 변수에 접근하는 것과 동일하다.
    user.age = 6;
    console.log(user.age);
}