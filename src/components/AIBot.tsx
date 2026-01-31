import { Brain } from "lucide-react";

export type AIState =
  | "ANALYZING"
  | "ENTRY"
  | "EXECUTING"
  | "MONITORING"
  | "CLOSING";

export default function AIBot({ aiState }: { aiState: AIState }) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative aspect-square">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-orange-600/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-ping"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: "2s",
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 w-48 h-48 bg-gradient-to-br from-gray-900 to-black rounded-full border-2 border-purple-500/50 flex items-center justify-center shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-orange-600/20 rounded-full animate-pulse"></div>

            <div className="relative">
              <Brain className="w-20 h-20 text-purple-400" strokeWidth={1.5} />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
            </div>
          </div>

          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2">
            <div className="relative">
              {/* <Eye className="w-8 h-8 text-purple-400" /> */}
              <div className="absolute inset-0 bg-purple-500/50 blur-xl animate-pulse"></div>
            </div>
          </div>

          <div className="absolute top-1/4 right-1/4 transform translate-x-1/2">
            <div className="relative">
              {/* <Eye className="w-8 h-8 text-purple-400" /> */}
              <div className="absolute inset-0 bg-purple-500/50 blur-xl animate-pulse"></div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            {/* <Activity className="w-6 h-6 text-orange-400 animate-pulse" /> */}
          </div>

          <div className="absolute inset-0 animate-rotate-ring">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="100"
              />

              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/60 backdrop-blur-xl border border-purple-500/30 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
          <span className="text-purple-400 font-mono text-sm">{aiState}</span>
        </div>
      </div>
    </div>
  );
}
