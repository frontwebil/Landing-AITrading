"use client";

import { useEffect, useState } from "react";
import { Brain, Clock, Shield, Target, TrendingUp } from "lucide-react";
import StatsCard from "./StatsCard";
import AIBot from "./AIBot";

const PAIRS = [
  // TOP
  "BTC/USDT",
  "ETH/USDT",
  "BNB/USDT",
  "SOL/USDT",

  "ARB/USDT",
  "OP/USDT",
  "MATIC/USDT",
  "AVAX/USDT",

  "FET/USDT",
  "RNDR/USDT",
  "AGIX/USDT",
  "OCEAN/USDT",

  "DOGE/USDT",
  "SHIB/USDT",
  "PEPE/USDT",
  "BONK/USDT",

  "LTC/USDT",
  "XRP/USDT",
  "ADA/USDT",
  "TRX/USDT",

  "SUI/USDT",
  "APT/USDT",
  "NEAR/USDT",
  "INJ/USDT",
];

interface Trade {
  id: number;
  pair: string;
  percent: number;
  profit: number;
  balanceAfter: number;
  time: string;
}

export default function LiveTerminal() {
  const [balance, setBalance] = useState(100);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [winRate, setWinRate] = useState(81);

  useEffect(() => {
    const interval = setInterval(() => {
      const percent = +(Math.random() * (10 - 2) + 2).toFixed(2);
      const profit = +(balance * (percent / 100)).toFixed(2);
      const newBalance = +(balance + profit).toFixed(2);

      const trade: Trade = {
        id: Date.now(),
        pair: PAIRS[Math.floor(Math.random() * PAIRS.length)],
        percent,
        profit,
        balanceAfter: newBalance,
        time: new Date().toLocaleTimeString(),
      };

      setBalance(newBalance);
      setTrades((prev) => [trade, ...prev].slice(0, 50));

      setWinRate((w) =>
        Math.min(
          90,
          Math.max(55, +(w + (Math.random() * 1.2 - 0.4)).toFixed(1)),
        ),
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [balance]);

  const totalProfit = balance - 100;
  const lastTrade = trades[0];

  // Generate chart points - только если есть минимум 3 сделки
  const chartData = trades.slice(0, 30).reverse();
  const hasEnoughData = chartData.length >= 3;

  let chartPoints: Array<{ x: number; y: number }> = [];
  let pathData = "";

  if (hasEnoughData) {
    const minBalance = Math.min(...chartData.map((t) => t.balanceAfter));
    const maxBalance = Math.max(...chartData.map((t) => t.balanceAfter));
    const range = maxBalance - minBalance || 1;

    chartPoints = chartData.map((t, i) => ({
      x: (i / (chartData.length - 1)) * 100,
      y: 80 - ((t.balanceAfter - minBalance) / range) * 60,
    }));

    pathData = chartPoints
      .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
      .join(" ");
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
        <AIBot />
        <div className="space-y-6">
          {/* TERMINAL */}
          <div className="bg-black/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-2">
                <Shield className="text-purple-400" />
                <span className="text-white font-mono font-semibold">
                  AI Trading Terminal
                </span>
              </div>

              <span className="text-green-400 text-xs font-mono">
                LIVE SIMULATION
              </span>
            </div>

            {/* LOG TERMINAL */}
            <div className="space-y-2 font-mono text-sm mb-6">
              {trades.slice(0, 7).map((t) => (
                <div key={t.id} className="flex gap-3 animate-fade">
                  <span className="text-gray-500">[{t.time}]</span>
                  <span className="text-cyan-400">EXECUTION:</span>
                  <span className="text-gray-300">
                    {t.pair} closed{" "}
                    <span className="text-green-400 font-semibold">
                      +{t.percent}%
                    </span>{" "}
                    (${t.profit.toFixed(2)}) → balance $
                    {t.balanceAfter.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <StatsCard
              icon={TrendingUp}
              label="Баланс"
              value={`$${balance.toFixed(2)}`}
              trend="up"
            />

            <StatsCard
              icon={Clock}
              label="Сделок"
              value={trades.length.toString()}
            />

            <StatsCard
              icon={Target}
              label="Win rate"
              value={`${winRate}%`}
              animate
            />

            <StatsCard icon={Brain} label="AI Status" value="ACTIVE" />
          </div>

          <style>{`
        .animate-fade {
          animation: fade .4s ease forwards;
        }
        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
      </div>

      {/* CHART CARD */}
      <div className="bg-black/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl overflow-hidden relative">
        {/* Purple/Cyan glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-mono">
                {lastTrade ? lastTrade.pair : "SOL/USDT"}
              </div>
              <div className="text-green-400 text-3xl font-bold">
                +{lastTrade ? lastTrade.percent.toFixed(2) : "0.00"}%
              </div>
            </div>
            <div className="flex items-center gap-2 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/30">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
              <span className="text-cyan-400 text-xs font-semibold tracking-wide font-mono">
                LIVE
              </span>
            </div>
          </div>

          {/* Chart */}
          <div className="relative h-40 mb-6">
            {hasEnoughData ? (
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Gradient fill */}
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>

                  {/* Glow effect for line */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Fill area */}
                <path
                  d={`${pathData} L 100 100 L 0 100 Z`}
                  fill="url(#chartGradient)"
                />

                {/* Line with glow */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                />
              </svg>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-purple-400/50 text-sm font-mono">
                  Ожидание данных... ({chartData.length}/3)
                </div>
              </div>
            )}
          </div>

          {/* Profit Display */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-5 text-center shadow-lg">
            <div className="text-gray-400  text-xs font-bold uppercase tracking-wider mb-1.5">
              Profit
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              +${totalProfit.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
