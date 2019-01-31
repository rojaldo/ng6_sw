import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { RequestService} from './request.service';
import { MainComponent } from './main/main.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SwlistComponent } from './swlist/swlist.component';
import { SwcardComponent } from './swcard/swcard.component';
import { MenuComponent } from './menu/menu.component';
import { KiloPipe } from './kilo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SwlistComponent,
    SwcardComponent,
    MenuComponent,
    KiloPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule.forRoot(), FormsModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
