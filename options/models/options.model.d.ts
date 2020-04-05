import { Schedule } from "./schedule.model";
import { Branch, Company } from "../../companies/models/index";
import { Document } from "mongoose";
export interface Options extends Document {
    _id: string;
    schedules: [Schedule];
    branch: Branch | any;
    company: Company | any;
}
