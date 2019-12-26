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

import { SentimentsResponseSentiments } from './sentimentsResponseSentiments';

export class SentimentsResponseDocuments {
    /**
    * Index of document in input documents array
    */
    'id'?: number;
    /**
    * Result of sentiments operation
    */
    'sentiments'?: Array<SentimentsResponseSentiments>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "sentiments",
            "baseName": "sentiments",
            "type": "Array<SentimentsResponseSentiments>"
        }    ];

    static getAttributeTypeMap() {
        return SentimentsResponseDocuments.attributeTypeMap;
    }
}
