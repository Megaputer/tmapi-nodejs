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


export class SentimentsResponsePositions {
    /**
    * Sentence index
    */
    'sentence'?: number;
    /**
    * Index of first token of sentiment
    */
    'begin'?: number;
    /**
    * Number of tokens in sentiment
    */
    'length'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sentence",
            "baseName": "sentence",
            "type": "number"
        },
        {
            "name": "begin",
            "baseName": "begin",
            "type": "number"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SentimentsResponsePositions.attributeTypeMap;
    }
}

