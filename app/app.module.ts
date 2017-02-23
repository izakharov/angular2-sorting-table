import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './libs/rxjs-extensions';

import { MainPageComponent } from './components/main.page.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksService } from './services/TasksService';
import { MpOrderByPipe } from './common/mpOrderBy';
import { MpSearchFilterPipe } from './components/tasks/mpSearchFilter';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [MainPageComponent, TasksComponent, MpOrderByPipe, MpSearchFilterPipe],
  providers: [TasksService],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
