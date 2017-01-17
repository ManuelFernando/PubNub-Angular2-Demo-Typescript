"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pubnub_angular2_1 = require('pubnub-angular2');
var MainComponent = (function () {
    function MainComponent(pubnubService) {
        this.status = {};
        this.presence = {};
        this.occupants = [];
        this.messages = [];
        this.pubnubService = pubnubService;
        this.userId = 'User ' + Math.round(Math.random() * 1000);
        this.newMessage = '';
        this.channelName = 'PubNub-Angular2-TestDemoTS';
        this.pubnubService.init({
            publishKey: 'demo',
            subscribeKey: 'demo',
            uuid: this.userId
        });
        this.pubnubService.subscribe({ channels: [this.channelName], triggerEvents: true, withPresence: true, autoload: 50 });
        this.messages = pubnubService.getMessage(this.channelName);
        var self = this;
        pubnubService.getPresence(this.channelName, function (presence) {
            self.presence = presence;
            self.pubnubService.hereNow({
                channels: [self.channelName],
                includeUUIDs: true,
                includeState: true
            }).then(function (response) {
                self.occupants = response.channels[self.channelName].occupants;
            }).catch(function (error) { });
        });
        pubnubService.getStatus(this.channelName, function (status) {
            self.status = status;
        });
    }
    MainComponent.prototype.publish = function () {
        if (this.newMessage !== '') {
            this.pubnubService.publish({ message: '[' + this.userId + '] ' + this.newMessage, channel: this.channelName });
            this.newMessage = '';
        }
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main-component',
            templateUrl: 'app/template.html',
        }), 
        __metadata('design:paramtypes', [pubnub_angular2_1.PubNubAngular])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main-component.js.map