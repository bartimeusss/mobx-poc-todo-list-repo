import { IDTOAdapter } from '../../../../commons/IDTOAdapter';
import { TodoItemEntity } from '../..';
import { TodoItemDTOView } from '../dto/TodoItemDTOView';
import { TodoItemDTOCreateOrUpdate } from '../dto/TodoItemDTOCreateOrUpdate';

export class TodoAdapter implements IDTOAdapter<TodoItemEntity, TodoItemDTOView, TodoItemDTOCreateOrUpdate> {
    fromDTO = (dto: TodoItemDTOView): TodoItemEntity => new TodoItemEntity(
        dto.id,
        dto.item_name,
        dto.item_description,
        dto.item_status
    );

    toCreateDTO = (entity: TodoItemEntity): TodoItemDTOCreateOrUpdate => new TodoItemDTOCreateOrUpdate(
        entity.name,
        entity.description
    );

    toUpdateDTO = this.toCreateDTO
}
