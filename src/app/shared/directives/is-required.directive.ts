import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[addClassIfRequired]',
  standalone: true
})
export class AddClassIfRequiredDirective implements OnInit {
  @Input() control!: FormControl<string | null>;

  ngOnInit() {
    if (!this.control) {
      console.error('FormControl is required for the nsAddClassIsRequired directive.');
      return;
    }

    if (!(this.control instanceof FormControl)) {
      console.error('Invalid FormControl provided for nsAddClassIsRequired directive.');
      return;
    }
  }

  @HostBinding('class.is-required')
  get isRequired() {
    return this.control && this.control.dirty && this.control.hasError('required');
  }
}
