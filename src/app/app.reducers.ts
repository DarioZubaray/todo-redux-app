import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

// Se acostumbra a hacerlo asi porque puede haber varios reducer con el mismo nombre
import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import * as fromFiltroActions from './filter/filter.actions';

//import { todoReducer } from './todo/todo.reducer';
//import { filtroReducer } from './filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filtro: fromFiltroActions.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filtroReducer
}
