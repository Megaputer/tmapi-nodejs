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

import { InvalidRequestParamsErrorError } from './invalidRequestParamsErrorError';

export class InvalidRequestParamsError {
    'error'?: InvalidRequestParamsErrorError;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "InvalidRequestParamsErrorError"
        }    ];

    static getAttributeTypeMap() {
        return InvalidRequestParamsError.attributeTypeMap;
    }
}

