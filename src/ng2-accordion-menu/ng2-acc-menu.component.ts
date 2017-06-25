import { AccordionNodes } from 'ng2-accordion-menu/lib/config';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ng2-acc-menu',
  templateUrl: 'ng2-acc-menu.html',
  styleUrls: ['./ng2-acc-menu.scss']
})

export class Ng2AccMenuComponent implements OnInit {
  @Input() nodes: any;
  @Input() options: any;
  @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  selectedHandler($event) {
    this.onSelected.emit($event);
  }

  ngOnInit() { }
}
