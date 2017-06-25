import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { routes } from './demo.routes';
import { Ng2AccordionMenuModule } from 'ng2-accordion-menu';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Ng2AccordionMenuModule
  ],
  declarations: [DemoComponent]
})
export class DemoModule { }
