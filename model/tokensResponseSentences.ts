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

import { TokensResponseTokens } from './tokensResponseTokens';

export class TokensResponseSentences {
    /**
    * Sentence tokens
    */
    'tokens'?: Array<TokensResponseTokens>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<TokensResponseTokens>"
        }    ];

    static getAttributeTypeMap() {
        return TokensResponseSentences.attributeTypeMap;
    }
}

