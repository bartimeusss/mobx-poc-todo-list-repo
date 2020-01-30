import { IDTOAdapter } from '../../../../commons/IDTOAdapter';
import { TodoItemEntity } from '../..';
import { IFetch } from '../../../../commons/IFetch';
import { TodoItemDTOView } from '../dto/TodoItemDTOView';
import { TodoItemDTOCreateOrUpdate } from '../dto/TodoItemDTOCreateOrUpdate';
import { ITodoRequester } from '../../repository/ITodoRequester';

export class TodoRequester implements ITodoRequester {
    constructor(
        private adapter: IDTOAdapter<TodoItemEntity, TodoItemDTOView, TodoItemDTOCreateOrUpdate>,
        private fetch: IFetch
    ) {}

    load = async (): Promise<Array<TodoItemEntity>> => {
        const response = await this.fetch.performRequest<undefined, Array<TodoItemDTOView>>('load');

        return response.map(this.adapter.fromDTO);
    };

    create = async (newItem: TodoItemEntity): Promise<TodoItemEntity> => {
        const dto = this.adapter.toCreateDTO(newItem);

        const viewDto = await this.fetch.performRequest<TodoItemDTOCreateOrUpdate, TodoItemDTOView>('create', dto);

        return this.adapter.fromDTO(viewDto);
    };
}


