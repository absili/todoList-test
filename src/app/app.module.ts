import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FilterByStatusPipe } from './pipe/filter-by-status.pipe';
import { TodosComponent } from './pages/todos/todos.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { todosReducer } from './store/todos.reducer';
import { TodosEffects } from './store/todos.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { TodoListComponent } from './pages/todos/todo-list/todo-list.component';
import { TodoItemComponent } from './pages/todos/todo-item/todo-item.component';
import { fakeBackendProvider } from './events/fake-backend.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoAddComponent } from './pages/todos/todo-add/todo-add.component';
import { TodoViewComponent } from './pages/todos/todo-view/todo-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterByStatusPipe,
    TodosComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoAddComponent,
    TodoViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({todoStateApp : todosReducer}),
    EffectsModule.forRoot([TodosEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    ...environment.providers,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
