import { Directive, ElementRef, Renderer2, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[changeForAdded]'
})
export class ChangeButtonDirective {
    @Input() text:string;
    @Input() disa: string;
    constructor(
        private el: ElementRef,
        private render: Renderer2
    ) { }

    @HostListener('click')
    letterChange() {
        this.render.setProperty(this.el.nativeElement, 'innerHTML', `${this.text}`);
        if(this.disa) {
            this.render.setAttribute(this.el.nativeElement, 'disabled', 'true')
        }
        
        this.render.removeAttribute(this.el.nativeElement, 'click');
        
        
        this.render.setStyle(this.el.nativeElement, 'color', '#f5d47');
        
    }
    @HostListener('dbclick')
    change(){
        this.render.setProperty(this.el.nativeElement, 'innerHTML', 'mudou');
    }
}