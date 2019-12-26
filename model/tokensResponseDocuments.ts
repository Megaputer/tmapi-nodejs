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

import { TokensResponseSentences } from './tokensResponseSentences';

export class TokensResponseDocuments {
    /**
    * Index of document in input documents array
    */
    'id'?: number;
    /**
    * List of sentences
    */
    'sentences'?: Array<TokensResponseSentences>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "sentences",
            "baseName": "sentences",
            "type": "Array<TokensResponseSentences>"
        }    ];

    static getAttributeTypeMap() {
        return TokensResponseDocuments.attributeTypeMap;
    }
}

