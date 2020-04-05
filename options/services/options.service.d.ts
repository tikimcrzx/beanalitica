import { Model } from "mongoose";
import { Options } from "../models";
import { CompanyFilters } from "../../security/input-dto/company-filters.dto";
import { UpdateOptionsDTO } from "../input-dto/update-options.dto";
export declare class OptionsService {
    private readonly optionsModel;
    constructor(optionsModel: Model<Options>);
    find(filters: CompanyFilters): Promise<Options>;
    update(filters: CompanyFilters, optionsUpdated: UpdateOptionsDTO): Promise<Options>;
}
