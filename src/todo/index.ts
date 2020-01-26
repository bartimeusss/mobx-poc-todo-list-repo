import { createContext, useContext } from 'react';
import { TodoListRepository } from './model/TodoListRepository';
import { TodoRequester } from './requester/TodoRequester';

export const todoRequester = new TodoRequester();
export const todoListStore = new TodoListRepository(todoRequester);

export const TodoListContext = createContext<TodoListRepository>(todoListStore);
export const useTodoListStore = (): TodoListRepository => useContext(TodoListContext);
export const TodoListProvider = TodoListContext.Provider;
