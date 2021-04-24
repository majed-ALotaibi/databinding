import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {
ServerCreated = false;
allowNewServer = false;

Servers = ['Server'];
constructor(){
  setTimeout(() => {
    this.allowNewServer = true ;
  }, 2000);
}
ServerCreathionStatus:string = "no server is created";


    ServerCreathion(){
      this.ServerCreathionStatus = "a new server has been created";
      this.ServerCreated= true;
      this.Servers.push(this.NewServerName);
    }
    NewServerName:string =" name me master";
    serverName(event: Event){
      console.log(event);
      this.NewServerName = (<HTMLInputElement>event.target).value;
    }

}