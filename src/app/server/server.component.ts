import {Component,OnInit} from '@angular/core'
@Component({
    selector: 'app-server', // selector can be class or name
    templateUrl: './server.component.html', //template: `<h1></h1>`
    styles:[`
        .online{
            color:white;
        }
    `]
})
export class ServerComponent implements OnInit{
    name : string = "imran";
    allowNewServer=false;
    serverName:string ="imran ahmed khan";
    serverStatus=false;
    constructor(){
        setTimeout(()=>{
            this.allowNewServer=true;
        },2000)
        this.serverStatus= Math.random() >0.5 ? true:false;
    }
    ngOnInit(){}
    onCreateServer(): void {
      }
      getColor() {
        return this.serverStatus==true? 'Green':'Red'
    }
}