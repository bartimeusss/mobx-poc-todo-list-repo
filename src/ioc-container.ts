import { TodoAdapter } from './entities/todo/api/adapter/TodoAdapter';
import { TodoRequester } from './entities/todo/api/requester/TodoRequester';
import { FetchTodoMock } from './mocks/FetchTodoMock';
import { TodoRepository } from './entities/todo';
import { TodoListService } from './modules/todo-list/service/TodoListService';

const todoAdapter = new TodoAdapter();
const fetchTodoMock = new FetchTodoMock();
const todoRequester = new TodoRequester(todoAdapter, fetchTodoMock);

export const todoRepository = new TodoRepository(todoRequester);
export const todoListService = new TodoListService(todoRepository);
