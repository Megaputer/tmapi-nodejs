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


export class TotalLimitConstantResponse {
    /**
    * The maximum number of text units that can be processed in all time
    */
    'nTULimit'?: number;
    /**
    * Counter of text units that have been already processed
    */
    'NTU'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nTULimit",
            "baseName": "NTULimit",
            "type": "number"
        },
        {
            "name": "NTU",
            "baseName": "NTU",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TotalLimitConstantResponse.attributeTypeMap;
    }
}
