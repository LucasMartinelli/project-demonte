import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSticky]'
})

export class StickyDirective {

  initialTop: number = 0;

  constructor(private eleRef: ElementRef) {
    if (window.scrollY > 60) {
      this.eleRef.nativeElement.style.position = 'fixed'
      this.eleRef.nativeElement.style.top = 0
      
    } else {
      this.eleRef.nativeElement.style.position = 'absolute'
      this.eleRef.nativeElement.style.top = 60 + 'px'
    }
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    if (window.scrollY > 60) {
      this.eleRef.nativeElement.style.position = 'fixed';
      this.eleRef.nativeElement.style.top = 0;
    } else {
      this.eleRef.nativeElement.style.position = 'absolute';
      this.eleRef.nativeElement.style.top = 60 + 'px';
    }
  }



  //@HostListener("window:scroll", ["$event"])
  //onWindowScroll(event) {
    //console.log("opa");
    //
    //  this.eleRef.nativeElement.style.position = 'fixed'
    //}
  //}

}