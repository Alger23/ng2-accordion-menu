import { AccordionNodes } from 'ng2-accordion-menu/lib/config';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ng2-acc-menu',
  template: `
  <div [id]="options.accordionId" class="accordion">
    <ng2-acc-list [nodes]="nodes" [level]="0" [options]="options" [parentId]="0" (onSelected)="selectedHandler($event)"></ng2-acc-list>
  </div>
  `,
  styleUrls: ['./ng2-accordion-menu.scss']
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
