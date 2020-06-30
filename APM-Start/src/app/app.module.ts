import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget/budget-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { BudgetDetailComponent } from './budget/budget-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { BudgetDetailGuard } from './budget/budget-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    BudgetDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'budget', component: BudgetListComponent },
      { path: 'budget/:id',
        canActivate: [BudgetDetailGuard],
        component: BudgetDetailComponent
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
