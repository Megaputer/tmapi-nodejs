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


export class TaskInfoTasks {
    /**
    * An identifier of the task, which this element shows information about
    */
    'id'?: string;
    /**
    * UTC time of the task creation (not starting time, since starting time may be delayed)
    */
    'created'?: string;
    /**
    * UTC time when the task data were changed. Typically it is the time when the value in the done parameter were changed. If done= 100, then modified stores the time when the task is completed 
    */
    'modified'?: string;
    /**
    * UTC time when the task execution results were last requested. Initially this value is the time of task creation (created)
    */
    'lastAccessed'?: string;
    /**
    * Progress percentage of the task performance. When it is 100, then the task is completed. Check this parameter to find out if the task is completed or not 
    */
    'done'?: number;
    /**
    * A task execution error. If done = 100 and this parameter is not empty, then the task has ended with an error and it cannot provide any results 
    */
    'error'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "string"
        },
        {
            "name": "modified",
            "baseName": "modified",
            "type": "string"
        },
        {
            "name": "lastAccessed",
            "baseName": "lastAccessed",
            "type": "string"
        },
        {
            "name": "done",
            "baseName": "done",
            "type": "number"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TaskInfoTasks.attributeTypeMap;
    }
}

