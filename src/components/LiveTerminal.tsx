"use client";

import { useEffect, useState } from "react";
import { Brain, Clock, Shield, Target, TrendingUp } from "lucide-react";
import StatsCard from "./StatsCard";
import AIBot from "./AIBot";

const PAIRS = [
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

interface Log {
  id: number;
  text: string;
  type: "AI" | "EXECUTION" | "MONITORING";
  time: string;
}

export type AIState =
  | "ANALYZING"
  | "ENTRY"
  | "EXECUTING"
  | "MONITORING"
  | "CLOSING";

export default function LiveTerminal() {
  const [aiState, setAiState] = useState<AIState>("ANALYZING");
  const [logs, setLogs] = useState<Log[]>([]);
  const [balance, setBalance] = useState(100);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [winRate, setWinRate] = useState(80);

  function pushLog(text: string, type: Log["type"]) {
    setLogs((prev) =>
      [
        {
          id: Date.now() + Math.random(),
          text,
          type,
          time: new Date().toLocaleTimeString(),
        },
        ...prev,
      ].slice(0, 10),
    );
  }

  useEffect(() => {
    let isRunning = false;

    const runTradeCycle = async () => {
      if (isRunning) return;
      isRunning = true;

      const pair = PAIRS[Math.floor(Math.random() * PAIRS.length)];

      setAiState("ANALYZING");
      pushLog("Scanning market opportunities", "AI");

      await delay(1200);

      setAiState("ENTRY");
      pushLog(`Entry conditions confirmed for ${pair}`, "AI");

      await delay(1000);

      setAiState("EXECUTING");
      pushLog(`Opening position on ${pair}`, "EXECUTION");

      await delay(1000);
      pushLog("Position opened successfully", "EXECUTION");

      await delay(1300);

      setAiState("MONITORING");
      pushLog("Monitoring trade performance", "AI");

      await delay(1400);

      const percent = +(Math.random() * (10 - 2) + 2).toFixed(2);
      const profit = +(balance * (percent / 100)).toFixed(2);
      const newBalance = +(balance + profit).toFixed(2);

      setWinRate((w) =>
        Math.min(
          90,
          Math.max(55, +(w + (Math.random() * 1.2 - 0.4)).toFixed(1)),
        ),
      );

      setAiState("CLOSING");
      pushLog(`Position closed +${percent}% (+$${profit})`, "EXECUTION");

      await delay(1000);

      setAiState("MONITORING");
      pushLog(`Balance updated: $${newBalance}`, "MONITORING");

      setBalance(newBalance);

      setTrades((prev) =>
        [
          {
            id: Date.now(),
            pair,
            percent,
            profit,
            balanceAfter: newBalance,
            time: new Date().toLocaleTimeString(),
          },
          ...prev,
        ].slice(0, 50),
      );

      isRunning = false;
    };

    const interval = setInterval(runTradeCycle, 5500);

    return () => clearInterval(interval);
  }, [balance]);

  const totalProfit = balance - 100;
  const lastTrade = trades[0];

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

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
        <AIBot aiState={aiState} />
        <div className="space-y-6">
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

            <div className="space-y-2 font-mono text-sm mb-6">
              {logs.map((log) => (
                <div key={log.id} className="flex gap-3 animate-fade">
                  <span className="text-gray-500">[{log.time}]</span>

                  <span
                    className={
                      log.type === "AI"
                        ? "text-purple-400"
                        : log.type === "EXECUTION"
                          ? "text-cyan-400"
                          : "text-green-400"
                    }
                  >
                    [{log.type}]
                  </span>

                  <span className="text-gray-300">{log.text}</span>
                </div>
              ))}
            </div>
          </div>

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

      <div className="bg-black/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

        <div className="relative z-10">
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

          <div className="relative h-40 mb-6">
            {hasEnoughData ? (
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
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

                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  d={`${pathData} L 100 100 L 0 100 Z`}
                  fill="url(#chartGradient)"
                />

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
