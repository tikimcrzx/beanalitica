/// <reference types="node" />
import { ImageDescriptions } from "../enums/image-descriptions.enum";
import { Document } from "mongoose";
import { Company, Branch } from "../../companies/models";
export interface Image extends Document {
    description: ImageDescriptions;
    data: Buffer;
    contentType: string;
    size: number;
    branch: Branch | any;
    company: Company | any;
}
