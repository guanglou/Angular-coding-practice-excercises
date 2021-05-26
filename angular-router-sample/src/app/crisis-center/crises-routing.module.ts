import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { OverviewComponent } from './overview/overview.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';


// const routes: Routes = [
//   {
//     path: '',
//     component: CrisisListComponent,
//     children: [
//             {
//         path: 'overview',
//         component: OverviewComponent
//       },
//       {
//         path: ':id',
//         component: CrisisDetailComponent
//       }
//     ]
//   }
// ];


const routes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'lists',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            resolve: {
              crisis: CrisisDetailResolverService
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CrisesRoutingModule { }
