import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisesRoutingModule } from './crises-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

@NgModule({
  declarations: [
    CrisisDetailComponent,
    CrisisListComponent,
    OverviewComponent,
    ContactComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CrisesRoutingModule
  ]
})
export class CrisisCenterModule { }
