{
    /**
     * Intersection Types: &
     * 여러 타입을 하나로 결합하며 기존 타입을 합쳐서 필요한 기능을 모두 가진 단일 타입을 얻을 수 있다.
     */

    type User = {
        name: string;
        age: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    }

    function internWork(person: User & Worker) {
        console.log(person.name, person.employeeId, person.work());

    }

    internWork({
        name: '지나',
        age: 100,
        employeeId: 123,
        work: () => { }
    })
}