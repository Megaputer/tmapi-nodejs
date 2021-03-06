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


/**
* Sentiment attributes. Depends on sentiment type
*/
export class SentimentsResponseAttributes {
    /**
    * Either the speaker himself or another person (a group of people) whose opinion is shared. The subject of evaluation is not always mentioned in a text, especially when we deal with informal texts, such as forums, blogs and social network posts. 
    */
    'subject'?: string;
    /**
    * Implies the emotional judgment of a subject to some topic, an emotional reaction to something or the overall emotional tone of an utterance. Evaluation expresses an attitude of a subjeсt to a particular object, emotional response to something. 
    */
    'evaluation'?: string;
    /**
    * It is something which is evaluated. Similar to the subject of evaluation, objects may not always be mentioned.
    */
    'object'?: string;
    /**
    * The main words in a phrase.
    */
    'headObject'?: string;
    /**
    * It is used to refer to the degree of positive evaluation ranging from 1 to 5 (1-rather positivem 5 - extremely positive) and negative evaluation ranging from -1 to -5 (-1 rather negative, - 5 - extremely negative). 
    */
    'degree'?: number;
    /**
    * It is a word or phrase that defines what characteristic of the object is evaluated. It allows users to summarize different ways of expressing the same entity in one thematic section. 
    */
    'aspect'?: string;
    /**
    * It represents measure of how sure TM API Server in its conclusion. Confidence is measured on scale of 0.0 to 1.0.
    */
    'confidence'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subject",
            "baseName": "Subject",
            "type": "string"
        },
        {
            "name": "evaluation",
            "baseName": "Evaluation",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "Object",
            "type": "string"
        },
        {
            "name": "headObject",
            "baseName": "HeadObject",
            "type": "string"
        },
        {
            "name": "degree",
            "baseName": "Degree",
            "type": "number"
        },
        {
            "name": "aspect",
            "baseName": "Aspect",
            "type": "string"
        },
        {
            "name": "confidence",
            "baseName": "Confidence",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SentimentsResponseAttributes.attributeTypeMap;
    }
}

