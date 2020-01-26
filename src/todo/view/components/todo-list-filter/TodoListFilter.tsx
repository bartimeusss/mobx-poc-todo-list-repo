import { Select } from 'antd';
import { TodoStatusEnum } from '../../../model/TodoStatusEnum';
import React from 'react';

import './styles.css';
import { IPropsTodoListFilter } from './IPropsTodoListFilter';

export const TodoListFilter: React.FC<IPropsTodoListFilter> = ({ onChange }) => (
    <div className="todo-list_filter">
        <span>Filter:</span>
        <Select
            className="todo-list_filter-select"
            defaultActiveFirstOption
            onChange={onChange}
        >
            <Select.Option key={"asdad"} value={undefined}>All</Select.Option>
            {
                Object.keys(TodoStatusEnum).map(status =>
                    <Select.Option key={status} value={status}>{status}</Select.Option>
                )
            }
        </Select>
    </div>
);
