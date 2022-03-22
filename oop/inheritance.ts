{
    // inheritance

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        public constructor(beans: number) {
            this.coffeeBeans = beans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0!')
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine')
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up !');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`pulling ${shots} shots`);
            return {
                shots,
                hasMilk: false
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    // 상속
    class CafeLatteMachine extends CoffeeMachine {
        // 자식 클래스에서 생성자는 꼭 부모의 생성자도 같이 호출해줘야 한다.
        // 추가로 부모 클래스에서 필요한 데이터도 받아와야 한다.
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }

        private steamMilk(): void {
            console.log('steaming some milk');
        }

        makeCoffee(shots: number): CoffeeCup {
            // 부모에 있는 함수를 호출하려면 super 키워드를 사용해서 호출하면 된다.
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CafeLatteMachine(23, 'COFFEE');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine);
}