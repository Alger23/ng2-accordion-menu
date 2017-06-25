import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ng2-acc-chk-list',
  template: `
  <ul class="acc-list">
    <li *ngFor="let node of nodes; let i = index">
      <input type="radio" name="{{options.accordionId + '_' + level}}"
      id="{{options.accordionId+'-' + level + '_'+ parentId + '_' + i}}" value="toggle"
      (click)="selectedHandler({$event: $event, value: node})" />
    <label for="{{options.accordionId+'-' + level + '_'+ parentId + '_' + i}}">
      <span>{{node.name}}</span>
      <div class="chkbox">
        <input type="checkbox" name="{{level + '_'+ parentId + '_' + i}}" id="{{level + '_'+ parentId + '_' + i}}" value="toggle"/>
      </div>
    </label>
      <div class="sublist" *ngIf="node.children">
        <ng2-acc-chk-list [nodes]="node.children" [level]="level+1" [options]="options" [parentId]=" parentId + '_' + i"
        (onSelected)="selectedHandler($event)">
        </ng2-acc-chk-list>
      </div>
    </li>
  </ul>
  `
})

export class Ng2AccChkListComponent implements OnInit {
  @Input() parentId: string;
  @Input() level: number;
  @Input() nodes: any;
  @Input() options: any;

  @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  selectedHandler($event) {
    this.onSelected.emit($event);
  }

  ngOnInit() { }
}
