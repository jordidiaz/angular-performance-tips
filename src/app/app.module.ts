import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListGenerator } from './list-generator';
import { RandomListComponent } from './random-list/random-list.component';
import { NameInputComponent } from './random-list/name-input/name-input.component';
import { ListComponent } from './random-list/list/list.component';
import { CalculatePipe } from './calculate.pipe';

@NgModule({
  declarations: [AppComponent, RandomListComponent, NameInputComponent, ListComponent, CalculatePipe],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [ListGenerator],
  bootstrap: [AppComponent]
})
export class AppModule {}
