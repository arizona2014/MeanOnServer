import {Component} from "@angular/core";
import {MessageService} from "./messages.service";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    providers: [MessageService]
})

export class MessageInputComponent {

    constructor (private messageService: MessageService){

    }

    onSave(value: String){
        const message = new Message(value,'Andy');
        this.messageService.addMessage(message);
    }

}