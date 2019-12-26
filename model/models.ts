export * from './asyncTaskResponse';
export * from './authenticationError';
export * from './authenticationErrorError';
export * from './changePasswordError';
export * from './changePasswordErrorError';
export * from './changePasswordRequest';
export * from './deleteTasksError';
export * from './deleteTasksSuccess';
export * from './document';
export * from './documents';
export * from './entitiesResponse';
export * from './entitiesResponseDocuments';
export * from './entitiesResponseEntities';
export * from './entitiesResponsePositions';
export * from './factsResponse';
export * from './factsResponseDocuments';
export * from './factsResponseFacts';
export * from './factsResponsePositions';
export * from './getTaskResultError';
export * from './getTaskResultSuccess';
export * from './internalServerError';
export * from './internalServerErrorError';
export * from './invalidRequestParamsError';
export * from './invalidRequestParamsErrorError';
export * from './keywordsResponse';
export * from './keywordsResponseDocuments';
export * from './keywordsResponseKeywords';
export * from './keywordsResponsePositions';
export * from './languagesResponse';
export * from './languagesResponseDocuments';
export * from './notEnoughResourcesError';
export * from './notEnoughResourcesErrorError';
export * from './perOperationLimitConstantResponse';
export * from './perOperationLimitPeriodic1Response';
export * from './perOperationLimitPeriodic2Response';
export * from './perOperationLimitResponse';
export * from './sentimentsResponse';
export * from './sentimentsResponseAttributes';
export * from './sentimentsResponseDocuments';
export * from './sentimentsResponsePositions';
export * from './sentimentsResponseSentiments';
export * from './serverInfo';
export * from './syncTaskResponse';
export * from './taskInfo';
export * from './taskInfoTasks';
export * from './tokensResponse';
export * from './tokensResponseDocuments';
export * from './tokensResponsePosition';
export * from './tokensResponseSentences';
export * from './tokensResponseTokens';
export * from './totalLimitConstantResponse';
export * from './totalLimitPeriodic1Response';
export * from './totalLimitPeriodic2Response';
export * from './totalLimitResponse';

import localVarRequest = require('request');

import { AsyncTaskResponse } from './asyncTaskResponse';
import { AuthenticationError } from './authenticationError';
import { AuthenticationErrorError } from './authenticationErrorError';
import { ChangePasswordError } from './changePasswordError';
import { ChangePasswordErrorError } from './changePasswordErrorError';
import { ChangePasswordRequest } from './changePasswordRequest';
import { DeleteTasksError } from './deleteTasksError';
import { DeleteTasksSuccess } from './deleteTasksSuccess';
import { Document } from './document';
import { Documents } from './documents';
import { EntitiesResponse } from './entitiesResponse';
import { EntitiesResponseDocuments } from './entitiesResponseDocuments';
import { EntitiesResponseEntities } from './entitiesResponseEntities';
import { EntitiesResponsePositions } from './entitiesResponsePositions';
import { FactsResponse } from './factsResponse';
import { FactsResponseDocuments } from './factsResponseDocuments';
import { FactsResponseFacts } from './factsResponseFacts';
import { FactsResponsePositions } from './factsResponsePositions';
import { GetTaskResultError } from './getTaskResultError';
import { GetTaskResultSuccess } from './getTaskResultSuccess';
import { InternalServerError } from './internalServerError';
import { InternalServerErrorError } from './internalServerErrorError';
import { InvalidRequestParamsError } from './invalidRequestParamsError';
import { InvalidRequestParamsErrorError } from './invalidRequestParamsErrorError';
import { KeywordsResponse } from './keywordsResponse';
import { KeywordsResponseDocuments } from './keywordsResponseDocuments';
import { KeywordsResponseKeywords } from './keywordsResponseKeywords';
import { KeywordsResponsePositions } from './keywordsResponsePositions';
import { LanguagesResponse } from './languagesResponse';
import { LanguagesResponseDocuments } from './languagesResponseDocuments';
import { NotEnoughResourcesError } from './notEnoughResourcesError';
import { NotEnoughResourcesErrorError } from './notEnoughResourcesErrorError';
import { PerOperationLimitConstantResponse } from './perOperationLimitConstantResponse';
import { PerOperationLimitPeriodic1Response } from './perOperationLimitPeriodic1Response';
import { PerOperationLimitPeriodic2Response } from './perOperationLimitPeriodic2Response';
import { PerOperationLimitResponse } from './perOperationLimitResponse';
import { SentimentsResponse } from './sentimentsResponse';
import { SentimentsResponseAttributes } from './sentimentsResponseAttributes';
import { SentimentsResponseDocuments } from './sentimentsResponseDocuments';
import { SentimentsResponsePositions } from './sentimentsResponsePositions';
import { SentimentsResponseSentiments } from './sentimentsResponseSentiments';
import { ServerInfo } from './serverInfo';
import { SyncTaskResponse } from './syncTaskResponse';
import { TaskInfo } from './taskInfo';
import { TaskInfoTasks } from './taskInfoTasks';
import { TokensResponse } from './tokensResponse';
import { TokensResponseDocuments } from './tokensResponseDocuments';
import { TokensResponsePosition } from './tokensResponsePosition';
import { TokensResponseSentences } from './tokensResponseSentences';
import { TokensResponseTokens } from './tokensResponseTokens';
import { TotalLimitConstantResponse } from './totalLimitConstantResponse';
import { TotalLimitPeriodic1Response } from './totalLimitPeriodic1Response';
import { TotalLimitPeriodic2Response } from './totalLimitPeriodic2Response';
import { TotalLimitResponse } from './totalLimitResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];
                 
