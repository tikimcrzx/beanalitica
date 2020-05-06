import { Company } from '../../models';
import { BranchStatus } from '../../enums/branch-status.enum';
import { Dish } from '../../../dishes/models';
export interface CreateBranchDTO {
    readonly name: string;
    readonly shedule: string;
    readonly status: BranchStatus;
    readonly company: Company;
    readonly menu: Dish[];
}
