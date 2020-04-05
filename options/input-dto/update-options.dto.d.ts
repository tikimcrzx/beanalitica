import { WeekDay } from "../enums/weekday.enum";
export interface UpdateOptionsDTO {
    readonly _id: string;
    readonly schedules: [{
        weekDay: WeekDay;
        weekDayName: string;
        startHour: number;
        endHour: number;
        status: boolean;
    }];
}
