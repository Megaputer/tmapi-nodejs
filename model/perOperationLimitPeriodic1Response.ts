/**
 * Megaputer Text Mining API
 * Megaputer Text Mining API
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PerOperationLimitPeriodic1Response {
    /**
    * A period when limitations apply
    */
    'nTUPeriod1'?: PerOperationLimitPeriodic1Response.NTUPeriod1Enum;
    /**
    * A maximum number of requests in the specified period
    */
    'nTUInPeriod1Limit'?: number;
    /**
    * A number of requests that have already been processed for operation Text parsing
    */
    'nTUInPeriod1Tokens'?: number;
    /**
    * A number of requests that have already been processed for operation Keywords extraction
    */
    'nTUInPeriod1Keywords'?: number;
    /**
    * A number of requests that have already been processed for operation Entities extraction
    */
    'nTUInPeriod1Entities'?: number;
    /**
    * A number of requests that have already been processed for operation Language detection
    */
    'nTUInPeriod1Languages'?: number;
    /**
    * A number of requests that have already been processed for operation Sentiments analysis
    */
    'nTUInPeriod1Sentiments'?: number;
    /**
    * A number of requests that have already been processed for operation Facts extraction
    */
    'nTUInPeriod1Facts'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nTUPeriod1",
            "baseName": "NTUPeriod1",
            "type": "PerOperationLimitPeriodic1Response.NTUPeriod1Enum"
        },
        {
            "name": "nTUInPeriod1Limit",
            "baseName": "NTUInPeriod1Limit",
            "type": "number"
        },
        {
            "name": "nTUInPeriod1Tokens",
            "baseName": "NTUInPeriod1Tokens",
            "type": "number"
        },
        {
            "name": "nTUInPeriod1Keywords",
            "baseName": "NTUInPeriod1Keywords",
            "type": "number"
        },
        {
            "name": "nTUInPeriod1Entities",
            "baseName": "NTUInPeriod1Entities",
            "type": "number"
        },
        {
            "name": "nTUInPeriod1Languages",
            "baseName": "NTUInPeriod1Languages",
            "type": "number"
        },
        {
            "name": "nTUInPeriod1Sentiments",
            "baseName": "NTUInPeriod1Sentiments",
            "type": "number"
        },
        {
            "name": "nTUInPeriod1Facts",
            "baseName": "NTUInPeriod1Facts",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PerOperationLimitPeriodic1Response.attributeTypeMap;
    }
}

export namespace PerOperationLimitPeriodic1Response {
    export enum NTUPeriod1Enum {
        Second = <any> 'Second',
        Minute = <any> 'Minute',
        Hour = <any> 'Hour',
        Day = <any> 'Day',
        Month = <any> 'Month'
    }
}
