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

  @Output() serverEmit = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintEmit = new EventEmitter<{ serverName: string, serverContent: string }>();

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverEmit.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintEmit.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }



}


