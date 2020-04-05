import { Log } from '../models/log.model';
import { CreateLogDto } from '../input-dto/create-log.dto';
import { Model } from 'mongoose';
import { Logger } from "winston";
export declare class CustomLoggerService {
    private readonly logger;
    private readonly logModel;
    constructor(logger: Logger, logModel: Model<Log>);
    logError(logData: CreateLogDto): Promise<Log>;
}
