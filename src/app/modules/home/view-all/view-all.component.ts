import { Component, OnInit } from '@angular/core';
import { IxActiveModal } from '@siemens/ix-angular';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss'],
})
export class ViewAllComponent implements OnInit {
  constructor(private modal: IxActiveModal) {}

  ngOnInit(): void {}
}
