import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';


import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';


import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { SlideOutComponent } from './slide-out/slide-out.component';


import { FormsModule } from '@angular/forms';
import { DashComponent } from './dash.component';
import {
    ECommerceVisitorsAnalyticsComponent,
  } from './visitors-analytics/visitors-analytics.component';
  import {
    ECommerceVisitorsAnalyticsChartComponent,
  } from './visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
  import {
    ECommerceVisitorsStatisticsComponent,
  } from './visitors-analytics/visitors-statistics/visitors-statistics.component';


  import { LeafletModule } from '@asymmetrik/ngx-leaflet';

  import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';

  import { ChartModule } from 'angular2-chartjs';




@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [

    ElectricityComponent,
    ElectricityChartComponent,
    DashComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,

    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    SlideOutComponent,



  ],
})
export class DashModule { }
