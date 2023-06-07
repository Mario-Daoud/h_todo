import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchbarComponent, DashboardComponent],
  imports: [CommonModule, FormsModule],
  exports: [DashboardComponent],
})
export class HomepageModule {}
