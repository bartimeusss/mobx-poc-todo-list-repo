import { observable } from 'mobx';
import { TodoStatusEnum } from './TodoStatusEnum';

export class TodoItemEntity {
    @observable id?: string;
    @observable name: string;
    @observable description: string;
    @observable status: TodoStatusEnum;

    constructor(id: string, name: string, description: string, status: TodoStatusEnum) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
    }
}
