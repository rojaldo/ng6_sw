import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-swcard',
  templateUrl: './swcard.component.html',
  styleUrls: ['./swcard.component.css']
})
export class SwcardComponent implements OnInit {

  @Input() myCard: any[];
  // tslint:disable-next-line:no-inferrable-types
  @Input() myIndex: any = '???';
  constructor() { }

  ngOnInit() {
  }

}
