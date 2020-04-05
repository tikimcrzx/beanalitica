export declare enum WeekDay {
    SUNDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6
}
export declare function getAllWeekDays(): WeekDay[];
export declare function getAllWeekDaysNames(): string[];
export declare function getAllWeekDaysAsObjects(): {
    value: WeekDay;
    name: string;
}[];
