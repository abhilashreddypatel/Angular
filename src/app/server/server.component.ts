
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() serverEmit=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluprintEmit=new EventEmitter<{serverName:string,serverContent:string}>();

  


  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverEmit.emit({serverName:this.newServerName,
      serverContent:this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluprintEmit.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }

 

}
function output() {
  throw new Error('Function not implemented.');
}

