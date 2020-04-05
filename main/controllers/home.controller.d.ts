import { Response } from 'express';
import { IntentParameterstDTO } from '../input-dto';
export declare class HomeController {
    home(intentParametersDTO: IntentParameterstDTO, res: Response): Promise<void>;
}
