import uuid from 'uuid/v4';

import { IFetch } from '../commons/IFetch';
import { TodoStatusEnum } from '../entities/todo';
import { TodoItemDTOView } from '../entities/todo/api/dto/TodoItemDTOView';
import { TodoItemDTOCreateOrUpdate } from '../entities/todo/api/dto/TodoItemDTOCreateOrUpdate';

const mock: TodoItemDTOView[] = [
    {
        id: uuid(),
        item_name: 'Item1',
        item_description: 'Item1 description',
        item_status: TodoStatusEnum.OPEN,
    },
    {
        id: uuid(),
        item_name: 'Item2',
        item_description: 'Item2 description',
        item_status: TodoStatusEnum.IN_PROGRESS,
    },
    {
        id: uuid(),
        item_name: 'Item3',
        item_description: 'Item3 description',
        item_status: TodoStatusEnum.DONE,
    },
];

export class FetchTodoMock implements IFetch {
    performRequest<TRequest, TResponse>(url: string, body?: TRequest): Promise<TResponse> {
        return new Promise<TResponse>((resolve => {
            setTimeout(() => {
                resolve(this.getResponse(url, body));
            }, 2000);
        }));
    }

    private loadItems = (): TodoItemDTOView[] => mock;

    private addItem = (newItem: TodoItemDTOCreateOrUpdate): TodoItemDTOView => ({
        id: uuid(),
        item_name: newItem.item_name,
        item_description: newItem.item_description,
        item_status: TodoStatusEnum.OPEN
    });

    private getResponse = (url: string, body?: any): any => {
        switch (url) {
            case 'load': return this.loadItems();
            case 'create': return this.addItem(body as TodoItemDTOCreateOrUpdate);
            default: throw Error('404 NotFound');
        }
    }
}
