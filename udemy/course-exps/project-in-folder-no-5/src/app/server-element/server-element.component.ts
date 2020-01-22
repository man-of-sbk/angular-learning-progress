import {
  Component,
  Input,
  OnInit,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  @ContentChild('contentParagraph', { static: true }) contentParagraph: ElementRef;

  constructor() {
  }

  ngOnInit() {
    console.log(this.contentParagraph);
  }
}
