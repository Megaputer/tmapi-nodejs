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

import { KeywordsResponseKeywords } from './keywordsResponseKeywords';

export class KeywordsResponseDocuments {
    /**
    * Index of document in input documents array
    */
    'id'?: number;
    /**
    * Result of keywords operation
    */
    'keywords'?: Array<KeywordsResponseKeywords>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "keywords",
            "baseName": "keywords",
            "type": "Array<KeywordsResponseKeywords>"
        }    ];

    static getAttributeTypeMap() {
        return KeywordsResponseDocuments.attributeTypeMap;
    }
}

