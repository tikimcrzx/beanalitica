import { RequestDecorator } from "../../security/decorators/request.decorator";
import { Response } from "express";
import { OptionsService } from "../services/options.service";
import { UpdateOptionsDTO } from "../input-dto/update-options.dto";
export declare class OptionsController {
    private readonly optionsService;
    constructor(optionsService: OptionsService);
    find(req: RequestDecorator, res: Response): Promise<void>;
    update(updateOptionsDto: UpdateOptionsDTO, req: RequestDecorator, res: Response): Promise<void>;
}
