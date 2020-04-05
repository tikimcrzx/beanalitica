import { Contact } from '../../models';
import { Dish } from '../../../dishes/models';
import { BranchStatus } from '../../enums/branch-status.enum';
export interface UpdateBranchDTO {
    readonly name: string;
    readonly shedule: string;
    readonly status: string;
    readonly contact: Contact;
    readonly staus: BranchStatus;
    readonly menu: Dish[];
}
