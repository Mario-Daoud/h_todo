import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [SearchbarComponent, DashboardComponent],
  imports: [CommonModule],
  exports: [DashboardComponent],
})
export class HomepageModule {}
