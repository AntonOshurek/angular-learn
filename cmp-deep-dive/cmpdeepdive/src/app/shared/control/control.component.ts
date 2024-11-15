import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; //old, don't use it without needed
  // @HostListener() onClick() {
  //   console.log('click');
  // }
  labelText = input.required<string>();
  private el = inject(ElementRef);

  onClick() {
    console.log('click');
    console.log(this.el);
  }
}
