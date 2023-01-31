import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import {
  Chart,
  ChartConfiguration,
  ChartEvent,
  ChartType,
  ChartOptions,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) {
    Chart.register(Annotation);
  }

  chartsX: any[] = [];
  chartsY: any[] = [];

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    datasets: [
      {
        data: this.chartsY,
        label: 'USD',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgb(3, 0, 28,0.7)',
        pointBackgroundColor: 'rgba(150,150,200,0.8)',
        pointBorderColor: 'rgb(3, 0, 28,0.7)',
      },
    ],
    labels: this.chartsX,
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public lineChartLegend = true;
  ngOnInit(): void {
    this.loadCharts();
  }

  async loadCharts() {
    const data: any = await lastValueFrom(this.bitcoinService.getMarketPrice());
    data.values.map((value: any) => {
      this.chartsX.push(new Date(value.x * 1000).toDateString().slice(4, 15)),
        this.chartsY.push(value.y);
    });
  }
}
