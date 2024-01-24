import { Routes } from '@angular/router';

import { StartPageComponent } from './start-page/start-page.component';
import { LastPageComponent } from './last-page/last-page.component';

export const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'last/:email', component: LastPageComponent },
];
