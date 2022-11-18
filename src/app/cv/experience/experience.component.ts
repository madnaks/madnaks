import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() periode: string;
  @Input() society: string;
  @Input() post: string;
  @Input() missions: Array<string>;
  @Input() technology: string;

  constructor() { }

  ngOnInit() {
  }

}
