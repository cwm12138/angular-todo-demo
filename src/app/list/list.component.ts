import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todoItems = [];
  doneItems = [];

  constructor(public todoService:TodoService) { }
  
  public ngOnInit() {
    // this.todoItems = this.todoService.getTodoItems();
    // this.doneItems = this.todoService.getDoneItems();
    this.todoService.ngOnInit();
  }   

  removeItemFromTodo(item) {
    this.todoService.removeTodoItems(item);
  }

  completeItem(item) {
    this.todoService.completeItem(item);
  }

  removeItemFromComp(item) {
    this.todoService.removeDoneItems(item);
  }

  unCompleteItem(item) {
    this.todoService.unCompleteItem(item);
  }
  

  // unCompleteItem(item) {
  //   this.doneItems.splice(this.doneItems.indexOf(item),1);
  //   this.todoService.setDoneItems(this.doneItems);
  //   this.todoItems.push(item);
  //   this.todoService.setTodoItems(this.todoItems);
  // }
}

