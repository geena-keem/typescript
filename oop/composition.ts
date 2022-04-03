{
    // composition
    // 필요한 기능을 재사용할 수 있다. (코드의 재사용)

    // 상속의 문제점
    // 1. 상속의 깊이가 길어지면 서로 간의 관계가 복잡해질 수 있다.
    // 2. 상속의 치명적인 문제는 부모의 클래스를 수정하면 모든 자식 클래스의 영향을 미칠 수 있는 단점이 존재한다.
    // 3. 타입스크립트에서는 하나의 클래스만 상속이 가능하다.

    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

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
                throw new Error('value for beans should be greater than 0!');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine');
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
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    // 저렴한 우유 거품기
    class CheapMilkSteamer {
        private steamMilk(): void {
            console.log('steaming some milk');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            };
        }
    }

    // 설탕 제조기
    class AutomaticSugarMixer {
        private getSugar() {
            console.log('getting some sugar from candy');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            };
        }
    }

    class CafeLatteMachine extends CoffeeMachine {
        // dependency injection
        constructor(
            beans: number,
            public readonly serialNumber: string,
            private milkFrother: CheapMilkSteamer
        ) {
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFrother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(private beans: number, private sugar: AutomaticSugarMixer) {
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    // composition
    class SweetCaffeLatteMachine extends CoffeeMachine {
        constructor(
            private beans: number,
            private milk: CheapMilkSteamer,
            private sugar: AutomaticSugarMixer
        ) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        // new CafeLatteMachine(16, '1'),
        // new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        // new CafeLatteMachine(16, '1'),
        // new SweetCoffeeMaker(16),
    ];
    machines.forEach((machine) => {
        console.log('-------------');
        machine.makeCoffee(1);
    });
}
