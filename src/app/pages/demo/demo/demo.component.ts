import { Component, OnInit } from '@angular/core';
import { AccordionNodes } from 'ng2-accordion-menu/lib/config';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  menus: AccordionNodes = [
    {
      id: '1', name: '娛樂種類', title: '娛樂種類title',
      children: [
        {
          id: '1-1', name: '彩票', children: [
            { id: '1-1-1', name: '彩票' },
            { id: '1-1-2', name: '視訊' },
            { id: '1-1-3', name: '機率' },
            { id: '1-1-4', name: '體育' }
          ]
        },
        { id: '1-2', name: '視訊' },
        { id: '1-3', name: '機率' },
        { id: '1-4', name: '體育' }
      ]
    },
    {
      id: '3', name: '娛樂種類', title: '娛樂種類title',
    },
    {
      id: '2', name: '娛樂種類', title: '娛樂種類title',
      children: [
        {
          id: '2-1', name: '彩票', children: [
            { id: '2-1-1', name: '彩票' },
            { id: '2-1-2', name: '視訊' },
            { id: '2-1-3', name: '機率' },
            { id: '2-1-4', name: '體育' }
          ]
        },
        { id: '2-2', name: '視訊' },
        { id: '2-3', name: '機率' },
        { id: '2-4', name: '體育' }
      ]
    }
  ];
  menu1Options = {
    accordionId: 'category'
  };
menu2Options = {
    accordionId: 'gamehall'
  };
  constructor() { }

  nodeChangedHandler($event) {
    console.log($event);
    //event.stopPropagation();

  }

  selectedHandler($event) {
    console.log($event);
  }

  ngOnInit() {
  }

}
