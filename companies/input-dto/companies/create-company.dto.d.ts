import { Contact } from '../../models';
import { CompanyStatus } from '../../enums/company-status.enum';
export interface CreateCompanyDTO {
    readonly name: string;
    readonly status: CompanyStatus;
    readonly contact: Contact;
}
