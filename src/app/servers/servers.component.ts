import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {

allowNewServer = false;

constructor(){
  setTimeout(() => {
    this.allowNewServer = true ;
  }, 2000);
}
ServerCreathionStatus:string = "no server is created";


    ServerCreathion(){
      this.ServerCreathionStatus = "a new server has been created";
    }
    NewServerName:string ="";
    serverName(event: event){
      console.log(event);
      this.NewServerName = event.target.value;
    }

}