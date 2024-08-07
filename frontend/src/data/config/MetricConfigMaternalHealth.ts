import {
  defaultHigherIsWorseMapConfig,
} from '../../charts/mapGlobals'
import { type DataTypeConfig } from './MetricConfig'
import {
  populationPctShortLabel,
  populationPctTitle,
} from './MetricConfigUtils'

export const MATERNAL_HEALTH_CATEGORY_DROPDOWNIDS = [
  'maternal_mortality',
] as const

export type MaternalHealthMetricId =
  | 'maternal_mortality_per_100k'
  | 'maternal_mortality_pct_share'
  | 'maternal_mortality_population_pct'
  | 'maternal_deaths_estimated_total'
  | 'live_births_estimated_total'

export const MATERNAL_HEALTH_METRICS: DataTypeConfig[] = [
  {
    categoryId: 'maternal_health',
    dataTypeId: 'maternal_mortality',
    mapConfig: defaultHigherIsWorseMapConfig,
    dataTypeShortLabel: 'Maternal mortality',
    fullDisplayName: 'Maternal mortality',
    fullDisplayNameInline: 'maternal mortality',
    definition: {
      text: '',
    },
    description: {
      text: '',
    },
    dataTableTitle: 'Breakdown summary for maternal mortality',
    metrics: {

      per100k: {
        metricId: 'maternal_mortality_per_100k',
        chartTitle: 'Maternal mortality',
        trendsCardTitleName: 'Rates of maternal mortality over time',
        columnTitleHeader: 'Maternal mortality',
        shortLabel: '% maternal_mortality',
        type: 'pct_rate',
        rateNumeratorMetric: {
          metricId: 'maternal_deaths_estimated_total',
          shortLabel: 'Maternal deaths',
          chartTitle: '',
          type: 'count',
        },
        rateDenominatorMetric: {
          metricId: 'live_births_estimated_total',
          shortLabel: 'Live births',
          chartTitle: '',
          type: 'count',
        },
      },
      pct_share: {
        chartTitle: 'Share of maternal mortality',
        metricId: 'maternal_mortality_pct_share',
        columnTitleHeader: 'Share of maternal mortality',
        shortLabel: '% of maternal_mortality',
        type: 'pct_share',
        populationComparisonMetric: {
          chartTitle: 'Population vs. distribution of total maternal mortality',
          metricId: 'maternal_mortality_population_pct',
          columnTitleHeader: populationPctTitle,
          shortLabel: populationPctShortLabel,
          type: 'pct_share',
        },
      },
    },
  },
]





