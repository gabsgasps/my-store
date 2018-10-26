import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[changeForAdded]'
})
export class ChangeButtonDirective {

    @Input() text:string;
    @Input() text2: string;

    constructor(
        private el: ElementRef,
        private render: Renderer2,
    ) { }

   

    @HostListener('click')
    letterChange() {
        
        this.render.setProperty(this.el.nativeElement, 'innerHTML', `${this.text}`);
                    
    }
    
}