import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome/:name', component: WelcomeComponent , canActivate:[RouteGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService]  },
  { path: 'logout', component: LogoutComponent , canActivate:[RouteGuardService]  },

  { path: '**', component: ErrorHandlingComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
