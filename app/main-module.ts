import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { PubNubAngular } from 'pubnub-angular2';
import { MainComponent }  from './main-component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ MainComponent ],
    providers: [ PubNubAngular ],
    bootstrap:    [ MainComponent ]
})
export class MainModule {
    constructor(){
    }
}