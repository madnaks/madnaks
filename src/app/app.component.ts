import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentHeaderTheme: string = 'theme-1';

  title = 'madnaks';
  accounts = [
    { name: 'facebook', link: 'https://www.facebook.com/medskander.haouam' },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/mohamed-iskander-haouem/' },
    { name: 'github', link: 'https://github.com/madnaks' },
    { name: 'twitter', link: 'https://twitter.com/MadNaks' }
  ];

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  currentLang(language: string): boolean {
    return this.translate.currentLang == language;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateHeaderSection();
  }

  updateHeaderSection() {
    const homeSection = document.getElementById('home');
    const experienceSection = document.getElementById('experience');
    const contactMeSection = document.getElementById('contact-me');

    if (homeSection && experienceSection && contactMeSection) {
      const scrollPosition = window.scrollY;

      if (scrollPosition < experienceSection.offsetTop) {
        this.currentHeaderTheme = 'theme-1';
      } else if (scrollPosition < contactMeSection.offsetTop) {
        this.currentHeaderTheme = 'theme-2';
      } else {
        this.currentHeaderTheme = 'theme-1';
      }
    }
  }

}
