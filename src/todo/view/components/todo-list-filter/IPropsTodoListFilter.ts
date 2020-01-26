import { TodoStatusEnum } from '../../../model/TodoStatusEnum';

export interface IPropsTodoListFilter {
    onChange: (status?: TodoStatusEnum) => void;
}
