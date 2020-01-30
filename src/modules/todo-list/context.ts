import { createContext, useContext } from 'react';
import { TodoListService } from './service/TodoListService';
import { todoListService } from '../../ioc-container';

export const TodoListContext = createContext<TodoListService>(todoListService);
export const useTodoListService = (): TodoListService => useContext(TodoListContext);
export const TodoListProvider = TodoListContext.Provider;
