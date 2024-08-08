import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  companies: string[] = ['Levio', 'Nerium', 'Bitbase', 'TSI', 'AACMI'];
}
