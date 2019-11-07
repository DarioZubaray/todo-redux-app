import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOOGLE_TODO = '[TODO] Toogle todo';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string) {}
}

export class ToogleTodoAction implements Action {
    readonly type = TOOGLE_TODO;

    constructor(public id: number) {}
}

export type Acciones = AgregarTodoAction | ToogleTodoAction;
