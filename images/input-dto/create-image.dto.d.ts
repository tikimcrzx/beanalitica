/// <reference types="node" />
import { ImageDescriptions } from "../enums/image-descriptions.enum";
export interface CreateImageDTO {
    readonly description: ImageDescriptions;
    readonly data: Buffer;
    readonly contentType: string;
    readonly size: number;
}
