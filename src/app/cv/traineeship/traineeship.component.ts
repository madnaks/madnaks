import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-traineeship',
  templateUrl: './traineeship.component.html',
  styleUrls: ['./traineeship.component.css']
})
export class TraineeshipComponent implements OnInit {

  @Input() periode: string;
  @Input() society: string;
  @Input() type: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
