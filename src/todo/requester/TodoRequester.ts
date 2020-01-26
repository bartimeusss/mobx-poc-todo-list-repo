import uuid from 'uuid/v4';
import { TodoItem } from '../model/TodoItem';
import { TodoStatusEnum } from '../model/TodoStatusEnum';
import { ITodoRequester } from '../model/ITodoRequester';

const mock: TodoItem[] = [
    {
        id: uuid(),
        name: 'Item1',
        description: 'Item1 description',
        status: TodoStatusEnum.OPEN,
    },
    {
        id: uuid(),
        name: 'Item2',
        description: 'Item2 description',
        status: TodoStatusEnum.IN_PROGRESS,
    },
    {
        id: uuid(),
        name: 'Item3',
        description: 'Item3 description',
        status: TodoStatusEnum.DONE,
    },
];

export class TodoRequester implements ITodoRequester {
    load = (): Promise<Array<TodoItem>> =>
        new Promise<Array<TodoItem>>((resolve => {
            setTimeout(() => {
                resolve(mock);
            }, 3000);
        }));

    create = (newItem: TodoItem): Promise<TodoItem> =>
        new Promise<TodoItem>((resolve => {
            setTimeout(() => {
                const itemWithId = {
                    ...newItem,
                    id: uuid()
                };

                resolve(itemWithId);
            }, 2000);
        }));

    updateStatus = (id: string, newStatus: TodoStatusEnum): Promise<void> =>
        new Promise<void>(resolve => setTimeout(resolve, 2000));
}


