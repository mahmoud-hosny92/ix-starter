import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Analytics';

  constructor() {}

  ngOnInit(): void {}

  loadLoginPage() {
    return false;
  }

  ngOnDestroy(): void {}
}
