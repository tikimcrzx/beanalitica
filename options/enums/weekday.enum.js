"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["SUNDAY"] = 0] = "SUNDAY";
    WeekDay[WeekDay["MONDAY"] = 1] = "MONDAY";
    WeekDay[WeekDay["TUESDAY"] = 2] = "TUESDAY";
    WeekDay[WeekDay["WEDNESDAY"] = 3] = "WEDNESDAY";
    WeekDay[WeekDay["THURSDAY"] = 4] = "THURSDAY";
    WeekDay[WeekDay["FRIDAY"] = 5] = "FRIDAY";
    WeekDay[WeekDay["SATURDAY"] = 6] = "SATURDAY";
})(WeekDay = exports.WeekDay || (exports.WeekDay = {}));
function getAllWeekDays() {
    return [
        WeekDay.SUNDAY,
        WeekDay.MONDAY,
        WeekDay.TUESDAY,
        WeekDay.WEDNESDAY,
        WeekDay.THURSDAY,
        WeekDay.FRIDAY,
        WeekDay.SATURDAY
    ];
}
exports.getAllWeekDays = getAllWeekDays;
function getAllWeekDaysNames() {
    return [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];
}
exports.getAllWeekDaysNames = getAllWeekDaysNames;
function getAllWeekDaysAsObjects() {
    return [
        { value: WeekDay.SUNDAY, name: "Domingo" },
        { value: WeekDay.MONDAY, name: "Lunes" },
        { value: WeekDay.TUESDAY, name: "Martes" },
        { value: WeekDay.WEDNESDAY, name: "Miércoles" },
        { value: WeekDay.THURSDAY, name: "Jueves" },
        { value: WeekDay.FRIDAY, name: "Viernes" },
        { value: WeekDay.SATURDAY, name: "Sábado" }
    ];
}
exports.getAllWeekDaysAsObjects = getAllWeekDaysAsObjects;
//# sourceMappingURL=weekday.enum.js.map