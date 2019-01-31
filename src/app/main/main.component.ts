import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy, OnChanges {

  constructor(public service: RequestService) { }

  ngOnInit() {
    console.log('Creo el componente main.');
    if (!this.service.result) {
      this.getApiInfo();
    }
  }

  ngOnDestroy(): void {
    console.log('Destruyo el componente main.');
  }

  ngOnChanges () {
    console.log('Hay un cambio en el componente main');
  }

  downloadMore() {
    this.getApiInfo(this.service.result.next);
  }

  getApiInfo(url?: string) {
    let myURL = '';
    if (url) {
      myURL = url;
    } else {
      myURL = 'https://swapi.co/api/people/?format=json';
    }
    this.service.getRequest(myURL).subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );

  }

  processResult(data: any) {
    console.log(data);
    this.service.result = data;
    this.service.cardArray.push(this.service.result.results);
  }

  processError(error: any) {
  }

  processFinal() {}

}
