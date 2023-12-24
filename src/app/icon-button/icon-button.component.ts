import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [],
  template: `<button [type]="type" class="btn btn-{{color}} {{customClass}}" data-toggle="tooltip" title="{{title}}">
    <i class="bi bi-{{icon}}">{{label}}</i>
</button>`
})
export class IconButtonComponent {
  @Input() color: 'primary' | 'danger' | 'warning' | 'secondry' | 'info' = 'primary'
  @Input() title: string = ''
  @Input() type: 'submit' | 'button' | 'menu' | 'reset' = 'button'
  @Input() label: string = ''
  @Input({ required: true }) icon: string = ''
  @Input() customClass: string = ''
}
