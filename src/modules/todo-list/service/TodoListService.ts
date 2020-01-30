import { action, observable } from 'mobx';
import { actionAsync } from 'mobx-utils';

import { TodoItemEntity, TodoRepository, TodoStatusEnum } from '../../../entities/todo';

export class TodoListService {
    @observable
    currentFilterStatus?: TodoStatusEnum;

    @observable
    isAddModalOpen: boolean = false;

    @observable
    isListLoading: boolean = false;

    @observable
    isAddItemLoading: boolean = false;

    constructor(
        private todoRepository: TodoRepository
    ) {}

    get filteredTodoList(): TodoItemEntity[] {
        return this.todoRepository.todoList.filter(it => it.status === (this.currentFilterStatus ?? it.status));
    };

    @action.bound
    setFilter(newFilterStatus?: TodoStatusEnum) {
        this.currentFilterStatus = newFilterStatus;
    };

    @action.bound
    openAddingModal() {
        this.isAddModalOpen = true;
    }

    @action.bound
    closeAddingModal() {
        this.isAddModalOpen = false;
    }

    @actionAsync
    loadItems = async () => {
        this.isListLoading = true;

        try {
            await this.todoRepository.loadItems();
        } finally {
            this.isListLoading = false;
        }

    };

    @actionAsync
    addItem = async (newItem: TodoItemEntity) => {
        this.isAddItemLoading = true;

        try {
            await this.todoRepository.addItem(newItem);
            this.closeAddingModal();
        } finally {
            this.isAddItemLoading = false;
        }
    };
}
