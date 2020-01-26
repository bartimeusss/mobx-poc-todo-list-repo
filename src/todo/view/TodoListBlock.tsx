import React from 'react';
import { TodoListProvider, todoListStore } from '../index';
import { TodoList } from './components/todo-list/TodoList';

export const TodoListBlock = () => (
    <TodoListProvider value={todoListStore}>
        <TodoList />
    </TodoListProvider>
);
