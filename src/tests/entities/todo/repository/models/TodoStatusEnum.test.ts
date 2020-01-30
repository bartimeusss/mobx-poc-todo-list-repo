import { TodoStatusEnum } from '../../../../../entities/todo';

describe('TodoStatusEnum tests', () => {
    it.each([
        'OPEN',
        'IN_PROGRESS',
        'DONE'
    ])('should contain %s item', (value: string) => {
        expect(TodoStatusEnum[value as keyof typeof TodoStatusEnum]).toEqual(value);
    });
});
