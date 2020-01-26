import { observable } from 'mobx';
import { TodoStatusEnum } from './TodoStatusEnum';

export class TodoItem {
    @observable id?: string;
    @observable name: string;
    @observable description: string;
    @observable status: TodoStatusEnum;

    constructor(name: string, description: string, status: TodoStatusEnum) {
        this.name = name;
        this.description = description;
        this.status = status;
    }
}
