import { Component, OnInit, HostBinding } from '@angular/core';

interface Client {
  show: boolean;
  name: string;
  title: string;
  quote: string;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content has-bg bg-green';

  public clients: Client[] = [{
    show: true,
    name: 'Joveyn',
    title: 'CEO',
    quote: 'Agriculture needs redesign <br> and Avid does it'
  }];

  constructor() { }

  ngOnInit() {
  }

}