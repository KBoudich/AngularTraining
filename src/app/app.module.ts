import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KbeNavComponent } from './kbe-nav/kbe-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule,
   MatPaginatorModule, MatSortModule } from '@angular/material';
import { KbeTableComponent } from './kbe-table/kbe-table.component';
import { TrainingComponent } from './training/training.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AdvancedTrainingComponent } from './advanced-training/advanced-training.component';

@NgModule({
  declarations: [
    AppComponent,
    KbeNavComponent,
    KbeTableComponent,
    TrainingComponent,
    AboutComponent,
    AdvancedTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
