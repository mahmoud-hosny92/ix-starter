import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { IxModule } from '@siemens/ix-angular';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [MainNavComponent],
  imports: [CommonModule, IxModule.forRoot(), AppRoutingModule],
  exports: [MainNavComponent],
})
export class SharedModule {}
