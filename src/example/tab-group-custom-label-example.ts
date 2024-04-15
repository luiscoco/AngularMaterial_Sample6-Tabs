import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

/**
 * @title Using tabs with a custom label template
 */
@Component({
  selector: 'tab-group-custom-label-example',
  templateUrl: 'tab-group-custom-label-example.html',
  styleUrl: 'tab-group-custom-label-example.css',
  standalone: true,
  imports: [MatTabsModule, MatIconModule],
})
export class TabGroupCustomLabelExample {}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */