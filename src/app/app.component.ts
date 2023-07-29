import { Component } from '@angular/core';
import { TranslateService } from './translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(private translateService: TranslateService){
    console.log(this.translateService.getTranslate('hello.world'));
  }

  async changeLanguage(language: string){
    // Obtengo las nuevas traducciones
    await this.translateService.getData('/assets/i18n/', language);
    console.log(this.translateService.getTranslate('hello.world'));
  }

}
