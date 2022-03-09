{
    /**
     * Enum
     * 상수 값들을 한 곳에 모아서 정의할 수 있다.
     * ts에서는 가능한 쓰지 않는게 좋다.
     */
    // JavaScript에서의 상수
    var MAX_NUM = 6;
    var MAX_STUDENTS_PER_CLASS = 10;
    var MONDAY = 0;
    var TUESDAY = 1;
    var WEDNESDAY = 2;
    var DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 }); // JS ENUM
    var today = DAYS_ENUM.WEDNESDAY;
    console.log(today, 'JS');
    // TypeScript
    var Days = void 0;
    (function (Days) {
        Days[Days["Monday"] = 0] = "Monday";
        Days[Days["Tuesday"] = 1] = "Tuesday";
        Days[Days["Wednesday"] = 2] = "Wednesday";
        Days[Days["Thursday"] = 3] = "Thursday";
        Days[Days["Friday"] = 4] = "Friday";
        Days[Days["Saturday"] = 5] = "Saturday";
        Days[Days["Sunday"] = 6] = "Sunday";
    })(Days || (Days = {}));
    console.log(Days.Wednesday, 'TS');
    var day = Days.Thursday;
    day = 0;
    console.log(day, 'TS');
}
