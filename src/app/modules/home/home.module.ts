import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IxModule } from '@siemens/ix-angular';
import { HomeRoutingModule } from './home-routing.module';
import { ViewAllComponent } from './view-all/view-all.component';

@NgModule({
  declarations: [HomeComponent, ViewAllComponent],
  imports: [CommonModule, HomeRoutingModule, IxModule.forRoot()],
})
export class HomeModule {}
