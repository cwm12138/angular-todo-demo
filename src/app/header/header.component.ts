import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemValue = '';
  
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  addItem() {
    if(this.itemValue != '') {
      this.todoService.addTodoItems(this.itemValue);
    }
    this.itemValue = '';
    //this.todoService.ngOnInit();
    // location.reload();
  }

}