let enumsMap: {[index: string]: any} = {
        "Document.ExtensionEnum": Document.ExtensionEnum,
        "KeywordsResponseKeywords.PartOfSpeechEnum": KeywordsResponseKeywords.PartOfSpeechEnum,
        "PerOperationLimitPeriodic1Response.NTUPeriod1Enum": PerOperationLimitPeriodic1Response.NTUPeriod1Enum,
        "PerOperationLimitPeriodic2Response.NTUPeriod2Enum": PerOperationLimitPeriodic2Response.NTUPeriod2Enum,
        "SentimentsResponseSentiments.TypeEnum": SentimentsResponseSentiments.TypeEnum,
        "TokensResponseTokens.PartOfSpeechEnum": TokensResponseTokens.PartOfSpeechEnum,
        "TokensResponseTokens.IsExtensionEnum": TokensResponseTokens.IsExtensionEnum,
        "TotalLimitPeriodic1Response.NTUPeriod1Enum": TotalLimitPeriodic1Response.NTUPeriod1Enum,
        "TotalLimitPeriodic2Response.NTUPeriod2Enum": TotalLimitPeriodic2Response.NTUPeriod2Enum,
}

let typeMap: {[index: string]: any} = {
    "AsyncTaskResponse": AsyncTaskResponse,
    "AuthenticationError": AuthenticationError,
    "AuthenticationErrorError": AuthenticationErrorError,
    "ChangePasswordError": ChangePasswordError,
    "ChangePasswordErrorError": ChangePasswordErrorError,
    "ChangePasswordRequest": ChangePasswordRequest,
    "DeleteTasksError": DeleteTasksError,
    "DeleteTasksSuccess": DeleteTasksSuccess,
    "Document": Document,
    "Documents": Documents,
    "EntitiesResponse": EntitiesResponse,
    "EntitiesResponseDocuments": EntitiesResponseDocuments,
    "EntitiesResponseEntities": EntitiesResponseEntities,
    "EntitiesResponsePositions": EntitiesResponsePositions,
    "FactsResponse": FactsResponse,
    "FactsResponseDocuments": FactsResponseDocuments,
    "FactsResponseFacts": FactsResponseFacts,
    "FactsResponsePositions": FactsResponsePositions,
    "GetTaskResultError": GetTaskResultError,
    "GetTaskResultSuccess": GetTaskResultSuccess,
    "InternalServerError": InternalServerError,
    "InternalServerErrorError": InternalServerErrorError,
    "InvalidRequestParamsError": InvalidRequestParamsError,
    "InvalidRequestParamsErrorError": InvalidRequestParamsErrorError,
    "KeywordsResponse": KeywordsResponse,
    "KeywordsResponseDocuments": KeywordsResponseDocuments,
    "KeywordsResponseKeywords": KeywordsResponseKeywords,
    "KeywordsResponsePositions": KeywordsResponsePositions,
    "LanguagesResponse": LanguagesResponse,
    "LanguagesResponseDocuments": LanguagesResponseDocuments,
    "NotEnoughResourcesError": NotEnoughResourcesError,
    "NotEnoughResourcesErrorError": NotEnoughResourcesErrorError,
    "PerOperationLimitConstantResponse": PerOperationLimitConstantResponse,
    "PerOperationLimitPeriodic1Response": PerOperationLimitPeriodic1Response,
    "PerOperationLimitPeriodic2Response": PerOperationLimitPeriodic2Response,
    "PerOperationLimitResponse": PerOperationLimitResponse,
    "SentimentsResponse": SentimentsResponse,
    "SentimentsResponseAttributes": SentimentsResponseAttributes,
    "SentimentsResponseDocuments": SentimentsResponseDocuments,
    "SentimentsResponsePositions": SentimentsResponsePositions,
    "SentimentsResponseSentiments": SentimentsResponseSentiments,
    "ServerInfo": ServerInfo,
    "SyncTaskResponse": SyncTaskResponse,
    "TaskInfo": TaskInfo,
    "TaskInfoTasks": TaskInfoTasks,
    "TokensResponse": TokensResponse,
    "TokensResponseDocuments": TokensResponseDocuments,
    "TokensResponsePosition": TokensResponsePosition,
    "TokensResponseSentences": TokensResponseSentences,
    "TokensResponseTokens": TokensResponseTokens,
    "TotalLimitConstantResponse": TotalLimitConstantResponse,
    "TotalLimitPeriodic1Response": TotalLimitPeriodic1Response,
    "TotalLimitPeriodic2Response": TotalLimitPeriodic2Response,
    "TotalLimitResponse": TotalLimitResponse,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            
            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}