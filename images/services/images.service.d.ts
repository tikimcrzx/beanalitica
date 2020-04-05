import { Model } from 'mongoose';
import { Image } from "../models/image.model";
import { CompanyFilters } from '../../security/input-dto/company-filters.dto';
import { CreateImageDTO } from "../input-dto/create-image.dto";
export declare class ImagesService {
    private readonly imageModel;
    constructor(imageModel: Model<Image>);
    create(filters: CompanyFilters, imageData: CreateImageDTO): Promise<Image>;
    findById(filters: CompanyFilters, id: string): Promise<Image>;
}
