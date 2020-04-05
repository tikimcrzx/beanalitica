import { BranchStatus } from '../enums/branch-status.enum';
import { Document } from 'mongoose';
import { Contact, Company } from './index';
export interface Branch extends Document {
    _id: string;
    name: string;
    address: string;
    schedule: string;
    contact: Contact;
    status: BranchStatus;
    company: Company;
    menu: [{
        image: string;
        name: string;
        ingredients: [{
            name: string;
        }];
    }];
}
