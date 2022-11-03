import { Component } from '@angular/core';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  ngOnInit() {
    this.options = {
      draggable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      maxCols: 4
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2},
      {cols: 1, rows: 1, y: 0, x: 4},
      {cols: 1, rows: 1, y: 2, x: 5},
      {cols: 1, rows: 1, y: 1, x: 0},
      {cols: 1, rows: 1, y: 1, x: 0},
      {cols: 2, rows: 2, y: 3, x: 5},
      {cols: 2, rows: 2, y: 2, x: 0},
      {cols: 2, rows: 1, y: 2, x: 2},
      {cols: 1, rows: 1, y: 2, x: 4},
      {cols: 1, rows: 1, y: 2, x: 6}
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    const item: GridsterItem = { cols: 2, rows: 2, y: 0, x: 2 };
    this.dashboard.push(item);
  }
}
