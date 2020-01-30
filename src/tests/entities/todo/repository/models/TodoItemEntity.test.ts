import { isObservableProp } from 'mobx';
import { TodoItemEntity, TodoStatusEnum } from '../../../../../entities/todo';

describe('TodoItemEntity tests', () => {
    it('ctor test', () => {
        //When
        const todoItem = new TodoItemEntity('id', 'name', 'description', TodoStatusEnum.OPEN);

        //Then
        expect(todoItem.id).toEqual('id');
        expect(todoItem.name).toEqual('name');
        expect(todoItem.description).toEqual('description');
        expect(todoItem.status).toEqual( TodoStatusEnum.OPEN);
     });

    it.each([
        'name',
        'description',
        'status'
    ])('%s should be observable', (propertyName) => {
        const todoItem = new TodoItemEntity('id', 'name', 'description', TodoStatusEnum.OPEN);

        expect(isObservableProp(todoItem, propertyName)).toBeTruthy();
    });
});
