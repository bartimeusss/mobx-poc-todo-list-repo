import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { observer } from 'mobx-react';

import { useTodoListStore } from '../../../index';
import { TodoItem } from '../todo-item/TodoItem';
import { TodoListFilter } from '../todo-list-filter/TodoListFilter';

const TodoListComponent: React.FC = () => {
    const { filteredTodoList, setFilter, loadItems, isLoading } = useTodoListStore();

    useEffect(() => { loadItems() }, []);

    if (isLoading) {
        return (<Spin />);
    }

    return (
        <>
            <TodoListFilter onChange={setFilter} />
            {
                filteredTodoList.map(it => (
                    <TodoItem key={ it.name } todoItem={ it }/>
                ))
            }
        </>
    );
};

export const TodoList = observer(TodoListComponent);
