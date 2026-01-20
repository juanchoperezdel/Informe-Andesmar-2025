
export interface KPIData {
  label: string;
  value: string;
  change: string;
  icon: 'users' | 'conversion' | 'cart' | 'ticket' | 'money';
  paid?: string;
  organic?: string;
}

export interface MonthlyTicketData {
  month: string;
  y22: number;
  y23: number;
  y24: number;
  y25: number;
}

export interface RouteData {
  name: string;
  organic: number;
  paid: number;
  referral: number;
  total: number;
}

export interface CompetitorTraffic {
  domain: string;
  percentage: number;
  year: '2023' | '2024';
}

export interface AudienceData {
  platform: string;
  percentage: number;
}

export interface ChannelData {
  month: string;
  vol2024: number;
  vol2025: number;
  variation: number;
}
