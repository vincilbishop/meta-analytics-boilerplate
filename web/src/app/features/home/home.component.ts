import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/common/services/statistics/statistics.service';
import * as prettyPrintJson from 'pretty-print-json';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public readonly statsService: StatisticsService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
}
