import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { AboutComponent } from './about/about.component';
import { AdvancedTrainingComponent } from './advanced-training/advanced-training.component';

const routes: Routes = [
  {path: 'training', component: TrainingComponent},
  {path: 'advancedtraining', component: AdvancedTrainingComponent},
  {path: 'about', component: AboutComponent}

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {useHash: true})]

})

export class AppRoutingModule { }
