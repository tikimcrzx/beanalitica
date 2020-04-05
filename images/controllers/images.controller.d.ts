import { RequestDecorator } from '../../security/decorators/request.decorator';
import { Response } from "express";
import { ImagesService } from '../services/images.service';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    uploadOrderSignature(image: any, req: RequestDecorator, res: Response): Promise<void>;
    findById(id: string, req: RequestDecorator, res: Response): Promise<void>;
}
