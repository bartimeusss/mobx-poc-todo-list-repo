import { TodoItem } from './TodoItem';
import { TodoStatusEnum } from './TodoStatusEnum';

export interface ITodoRequester {
    load(): Promise<Array<TodoItem>>
    create(newItem: TodoItem): Promise<TodoItem>
    updateStatus(id: string, newStatus: TodoStatusEnum): Promise<void>
}
