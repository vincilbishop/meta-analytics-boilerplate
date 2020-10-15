import { Injectable } from '@angular/core';
import dataObject from '../../../../assets/data/data.json';
import * as _ from 'lodash';
import * as stats from 'simple-statistics';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor() {}

  get data(): any {
    return dataObject;
  }
}
