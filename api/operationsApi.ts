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
import { EntitiesResponse } from '../model/entitiesResponse';
import { FactsResponse } from '../model/factsResponse';
import { InternalServerError } from '../model/internalServerError';
import { InvalidRequestParamsError } from '../model/invalidRequestParamsError';
import { KeywordsResponse } from '../model/keywordsResponse';
import { LanguagesResponse } from '../model/languagesResponse';
import { SentimentsResponse } from '../model/sentimentsResponse';
import { TokensResponse } from '../model/tokensResponse';

import { ObjectSerializer, Authentication, HttpBasicAuth, ApiKeyAuth, OAuth, VoidAuth } from '../model/models';

let defaultBasePath = 'https://localhost:7008/tmapi/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum OperationsApiApiKeys {
}

export class OperationsApi {
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

    public setApiKey(key: OperationsApiApiKeys, value: string) {
        (this.authentications as any)[OperationsApiApiKeys[key]].apiKey = value;
    }
    set username(username: string) {
        this.authentications.BasicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.BasicAuth.password = password;
    }

    /**
     * The operation extracts entities from each file.
     * @summary Entities extraction
     * @param documents Documents to process
     * @param positions Positions format to be returned from server: - &#x60;none&#x60; - Don&#39;t return positions (**default**) - &#x60;symbol&#x60; - Symbol positions - &#x60;token&#x60; - Token positions 
     */
    public extractDocumentsEntities (documents: Documents, positions?: 'none' | 'symbol' | 'token') : Promise<{ response: http.ClientResponse; body: EntitiesResponse;  }> {
        const localVarPath = this.basePath + '/operations/entities';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'documents' is not null or undefined
        if (documents === null || documents === undefined) {
            throw new Error('Required parameter documents was null or undefined when calling extractDocumentsEntities.');
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
        return new Promise<{ response: http.ClientResponse; body: EntitiesResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "EntitiesResponse");
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
     * The operation extracts facts from each file. The term \"fact\" is used to denote phenomena, events, notions and relations between them which may be of interest to users.  
     * @summary Facts extraction
     * @param documents Documents to process
     * @param positions Positions format to be returned from server: - &#x60;none&#x60; - Don&#39;t return positions (**default**) - &#x60;symbol&#x60; - Symbol positions - &#x60;token&#x60; - Token positions 
     */
    public extractDocumentsFacts (documents: Documents, positions?: 'none' | 'symbol' | 'token') : Promise<{ response: http.ClientResponse; body: FactsResponse;  }> {
        const localVarPath = this.basePath + '/operations/facts';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'documents' is not null or undefined
        if (documents === null || documents === undefined) {
            throw new Error('Required parameter documents was null or undefined when calling extractDocumentsFacts.');
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
        return new Promise<{ response: http.ClientResponse; body: FactsResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "FactsResponse");
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
     * The operation explores often mentioned terms in each file. The response returns keywords and other statistics extracted from each file.
     * @summary Keywords extraction
     * @param documents Documents to process
     * @param positions Positions format to be returned from server: - &#x60;none&#x60; - Don&#39;t return positions (**default**) - &#x60;symbol&#x60; - Symbol positions - &#x60;token&#x60; - Token positions 
     */
    public extractDocumentsKeywords (documents: Documents, positions?: 'none' | 'symbol' | 'token') : Promise<{ response: http.ClientResponse; body: KeywordsResponse;  }> {
        const localVarPath = this.basePath + '/operations/keywords';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'documents' is not null or undefined
        if (documents === null || documents === undefined) {
            throw new Error('Required parameter documents was null or undefined when calling extractDocumentsKeywords.');
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
        return new Promise<{ response: http.ClientResponse; body: KeywordsResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "KeywordsResponse");
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
     * The operation extracts opinions and emotions related to something, identifies the subject, the object of evaluation and the evaluation itself in each file.  
     * @summary Sentiments analysis
     * @param documents Documents to process
     * @param positions Positions format to be returned from server: - &#x60;none&#x60; - Don&#39;t return positions (**default**) - &#x60;symbol&#x60; - Symbol positions - &#x60;token&#x60; - Token positions 
     */
    public extractDocumentsSentiments (documents: Documents, positions?: 'none' | 'symbol' | 'token') : Promise<{ response: http.ClientResponse; body: SentimentsResponse;  }> {
        const localVarPath = this.basePath + '/operations/sentiments';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'documents' is not null or undefined
        if (documents === null || documents === undefined) {
            throw new Error('Required parameter documents was null or undefined when calling extractDocumentsSentiments.');
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
        return new Promise<{ response: http.ClientResponse; body: SentimentsResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "SentimentsResponse");
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
     * Parse text in each file. The response returns the text which is divided into tokens and sentences, conducts morphological analysis, determines parts of speech, lemmas, etc. 
     * @summary Text parsing
     * @param documents Documents to process
     */
    public extractDocumentsTokens (documents: Documents) : Promise<{ response: http.ClientResponse; body: TokensResponse;  }> {
        const localVarPath = this.basePath + '/operations/tokens';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'documents' is not null or undefined
        if (documents === null || documents === undefined) {
            throw new Error('Required parameter documents was null or undefined when calling extractDocumentsTokens.');
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
        return new Promise<{ response: http.ClientResponse; body: TokensResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "TokensResponse");
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
     * The operation extracts entities from the text document. For example, an entity may represent a person’s name, a name of an organization, an e-mail address, a phone number, or a geographical location.  
     * @summary Entities extraction
     * @param text Document text to process
     * @param positions Positions format to be returned from server: - &#x60;none&#x60; - Don&#39;t return positions (**default**) - &#x60;symbol&#x60; - Symbol positions - &#x60;token&#x60; - Token positions 
     */
    public extractEntities (text: string, positions?: 'none' | 'symbol' | 'token') : Promise<{ response: http.ClientResponse; body: EntitiesResponse;  }> {
        const localVarPath = this.basePath + '/operations/entities';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new Error('Required parameter text was null or undefined when calling extractEntities.');
        }

        if (text !== undefined) {
            localVarQueryParameters['text'] = ObjectSerializer.serialize(text, "string");
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
        return new Promise<{ response: http.ClientResponse; body: EntitiesResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "EntitiesResponse");
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
     * The operation extracts facts from the text. The term \"fact\" is used to denote phenomena, events, notions and relations between them which may be of interest to users.
     * @summary Facts extraction
     * @param text Document text to process
     * @param positions Positions format to be returned from server: - &#x60;none&#x60; - Don&#39;t return positions (**default**) - &#x60;symbol&#x60; - Symbol positions - &#x60;token&#x60; - Token positions 
     */
    public extractFacts (text: string, positions?: 'none' | 'symbol' | 'token') : Promise<{ response: http.ClientResponse; body: FactsResponse;  }> {
        const localVarPath = this.basePath + '/operations/facts';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new Error('Required parameter text was null or undefined when calling extractFacts.');
        }

        if (text !== undefined) {
            localVarQueryParameters['text'] = ObjectSerializer.serialize(text, "string");
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
        return new Promise<{ response: http.ClientResponse; body: FactsResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "FactsResponse");
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
     * The operation explores often mentioned terms in the text. The response returns keywords and other statistics extracted from the text.
     * @summary Keywords extraction
     * @param text Document text to process
     * @param positions Positions format to be returned from server: - &#x60;none&#x60; - Don&#39;t return positions (**default**) - &#x60;symbol&#x60; - Symbol positions - &#x60;token&#x60; - Token positions 
     */
    public extractKeywords (text: string, positions?: 'none' | 'symbol' | 'token') : Promise<{ response: http.ClientResponse; body: KeywordsResponse;  }> {
        const localVarPath = this.basePath + '/operations/keywords';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new Error('Required parameter text was null or undefined when calling extractKeywords.');
        }

        if (text !== undefined) {
            localVarQueryParameters['text'] = ObjectSerializer.serialize(text, "string");
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
        return new Promise<{ response: http.ClientResponse; body: KeywordsResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "KeywordsResponse");
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
     * Extract sentiments from document
     * @summary Sentiments analysis
     * @param text Document text to process
     * @param positions Positions format to be returned from server: - &#x60;none&#x60; - Don&#39;t return positions (**default**) - &#x60;symbol&#x60; - Symbol positions - &#x60;token&#x60; - Token positions 
     */
    public extractSentiments (text: string, positions?: 'none' | 'symbol' | 'token') : Promise<{ response: http.ClientResponse; body: SentimentsResponse;  }> {
        const localVarPath = this.basePath + '/operations/sentiments';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new Error('Required parameter text was null or undefined when calling extractSentiments.');
        }

        if (text !== undefined) {
            localVarQueryParameters['text'] = ObjectSerializer.serialize(text, "string");
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
        return new Promise<{ response: http.ClientResponse; body: SentimentsResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "SentimentsResponse");
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
     * Parse document text. The response returns the text which is divided into tokens and sentences, conducts morphological analysis, determines parts of speech, lemmas, etc. 
     * @summary Text parsing
     * @param text Document text to process
     */
    public extractTokens (text: string) : Promise<{ response: http.ClientResponse; body: TokensResponse;  }> {
        const localVarPath = this.basePath + '/operations/tokens';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new Error('Required parameter text was null or undefined when calling extractTokens.');
        }

        if (text !== undefined) {
            localVarQueryParameters['text'] = ObjectSerializer.serialize(text, "string");
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
        return new Promise<{ response: http.ClientResponse; body: TokensResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "TokensResponse");
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
     * Automatically determine the language of each file.  The text encoding format of source files with the .txt extension must be strictly UTF-8. Otherwise, requests will not be executed. 
     * @summary Language detection
     * @param documents Documents to process
     */
    public getDocumentsLanguages (documents: Documents) : Promise<{ response: http.ClientResponse; body: LanguagesResponse;  }> {
        const localVarPath = this.basePath + '/operations/languages';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'documents' is not null or undefined
        if (documents === null || documents === undefined) {
            throw new Error('Required parameter documents was null or undefined when calling getDocumentsLanguages.');
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
        return new Promise<{ response: http.ClientResponse; body: LanguagesResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "LanguagesResponse");
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
     * Detect the language of text documents
     * @summary Language detection
     * @param text Document text to process
     */
    public getLanguages (text: string) : Promise<{ response: http.ClientResponse; body: LanguagesResponse;  }> {
        const localVarPath = this.basePath + '/operations/languages';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new Error('Required parameter text was null or undefined when calling getLanguages.');
        }

        if (text !== undefined) {
            localVarQueryParameters['text'] = ObjectSerializer.serialize(text, "string");
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
        return new Promise<{ response: http.ClientResponse; body: LanguagesResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "LanguagesResponse");
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