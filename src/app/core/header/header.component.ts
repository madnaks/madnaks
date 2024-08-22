import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  constructor(private translate: TranslateService) {
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openFile(): void {
    window.open('assets/pdf/Mohamed_Iskander_Haouem_CV_' + this.translate.currentLang.toUpperCase() + '.pdf','_blank');
  }
}
