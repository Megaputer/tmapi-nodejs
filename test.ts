import * as tmapi from './api';

// turn off SSL authorization
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// authentificaton data
let USER = 'user';
let PASSWORD = ''; // default
let HOST = '';//'http://localhost:7007/tmapi/v1';

function createApi(apiType : string) {
    let api = new tmapi[apiType];
    if (USER != '')
        api.username = USER;
    if (PASSWORD != '')
       api.password = PASSWORD;
    if (HOST != '')
       api.basePath = HOST;
    return api;
}

let texts : string[] = [
    'Elvis Presley was born in Tupelo, Mississippi.', 
    'Elvis Presley was an American singer'];    

// base64 encoded texts
let testDocs = new tmapi.Documents();
testDocs.files = new Array<tmapi.Document>();
texts.forEach(element => {
    let document = new tmapi.Document;
    document.content = Buffer.from(element).toString('base64');
    testDocs.files!.push(document);
});

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

var assert = require('assert');

// TEST SERVER
describe('TestServer', () => {
    // test server information
    it('TestServerInfo', async function() {       
        let server = createApi('ServerApi');
        let gsi = await server.getServerInfo();
        assert(gsi.body.languages!.length > 0);
        assert(gsi.body.operations!.length > 0);
    });

    // test limits
    it('TestLimits', async function() {       
        let server = createApi('LimitsApi');
        let result = await server.getLimits();
        let limits : any = result.body.limits;
        assert(isEmpty(limits));
    });
});

// TEST OPERATIONS
describe('TestOperations', function() {  
    this.timeout(100000);
    let operations = createApi('OperationsApi');

    // test language detection
    it('TestLanguageDetection', async function() {        
        let result = await operations.getLanguages(texts[0]);
        let documents : any = result.body.documents;
        assert(documents.length == 1);
        assert(documents[0].language == "English");
    });

    it('TestDocumentsLanguageDetection', async function() {        
        let result = await operations.getDocumentsLanguages(testDocs);
        let documents : any = result.body.documents;
        let docsCount = testDocs.files!.length;
        assert(documents.length == docsCount);
        for (let i = 0; i < docsCount; ++i)
            assert(documents[i].language == "English");

    });

    // test tokens
    it('TestTokens', async function() {        
        let result = await operations.extractTokens(texts[0]);
        let documents : any = result.body.documents;
        assert(documents.length == 1);
        assert(documents[0].sentences.length > 0);
        assert(documents[0].sentences[0].tokens.length > 0);
    });

    it('TestDocumentTokens', async function() {        
        let result = await operations.extractDocumentsTokens(testDocs);
        let documents : any = result.body.documents;
        assert(documents.length == testDocs.files!.length);
        assert(documents[0].sentences.length > 0);
        assert(documents[0].sentences[0].tokens.length > 0);
    });

    // operations
    function testOperation(testName : string, operation, property, text : string) {
        it(testName, async function() {        
            let result = await operations[operation](text);
            let documents : any = result.body.documents;
            assert(documents.length == 1);
            assert(documents[0][property].length > 0);
        });            
    }

    function testDocumentsOperation(testName: string, operation, property, textDocs : tmapi.Documents) {
        it(testName, async function() {        
            let result = await operations[operation](textDocs);
            let documents : any = result.body.documents;
            let docsCount = testDocs.files!.length;
            assert(documents.length == docsCount);
            for (let i = 0; i < docsCount; ++i)
                assert(documents[i][property].length > 0);
        });    
    }

    // keywords
    testOperation('TestKeywords', 'extractKeywords', 'keywords', texts[0]);
    testDocumentsOperation('TestDocumentsKeywords', 'extractDocumentsKeywords', 'keywords', testDocs);

    // entities
    testOperation('TestEntities', 'extractEntities', 'entities', texts[0]);
    testDocumentsOperation('TestDocumentsEntities', 'extractDocumentsEntities', 'entities', testDocs);
    
    // sentiments
    let sentimentsTexts = [
        'New menu is good but the place in Toronto is dirty.',
        'Pretty good food on average'];

    testOperation('TestSentiments', 'extractSentiments', 'sentiments', sentimentsTexts[0]);
    // documents sentiments
    {        
        let docs = new tmapi.Documents();
        docs.files = new Array<tmapi.Document>();
        for (let text of sentimentsTexts) {
            let base64Text = Buffer.from(text).toString('base64');
            let doc = new tmapi.Document;
            doc.content = Buffer.from(text).toString('base64');
            docs.files!.push(doc);    
        }
        testDocumentsOperation('TestDocumentsSentiments', 'extractDocumentsSentiments', 'sentiments', docs);
    }

    // facts
    testOperation('TestFacts', 'extractFacts', 'facts', texts[0]);
    testDocumentsOperation('TestDocumentsFacts', 'extractDocumentsFacts', 'facts', testDocs);
});

