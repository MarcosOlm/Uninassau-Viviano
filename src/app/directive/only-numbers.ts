import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbers {

  @HostListener('input', ['$event'])
  onInput($event: any) {
    const initial = $event.target.value;
    $event.target.value = initial.replace(/[^0-9]/g, ''); 
  }

  @HostListener('keypress', ['$event']) 
  onKeyPress(event: KeyboardEvent) {
    const allowed = /[0-9]/; 
    if (!allowed.test(event.key)) {
      event.preventDefault();
    }
  }
}
