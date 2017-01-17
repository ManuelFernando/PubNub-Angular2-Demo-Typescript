import { PubNubAngular } from 'pubnub-angular2';
export declare class MainComponent {
    pubnubService: PubNubAngular;
    userId: string;
    newMessage: string;
    channelName: string;
    status: {};
    presence: {};
    occupants: any[];
    messages: any[];
    constructor(pubnubService: PubNubAngular);
    publish(): void;
}
