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

import localVarRequest = require('request');
import http = require('http');
import Promise = require('bluebird');

/* tslint:disable:no-unused-locals */
import { AuthenticationError } from '../model/authenticationError';
import { Documents } from '../model/documents';
import { InternalServerError } from '../model/internalServerError';
import { InvalidRequestParamsError } from '../model/invalidRequestParamsError';
import { NotEnoughResourcesError } from '../model/notEnoughResourcesError';
import { TaskInfo } from '../model/taskInfo';

import { ObjectSerializer, Authentication, HttpBasicAuth, ApiKeyAuth, OAuth, VoidAuth } from '../model/models';

let defaultBasePath = 'https://localhost:7008/tmapi/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum TasksApiApiKeys {
}

export class TasksApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'BasicAuth': new HttpBasicAuth(),
    }

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: TasksApiApiKeys, value: string) {
        (this.authentications as any)[TasksApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.BasicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.BasicAuth.password = password;
    }

    /**
     * To create a task for performing several operations with text documents, specify required operations in the \"operations\" attribute in the request body. Tasks should be separated by a comma. The list of operations supported with the server could be retrieved via the request \"server\".  Created tasks are available to users until they are deleted by the DELETE method or the server is restarted. After restarting the server it is not possible to get information, to delete, or to get the result of the created tasks. The tasks will cease to exist as if they were deleted by the DELETE method. 
     * @summary Create task
     * @param operations List of operations (languages, tokens, keywords, entities, sentiments, facts)
     * @param documents Documents to process
     * @param async Asynchorous execution flag: * &#x60;0&#x60; - Block execution until result is ready (**default**) * &#x60;1&#x60; - Return GUID of newly created task and run task asynchronously 
     * @param positions Positions format to be returned from server: - &#x60;none&#x60; - Don&#39;t return positions (**default**) - &#x60;symbol&#x60; - Symbol positions - &#x60;token&#x60; - Token positions 
     */
    public createTask (operations: Array<'languages' | 'tokens' | 'keywords' | 'entities' | 'sentiments' | 'facts'>, documents: Documents, async?: 0 | 1, positions?: 'none' | 'symbol' | 'token') : Promise<{ response: http.ClientResponse; body: any;  }> {
        const localVarPath = this.basePath + '/tasks';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'operations' is not null or undefined
        if (operations === null || operations === undefined) {
            throw new Error('Required parameter operations was null or undefined when calling createTask.');
        }

        // verify required parameter 'documents' is not null or undefined
        if (documents === null || documents === undefined) {
            throw new Error('Required parameter documents was null or undefined when calling createTask.');
        }

        if (operations !== undefined) {
            localVarQueryParameters['operations'] = ObjectSerializer.serialize(operations, "Array<'languages' | 'tokens' | 'keywords' | 'entities' | 'sentiments' | 'facts'>");
        }

        if (async !== undefined) {
            localVarQueryParameters['async'] = ObjectSerializer.serialize(async, "0 | 1");
        }

        if (positions !== undefined) {
            localVarQueryParameters['positions'] = ObjectSerializer.serialize(positions, "'none' | 'symbol' | 'token'");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters, qsStringifyOptions: {arrayFormat: 'repeat'},
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(documents, "Documents")
        };

        this.authentications.BasicAuth.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * The operation allows to delete current user’s tasks specified in the ids parameter. Deleting tasks saves the server disk space. 
     * @summary Delete tasks
     * @param ids List of task identifiers
     */
    public deleteTasks (ids: Array<string>) : Promise<{ response: http.ClientResponse; body: any;  }> {
        const localVarPath = this.basePath + '/tasks';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'ids' is not null or undefined
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling deleteTasks.');
        }

        if (ids !== undefined) {
            localVarQueryParameters['ids'] = ObjectSerializer.serialize(ids, "Array<string>");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters, qsStringifyOptions: {arrayFormat: 'repeat'},
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.BasicAuth.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * The operation allows to get the result of the specified task. The task GUID and relevant operations are required.  Before getting results of the task execution, first ensure that the task is completed (the done paremeter is 100, the error parameter is empty). 
     * @summary Task result
     * @param id Task identifier
     * @param operations List of operations (languages, tokens, keywords, entities, sentiments, facts)
     * @param positions Positions format to be returned from server: - &#x60;none&#x60; - Don&#39;t return positions (**default**) - &#x60;symbol&#x60; - Symbol positions - &#x60;token&#x60; - Token positions 
     */
    public getTaskResult (id: string, operations: Array<'languages' | 'tokens' | 'keywords' | 'entities' | 'sentiments' | 'facts'>, positions?: 'none' | 'symbol' | 'token') : Promise<{ response: http.ClientResponse; body: any;  }> {
        const localVarPath = this.basePath + '/tasks/result';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTaskResult.');
        }

        // verify required parameter 'operations' is not null or undefined
        if (operations === null || operations === undefined) {
            throw new Error('Required parameter operations was null or undefined when calling getTaskResult.');
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "string");
        }

        if (operations !== undefined) {
            localVarQueryParameters['operations'] = ObjectSerializer.serialize(operations, "Array<'languages' | 'tokens' | 'keywords' | 'entities' | 'sentiments' | 'facts'>");
        }

        if (positions !== undefined) {
            localVarQueryParameters['positions'] = ObjectSerializer.serialize(positions, "'none' | 'symbol' | 'token'");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters, qsStringifyOptions: {arrayFormat: 'repeat'},
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.BasicAuth.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * The operation allows to receive information about the specified tasks. A task unique identifier (GIUD) is required, which is returned when creating new asynchronous task. If the identifiers list is empty, the server will return information about all tasks of the current user. 
     * @summary Tasks information
     * @param ids List of task identifiers
     */
    public getTasksInfo (ids: Array<string>) : Promise<{ response: http.ClientResponse; body: TaskInfo;  }> {
        const localVarPath = this.basePath + '/tasks';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'ids' is not null or undefined
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling getTasksInfo.');
        }

        if (ids !== undefined) {
            localVarQueryParameters['ids'] = ObjectSerializer.serialize(ids, "Array<string>");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters, qsStringifyOptions: {arrayFormat: 'repeat'},
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.BasicAuth.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: TaskInfo;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "TaskInfo");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
