import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { DndModule } from 'ng2-dnd';


import { AppComponent } from './app.component';
import { LeasonZeroComponent } from './leasons/leason-zero/leason-zero.component';
import { LeasonHeaderComponent } from './leasons/leason-header/leason-header.component';
import { LeasonScaleComponent } from './leasons/leason-scale/leason-scale.component';
import { ExrciseHistoryComponent } from './exrcise-history/exrcise-history.component';
import { LiveExerciseContainerComponent } from './leasons/leason-zero/live-exercise-container/live-exercise-container.component';
import { ExerciseOneToTenFingersComponent } from './leasons/leason-zero/exercise-one-to-ten-fingers/exercise-one-to-ten-fingers.component';
import { ExerciseOneToTenHintsComponent } from './leasons/leason-zero/exercise-one-to-ten-hints/exercise-one-to-ten-hints.component';
import { DrogAndDropComponent } from './test/drog-and-drop/drog-and-drop.component';
import { ExerciseMissingNumberComponent } from './leasons/leason-zero/exercise-missing-number/exercise-missing-number/exercise-missing-number.component';

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
    ExerciseMissingNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
