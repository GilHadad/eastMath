import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { DndModule } from 'ng2-dnd';

// ============= material ==================

import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// ============= components ==================

import { AppComponent } from './app.component';
import { LeasonZeroComponent } from './leasons/leason-zero/leason-zero.component';
import { LeasonHeaderComponent } from './leasons/leason-header/leason-header.component';
import { LeasonScaleComponent } from './leasons/leason-scale/leason-scale.component';
import { ExrciseHistoryComponent } from './exrcise-history/exrcise-history.component';
import { LiveExerciseContainerComponent } from './leasons/leason-zero/live-exercise-container/live-exercise-container.component';
import { ExerciseOneToTenFingersComponent } from './leasons/leason-zero/exercise-one-to-ten-fingers/exercise-one-to-ten-fingers.component';
import { ExerciseOneToTenHintsComponent } from './leasons/leason-zero/exercise-one-to-ten-hints/exercise-one-to-ten-hints.component';
import { DrogAndDropComponent } from './test/drog-and-drop/drog-and-drop.component';
import {
  ExerciseMissingNumberComponent
} from './leasons/leason-zero/exercise-missing-number/exercise-missing-number.component';
import { NavDevComponent } from './nav-dev/nav-dev.component';


@NgModule({
  declarations: [
    AppComponent,
    LeasonZeroComponent,
    LeasonHeaderComponent,
    LeasonScaleComponent,
    ExrciseHistoryComponent,
    LiveExerciseContainerComponent,
    ExerciseOneToTenFingersComponent,
    ExerciseOneToTenHintsComponent,
    DrogAndDropComponent,
    ExerciseMissingNumberComponent,
    NavDevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DndModule.forRoot(),


    MatStepperModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSelectModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatChipsModule,
    MatSidenavModule,
    MatRadioModule,
    MatTabsModule,
    MatDialogModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
