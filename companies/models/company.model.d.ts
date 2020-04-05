import { Document } from 'mongoose';
import { CompanyStatus } from '../enums/company-status.enum';
import { Contact } from './contact.model';
export interface Company extends Document {
    _id: string;
    name?: string;
    contact?: Contact;
    status?: CompanyStatus;
}