// TEST TASKS
describe('TestTasks', function() {
    this.timeout(100000);
    let tasks = createApi('TasksApi');

    // test task information
    it('TestTaskInfo', async function() {    
        let ct = await tasks.createTask(['tokens', 'entities'], testDocs, 1);
        let taskId = ct.body['taskId'];        
        // check all tasks
        let gti = await tasks.getTasksInfo([]);
        let allTasks = gti.body.tasks!;
        assert(allTasks.length > 0);
        let bFound  = false;
        for (let task of allTasks) {
            if (task.id == taskId) {
                bFound = true;
                break;
            }
        }
        assert(bFound);
        // check concrete task
        gti = await tasks.getTasksInfo([taskId]);
        let task = gti.body.tasks![0];
        assert(taskId == task.id);
    });

    // test delete task
    it('TestDeleteTask', async function() {    
        // create task
        let ct = await tasks.createTask(['tokens'], testDocs, 1);
        let id = ct.body['taskId'];        
        let gti = await tasks.getTasksInfo([id]);
        assert(gti.body.tasks!.length > 0);
        // delete task
        await tasks.deleteTasks([id]);
        // check task was deleted
        gti = await tasks.getTasksInfo([id]);
        assert(gti.body.tasks == undefined);        
    });

    // test synchronous task
    it('TestSyncTask', async function() {    
        // create task
        let ct = await tasks.createTask(['entities'], testDocs, 0);
        let result = ct.body;
        assert(result.documents.length == testDocs.files!.length);
        assert(result.documents[0].entities.length > 0);
    });

    // test asynchronous task
    it('TestAsyncTask', async function() {    
        // create task
        let ct = await tasks.createTask(['entities'], testDocs, 1);
        let id = ct.body['taskId'];
        await sleep(5000)
        while (true) {
            let gti = await tasks.getTasksInfo([id]);
            let task = gti.body.tasks![0];
            if (task.done == 100) {
                break;
            }            
        }
        let gtr = await tasks.getTaskResult(id, ['entities']);
        let result = gtr.body;
        assert(result.documents.length == testDocs.files!.length);
        assert(result.documents[0].entities.length > 0);
    });

    // test multiple task
    it('TestMultipleTask', async function() {    
        let operations = ['tokens', 'keywords'];
        let taskIds : string[]  = [];
        // create tasks
        for (let op of operations) {
            let ct = await tasks.createTask([op], testDocs, 1);
            let id = ct.body['taskId'];    
            taskIds.push(id);
        }
        // wait till finished
        await sleep(5000)
        while (true) {
            let gti = await tasks.getTasksInfo(taskIds);
            let allFinished = true;
            for (let task of gti.body.tasks!) {
                if (task.done! < 100) {
                    allFinished = false;
                    break;
                }
            }
            if (allFinished)
                break;
            await sleep(1000);
        }
        // check results
        for (let i = 0; i < taskIds.length; i++) {
            let gtr = await tasks.getTaskResult(taskIds[i], [operations[i]]);
            assert(gtr.body.documents.length > 0);
        }
        // delete tasks
        await tasks.deleteTasks(taskIds);
        let gti = await tasks.getTasksInfo(taskIds);
        assert(gti.body.tasks == undefined);
    });
});
