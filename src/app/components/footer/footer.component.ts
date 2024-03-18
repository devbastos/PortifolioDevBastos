import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { FooterTemplateComponent } from '../../templates/footer-template/footer-template.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterTemplateComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  isMobile: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (this.document.defaultView) {
      this.isMobile = this.document.defaultView.innerWidth <= 768;
    }
  }
}