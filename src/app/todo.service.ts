import { Inject, Injectable, OnInit } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const TODO_ITEMS = 'todo_items';
const DONE_ITEMS = 'done_items';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  todoList: String[] = [];
  doneList: String[] = [];

  ngOnInit() {
    this.refresh();
  }

  private refresh() {
    this.todoList = this.storage.get(TODO_ITEMS) || [];
    this.doneList = this.storage.get(DONE_ITEMS) || [];
  }

  public removeTodoItems(task: String): void {
      this.todoList.splice(this.todoList.indexOf(task),1);
      // this.storage.remove(TODO_ITEMS);
      this.storage.set(TODO_ITEMS,this.todoList);
      this.refresh();
  }

  public addTodoItems(task: any): void {
    const todoArray = this.storage.get(TODO_ITEMS) || [];
    todoArray.push(task);
    this.storage.set(TODO_ITEMS,todoArray);
    this.refresh();
  }

  public removeDoneItems(task: String): void {
    this.doneList.splice(this.doneList.indexOf(task),1);
    this.storage.set(DONE_ITEMS,this.doneList);
    this.refresh();
  }

  public completeItem(task: String) {
    this.removeTodoItems(task);
    const doneArray = this.storage.get(DONE_ITEMS) || [];
    doneArray.push(task);
    this.storage.set(DONE_ITEMS,doneArray);
    this.refresh();
  }

  public unCompleteItem(task: String) {
    this.removeDoneItems(task);
    this.addTodoItems(task);
    this.refresh();
  }
}
