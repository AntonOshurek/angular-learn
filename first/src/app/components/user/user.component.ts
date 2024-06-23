import { Component, computed, signal } from '@angular/core';
//DATA
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex()]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  imageAlt = computed(() => this.selectedUser().name);
  name = computed(() => this.selectedUser().name);

  onSelectUser(evt: Event) {
    console.log(evt.target);
    this.selectedUser.set(DUMMY_USERS[randomIndex()]);
  }
}
