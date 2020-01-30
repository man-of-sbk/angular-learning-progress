import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('document:click', ['$event.target']) clickOutside(target) {
    const clickedInside = this.eleRef.nativeElement.contains(target);

    this.isOpen = !clickedInside ? false : !this.isOpen;

  }

  constructor(private eleRef: ElementRef) { }
}
