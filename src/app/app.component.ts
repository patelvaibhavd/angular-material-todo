import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-material-todo';
  todoArray = [];
  todo;
  @ViewChild('todoForm') todoForm;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  addTodo(value) {
    if (value !== "") {
      this.todoArray.push(value);
      this.todoForm.reset();
    } else {
      alert('Field required **');
    }

  }

  /*delete item*/
  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }

  // submit Form
  todoSubmit(value: any) {
    if (value !== "") {
      this.todoArray.push(value.todo);
      this.todoForm.reset();
    } else {
      alert('Field required **');
    }

  }
}
