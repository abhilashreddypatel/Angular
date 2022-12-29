import { Component, EventEmitter, Output, OnInit, ViewChild, ElementRef } from '@angular/core';

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

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('newServerContent') newContent :ElementRef;

  onAddServer(newServer:HTMLInputElement) {
    this.serverEmit.emit({
      serverName: newServer.value,
      serverContent: this.newContent.nativeElement.value
    });
  }

  onAddBlueprint(newServer) {
    this.blueprintEmit.emit({
      serverName: newServer.value,
      serverContent: this.newContent.nativeElement.value
    });
  }



}


