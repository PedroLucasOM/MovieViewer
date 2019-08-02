import { Directive, Input, HostBinding, OnChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[appAltoContraste]'
})
export class AltoContrasteDirective implements OnChanges {

  @Input() flagAltoContraste;

  @HostBinding('style.backgroundColor') corDeFundo;
  @HostBinding('style.color') corDaFonte;
  @HostBinding('style.borderColor') corDaBorda;

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (this.flagAltoContraste) {
      this.corDeFundo = 'black';
      this.corDaFonte = 'white';
      this.corDaBorda = 'white';
    } else {
      this.corDeFundo = '';
      this.corDaFonte = '';
      this.corDaBorda = '';
    }
  }

  @HostListener('mouseover') onMouseOver() {
    if (this.flagAltoContraste){
      this.corDaFonte = 'yellow';
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (this.flagAltoContraste) {
      this.corDaFonte = 'white';
    }
  }
}
