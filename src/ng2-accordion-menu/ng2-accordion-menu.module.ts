import { CommonModule } from '@angular/common';
import { AccordionNode } from './lib/config.d';
import { NgModule } from '@angular/core';

import { Ng2AccMenuComponent } from './ng2-acc-menu.component';
import { Ng2AccListComponent } from './components/list.component';

import { Ng2AccChkMenuComponent } from './ng2-acc-chk-menu.component';
import { Ng2AccChkListComponent } from './components/chk-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    Ng2AccMenuComponent,
    Ng2AccChkMenuComponent],
  declarations: [
    Ng2AccMenuComponent,
    Ng2AccListComponent,
    Ng2AccChkMenuComponent,
    Ng2AccChkListComponent
  ],
  providers: [],
})
export class Ng2AccordionMenuModule { }
