import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';

import { HttpModule, JsonpModule } from '@angular/http';
import { AppMaterialModule } from './app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'list', component: ListOfItemsComponent },
  { path: 'add-new', component: AddNewItemComponent },
  { path: '',   redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/list'}
];



@NgModule({
  declarations: [
    AppComponent,
    ListOfItemsComponent,
    AddNewItemComponent
  ],
  imports: [
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
