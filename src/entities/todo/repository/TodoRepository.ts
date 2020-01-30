import { observable } from 'mobx';
import { actionAsync } from 'mobx-utils';

import { ITodoRequester } from './ITodoRequester';
import { TodoItemEntity } from '..';

export class TodoRepository {
    constructor(
        private requester: ITodoRequester
   ) {}

    @observable
    todoList: TodoItemEntity[] = [];

    @actionAsync
    loadItems = async () => {
        this.todoList = await this.requester.load();
    };

    @actionAsync
    addItem = async (newItem: TodoItemEntity) => {
        const createdItem = await this.requester.create(newItem);
        this.todoList.push(createdItem);
    };
}
