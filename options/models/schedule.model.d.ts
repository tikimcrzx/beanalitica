import { WeekDay } from "../enums/weekday.enum";
export interface Schedule {
    weekDay: WeekDay;
    weekDayName: string;
    startHour: number;
    endHour: number;
    status: boolean;
}
