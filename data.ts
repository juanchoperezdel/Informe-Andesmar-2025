
import { KPIData, MonthlyTicketData, RouteData, AudienceData, ChannelData } from './types';

export const mainKPIs: KPIData[] = [
  { label: 'Total de usuarios', value: '1.654.084', change: '+41.8%', icon: 'users', paid: '1.178.691', organic: '475.393' },
  { label: 'Tasa de conversión', value: '6,38 %', change: '+15.7%', icon: 'conversion', paid: '9,57 %', organic: '3,19 %' },
  { label: 'AOV (Carritos)', value: '$ 84.697', change: '+19.4%', icon: 'money', paid: '$ 86.421', organic: '$ 80.321' },
  { label: 'Carritos', value: '105.585', change: '-13.6%', icon: 'cart', paid: '75.240', organic: '30.345' },
  { label: 'Boletos', value: '158.378', change: '-20.8%', icon: 'ticket', paid: '112.855', organic: '45.523' },
  { label: 'Total de ingresos', value: '$ 8.942.694.993', change: '+3.1%', icon: 'money', paid: '$ 6.372.564.452', organic: '$ 2.570.130.541' },
];

export const interannualData: MonthlyTicketData[] = [
  { month: 'Ene', y22: 13141, y23: 19858, y24: 21612, y25: 24197 },
  { month: 'Feb', y22: 12138, y23: 14807, y24: 18427, y25: 18261 },
  { month: 'Mar', y22: 9793, y23: 12548, y24: 17895, y25: 13781 },
  { month: 'Abr', y22: 8061, y23: 11927, y24: 14494, y25: 13207 },
  { month: 'May', y22: 6616, y23: 10749, y24: 12239, y25: 10140 },
  { month: 'Jun', y22: 8570, y23: 12168, y24: 14189, y25: 10239 },
  { month: 'Jul', y22: 13342, y23: 13924, y24: 17566, y25: 13253 },
  { month: 'Ago', y22: 9164, y23: 8709, y24: 13775, y25: 10730 },
  { month: 'Sep', y22: 12332, y23: 15236, y24: 15293, y25: 9873 },
  { month: 'Oct', y22: 12304, y23: 14306, y24: 15914, y25: 7932 },
  { month: 'Nov', y22: 13137, y23: 14183, y24: 17162, y25: 12487 },
  { month: 'Dic', y22: 16421, y23: 19407, y24: 21481, y25: 14278 },
];

export const routePerformance: RouteData[] = [
  { name: 'MZA → STGO', organic: 0, paid: 1446, referral: 0, total: 1446 },
  { name: 'STGO → MZA', organic: 0, paid: 930, referral: 0, total: 930 },
  { name: 'MZA → VIÑA', organic: 0, paid: 910, referral: 0, total: 910 },
  { name: 'VIÑA → MZA', organic: 0, paid: 741, referral: 0, total: 741 },
  { name: 'BAR → PMO', organic: 0, paid: 348, referral: 0, total: 348 },
];

export const socialAudience: AudienceData[] = [
  { platform: 'YouTube', percentage: 81.48 },
  { platform: 'Instagram', percentage: 76.23 },
  { platform: 'Facebook', percentage: 74.54 },
  { platform: 'TikTok', percentage: 49.5 },
  { platform: 'Twitter', percentage: 43.15 },
  { platform: 'Pinterest', percentage: 38.45 },
  { platform: 'LinkedIn', percentage: 37.9 },
  { platform: 'Reddit', percentage: 32.4 },
];

export const competitorMarketShare2024 = [
  { domain: 'flechabus.com.ar', total: 25.9, directo: 32.1, referido: 8.14, busq_org: 19.99, traf_pago: 43.96 },
  { domain: 'andesmar.com', total: 18.11, directo: 17.86, referido: 45.28, busq_org: 14.23, traf_pago: 24.41 },
  { domain: 'viatac.com.ar', total: 11.09, directo: 7.34, referido: 1.6, busq_org: 17.65, traf_pago: 0.85 },
  { domain: 'viabariloche.com.ar', total: 9.42, directo: 7.36, referido: 2.54, busq_org: 13.2, traf_pago: 1.49 },
  { domain: 'plusmar.com.ar', total: 9.37, directo: 7.59, referido: 27.19, busq_org: 9.22, traf_pago: 3.67 },
];

export const paidChannelData: ChannelData[] = [
  { month: 'Ene', vol2024: 12211, vol2025: 14640, variation: 20 },
  { month: 'Feb', vol2024: 11533, vol2025: 10964, variation: -5 },
  { month: 'Mar', vol2024: 12162, vol2025: 9838, variation: -19 },
  { month: 'Abr', vol2024: 6887, vol2025: 10764, variation: 56 },
  { month: 'May', vol2024: 5118, vol2025: 8300, variation: 62 },
  { month: 'Jun', vol2024: 10531, vol2025: 8456, variation: -20 },
  { month: 'Jul', vol2024: 11769, vol2025: 10034, variation: -15 },
  { month: 'Ago', vol2024: 9314, vol2025: 9037, variation: -3 },
  { month: 'Sep', vol2024: 10171, vol2025: 7405, variation: -27 },
  { month: 'Oct', vol2024: 10958, vol2025: 5024, variation: -54 },
  { month: 'Nov', vol2024: 10575, vol2025: 8124, variation: -23 },
  { month: 'Dic', vol2024: 13399, vol2025: 10268, variation: -23 },
];

export const organicChannelData: ChannelData[] = [
  { month: 'Ene', vol2024: 9401, vol2025: 9557, variation: 2 },
  { month: 'Feb', vol2024: 6894, vol2025: 7297, variation: 6 },
  { month: 'Mar', vol2024: 5733, vol2025: 3943, variation: -31 },
  { month: 'Abr', vol2024: 7607, vol2025: 2443, variation: -68 },
  { month: 'May', vol2024: 7121, vol2025: 1840, variation: -74 },
  { month: 'Jun', vol2024: 3658, vol2025: 1783, variation: -51 },
  { month: 'Jul', vol2024: 5797, vol2025: 3219, variation: -44 },
  { month: 'Ago', vol2024: 4461, vol2025: 1693, variation: -62 },
  { month: 'Sep', vol2024: 5122, vol2025: 2468, variation: -52 },
  { month: 'Oct', vol2024: 4956, vol2025: 2908, variation: -41 },
  { month: 'Nov', vol2024: 6587, vol2025: 4364, variation: -34 },
  { month: 'Dic', vol2024: 8082, vol2025: 4010, variation: -50 },
];
