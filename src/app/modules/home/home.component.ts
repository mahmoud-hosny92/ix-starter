import { Component, OnInit } from '@angular/core';
import { ModalService } from '@siemens/ix-angular';
import { ViewAllComponent } from './view-all/view-all.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  openDialog(): void {
    this.modalService.open({
      content: ViewAllComponent,
      data: '',
      size: '840',
    });
  }
}
