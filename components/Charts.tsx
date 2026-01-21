
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, ComposedChart
} from 'recharts';
import { COLORS } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 shadow-xl border border-gray-100 rounded-lg">
        <p className="font-bold text-gray-900 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            <span className="font-medium">{entry.name}:</span> {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const InterannualTicketsChart: React.FC<{ data: any[] }> = ({ data }) => (
  <div className="h-[400px] w-full mt-8">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar name="2023" dataKey="y23" fill="#F43F5E" radius={[4, 4, 0, 0]} />
        <Bar name="2024" dataKey="y24" fill="#475569" radius={[4, 4, 0, 0]} />
        <Bar name="2025" dataKey="y25" fill={COLORS.blue} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const RoutesBarChart: React.FC<{ data: any[] }> = ({ data }) => (
  <div className="h-[400px] w-full mt-8">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ left: 50 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" />
        <XAxis type="number" axisLine={false} tickLine={false} />
        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#111827', fontSize: 11, fontWeight: 600 }} width={120} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar name="Ventas 2025" dataKey="total" fill={COLORS.blue} radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const MarketTrendChart: React.FC = () => {
  const data = [
    { name: 'ene 2025', tam: 45 },
    { name: 'feb 2025', tam: 43 },
    { name: 'mar 2025', tam: 38 },
    { name: 'abr 2025', tam: 25 },
    { name: 'may 2025', tam: 23 },
    { name: 'jun 2025', tam: 28 },
    { name: 'jul 2025', tam: 15 },
    { name: 'ago 2025', tam: 30 },
    { name: 'sept 2025', tam: 22 },
    { name: 'oct 2025', tam: 50 },
    { name: 'nov 2025', tam: 90 },
    { name: 'dic 2025', tam: 100 },
  ];

  return (
    <div className="h-[300px] w-full mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTAM" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} unit=" M" />
          <Tooltip />
          <Area type="monotone" dataKey="tam" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorTAM)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ChannelEvolutionChart: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="h-[400px] w-full mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
          <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
          <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="left" name="Volumen 2024" dataKey="vol2024" fill="#94A3B8" radius={[4, 4, 0, 0]} barSize={20} />
          <Bar yAxisId="left" name="Volumen 2025" dataKey="vol2025" fill="#4F46E5" radius={[4, 4, 0, 0]} barSize={20} />
          <Line yAxisId="right" type="monotone" name="Variación %" dataKey="variation" stroke="#10B981" strokeWidth={3} dot={{ r: 4, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
