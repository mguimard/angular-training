import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUserLog]',
  standalone: false
})
export class UserLogDirective implements OnInit, OnDestroy {

  @Input('appUserLog') data: string = 'valeur par defaut';

  constructor(private hostEl: ElementRef) {
    console.log('Constructor directive', hostEl, this.data)    
  }

  ngOnDestroy(): void {
    console.log('Directive OnDestroy')
  }

  ngOnInit(): void {
   console.log('ngOnInit directive', this.data)  
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.hostEl.nativeElement.style.color = 'red';
    //this.renderer.addClass(this.hostEl, "red");
    console.log('Mouse entered', this.data)    
  }


  @HostListener('mouseleave')
  onMouseLeave(){
    this.hostEl.nativeElement.style.color = '';
    //this.renderer.removeClass(this.hostEl, "red");
    console.log('Mouse left', this.data)    
  }

}


