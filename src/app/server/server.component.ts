import {Component} from '@angular/core'
@Component({
    selector: 'app-server', // selector can be class or name
    templateUrl: './server.component.html' //template: `<h1></h1>`
})
export class ServerComponent{
    name : string = "imran";
}