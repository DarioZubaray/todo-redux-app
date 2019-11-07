import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToogleTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  checkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required);

    this.checkField.valueChanges.subscribe(valor => {
      const accion = new ToogleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });
  }

  editar() {
    this.editando = true;

    setTimeout( () => this.txtInputFisico.nativeElement.select(), 1);
  }

  terminarEdicion() {
    this.editando = false;
  }

}
