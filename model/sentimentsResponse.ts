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

import { SentimentsResponseDocuments } from './sentimentsResponseDocuments';

export class SentimentsResponse {
    'documents'?: Array<SentimentsResponseDocuments>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Array<SentimentsResponseDocuments>"
        }    ];

    static getAttributeTypeMap() {
        return SentimentsResponse.attributeTypeMap;
    }
}

