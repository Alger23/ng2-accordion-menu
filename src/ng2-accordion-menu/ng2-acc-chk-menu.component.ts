import {
  Component, OnInit, Input,
  EventEmitter, Output, OnChanges, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'ng2-acc-chk-menu',
  template: `
  <div [id]="options.accordionId" class="accordion">
    <ng2-acc-chk-list [nodes]="nodes"
                      [level]="0"
                      [options]="options"
                      [parentId]="0"
                      (onSelected)="selectedHandler($event)">
    </ng2-acc-chk-list>
  </div>`,
  styleUrls: ['./ng2-accordion-menu.scss']
})

export class Ng2AccChkMenuComponent implements OnInit {
  @Input() nodes: any;
  @Input() options: any;
  @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  selectedHandler($event) {
    this.onSelected.emit($event);
  }

  ngOnInit() { }
}
