import { Directive, ElementRef, Renderer2, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[changeForAdded]'
})
export class ChangeButtonDirective {
    @Input() text:string;
    @Input() colorAdded:string = '#f5d47';
    constructor(
        private el: ElementRef,
        private render: Renderer2
    ) { }

    @HostListener('click')
    letterChange() {
        this.render.setProperty(this.el.nativeElement, 'innerHTML', `${this.text}`);
        this.render.setAttribute(this.el.nativeElement, 'disabled', 'true');
        this.render.setStyle(this.el.nativeElement, 'color', `${this.colorAdded}`);
        
    }
}