import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id: string;
  @Input({ required: true }) avatar: string;
  @Input({ required: true }) name: string;
  @Input({ required: true }) imageAlt: string;

  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imageAlt = input.required<string>();

  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(evt: Event) {
    this.select.emit(this.id);

    // this.select.emit(this.id);
  }
}
