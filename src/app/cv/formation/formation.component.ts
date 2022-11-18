import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  @Input() periode: string;
  @Input() name: string;
  @Input() university: string;

  constructor() { }

  ngOnInit() {
  }

}
