import { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: 'up' | 'down';
  animate?: boolean;
}

export default function StatsCard({ icon: Icon, label, value, trend, animate = false }: StatsCardProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (animate && value.includes('%')) {
      const numValue = parseFloat(value);
      let current = 0;
      const increment = numValue / 50;
      const interval = setInterval(() => {
        current += increment;
        if (current >= numValue) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          setDisplayValue(`${current.toFixed(1)}%`);
        }
      }, 20);
      return () => clearInterval(interval);
    } else {
      setDisplayValue(value);
    }
  }, [value, animate]);

  return (
    <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
            <Icon className="w-6 h-6 text-purple-400" strokeWidth={1.5} />
          </div>
          {trend && (
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
              trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              <span className="text-xs font-mono">
                {trend === 'up' ? '↗' : '↘'}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            {displayValue}
          </div>
          <div className="text-sm text-gray-400">{label}</div>
        </div>
      </div>
    </div>
  );
}
