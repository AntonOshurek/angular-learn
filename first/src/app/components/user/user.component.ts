import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { IDummyUser } from '../../data/dummy-users';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user: IDummyUser;
  @Input({ required: true }) selected: boolean;

  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imageAlt = input.required<string>();

  // select = output<string>();

  // imagePath = computed(() => {ь
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(evt: Event) {
    this.select.emit(this.user.id);

    // this.select.emit(this.id);
  }
}
