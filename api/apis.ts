export * from './limitsApi';
import { LimitsApi } from './limitsApi';
export * from './operationsApi';
import { OperationsApi } from './operationsApi';
export * from './serverApi';
import { ServerApi } from './serverApi';
export * from './tasksApi';
import { TasksApi } from './tasksApi';
export const APIS = [LimitsApi, OperationsApi, ServerApi, TasksApi];
