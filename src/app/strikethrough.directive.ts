import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  numberOfClicks = 0;
  constructor(private elem:ElementRef) {
    // this.elem.nativeElement.style.textDecoration = 'line-through';
   }

  @HostListener("click", ['$event.target']) onClicks(){
    this.textDeco ("line-through");
    console.log('number of clicks:', this.numberOfClicks+1);
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco('None');
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration = action;
  }

}
