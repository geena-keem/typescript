{
    /**
     * Enum
     * 상수 값들을 한 곳에 모아서 정의할 수 있다.
     * 타입이 정확하게 지정되지 않아 사용하지 않는게 좋으며 enum을 사용할 수 밖에 없다면 union type으로 대체할 수 있다.
     */

    // JavaScript에서의 상수
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 }) // JS ENUM
    const today = DAYS_ENUM.WEDNESDAY;
    console.log(today, 'JS')


    // TypeScript

    // enum
    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(Days.Wednesday, 'TS');
    let day: Days = Days.Thursday;
    day = 0;
    console.log(day, 'TS');


    // union
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    let dayOfWeek: DaysOfWeek = 'Tuesday';
    dayOfWeek = 'Wednesday';
}