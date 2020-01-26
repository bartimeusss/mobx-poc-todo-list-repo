import { actionAsync } from 'mobx-utils';
import { action, computed, observable } from 'mobx';

import { TodoItem } from './TodoItem';
import { TodoStatusEnum } from './TodoStatusEnum';
import { ITodoRequester } from './ITodoRequester';

export class TodoListRepository {
    requester: ITodoRequester;

    @observable.shallow
    todoList: TodoItem[] = [];

    @observable
    currentFilterStatus?: TodoStatusEnum;

    @observable
    isLoading: boolean = false;

    constructor(requester: ITodoRequester) {
        this.requester = requester;
    }

    @computed
    get filteredTodoList(): TodoItem[] {
        return this.todoList.filter(it => it.status === (this.currentFilterStatus ?? it.status));
    };

    @action.bound
    setFilter(newFilterStatus?: TodoStatusEnum) {
        this.currentFilterStatus = newFilterStatus;
    };

    @actionAsync
    loadItems = async () => {
        this.isLoading = true;

        try {
            this.todoList = await this.requester.load();
        } finally {
            this.isLoading = false;
        }
    };

    @actionAsync
    addItem = async (newItem: TodoItem) => {
        this.isLoading = true;

        try {
            const createdItem = await this.requester.create(newItem);
            this.todoList.push(createdItem);
        } finally {
            this.isLoading = false;
        }
    };

    @actionAsync
    updateStatus = async (id: string, newStatus: TodoStatusEnum) => {
        this.isLoading = true;

        try {
            await this.requester.updateStatus(id, newStatus);
            const item = this.todoList.find(it => it.id === id);
            if (!item) {
                throw new Error("Incorrect id!");
            }
            item.status = newStatus
        } finally {
            this.isLoading = false;
        }
    };
}
