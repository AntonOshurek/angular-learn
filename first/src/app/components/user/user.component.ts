import { Component } from '@angular/core';
//DATA
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  get imageAlt() {
    return 'photo of person - ' + this.selectedUser.name;
  }

  get name() {
    return this.selectedUser.name;
  }

  onSelectUser(evt: Event) {
    console.log(evt.target);
  }
}
