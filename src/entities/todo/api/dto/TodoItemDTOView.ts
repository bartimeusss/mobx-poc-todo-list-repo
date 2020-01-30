import { TodoStatusEnum } from '../..';

export class TodoItemDTOView {
    constructor(
        public id: string,
        public item_name: string,
        public item_description: string,
        public item_status: TodoStatusEnum
    ) {}
}
