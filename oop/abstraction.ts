{
    // abstraction

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // 2. interface를 이용한 추상화
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        private constructor(beans: number) {
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

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(87);
    maker.fillCoffeeBeans(36);

    // 1. 접근 제어자를 이용한 추상화
    // 외부에서는 사용하지 않는 함수는 private 처리
    maker.makeCoffee(2);


    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(87);
    // maker2.fillCoffeeBeans(36);
    maker2.makeCoffee(2);


    const maker3: CommercialCoffeMaker = CoffeeMachine.makeMachine(87);
    maker3.fillCoffeeBeans(36);
    maker3.makeCoffee(2);
    maker3.clean();




    class AmateurUser {
        constructor(private machine: CoffeeMaker) { }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeMaker) { }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(30);
            this.machine.clean();
        }
    }

    const maker4: CoffeeMachine = CoffeeMachine.makeMachine(50);
    const amateur = new AmateurUser(maker4);
    const pro = new ProBarista(maker4);
    amateur.makeCoffee();
    pro.makeCoffee();
}