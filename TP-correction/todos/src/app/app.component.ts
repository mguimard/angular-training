import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from "./todo/todo-list.component";

@Component({
  imports: [RouterModule, TodoListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
