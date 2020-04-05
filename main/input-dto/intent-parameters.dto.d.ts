import { ParametersLocationDTO } from './parameters-location.dto';
import { ParametersScheduleDTO } from './parameters-schedule.dto';
export interface IntentParameterstDTO {
    readonly queryResult: {
        readonly queryText: string;
        readonly parameters: ParametersLocationDTO | ParametersScheduleDTO;
        readonly allRequiredParamsPresent: boolean;
        readonly fulfillmentText: string;
        readonly fulfillmentMessages: [{
            readonly quickReplies: {};
            readonly plataform: string;
        }, {
            readonly text: {};
        }];
        readonly outputContexts: [{
            readonly name: string;
            readonly parameters: any;
        }];
        readonly intent: {
            readonly name: string;
            readonly displayName: string;
        };
        readonly intentDetectionConfidence: string;
    };
}
