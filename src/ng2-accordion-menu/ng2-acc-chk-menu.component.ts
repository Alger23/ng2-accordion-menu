import {
  Component, OnInit, Input,
  EventEmitter, Output, OnChanges, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'ng2-acc-chk-menu',
  templateUrl: 'ng2-acc-chk-menu.html',
  styleUrls: ['./ng2-acc-chk-menu.scss']
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
