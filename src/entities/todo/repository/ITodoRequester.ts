import { TodoItemEntity } from '..';

export interface ITodoRequester {
    load(): Promise<Array<TodoItemEntity>>
    create(newItem: TodoItemEntity): Promise<TodoItemEntity>
}
