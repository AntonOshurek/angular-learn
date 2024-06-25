import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
//DATA
import { DUMMY_USERS } from './dummy-users';
//TYPES
import type { dummyUsersType, IDummyUser } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users: dummyUsersType = DUMMY_USERS;
  selectedUserId: string;

  get selectedUser(): IDummyUser | undefined {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
