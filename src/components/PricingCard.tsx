import { Check, ArrowRight, Zap } from "lucide-react";

interface PricingCardProps {
  name: string;
  price?: string;
  features: string[];
  badge?: string;
  recommended?: boolean;
  limited?: boolean;
  test?: boolean;
}

export default function PricingCard({
  name,
  price,
  features,
  badge,
  recommended,
  test,
  limited,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl flex flex-col border ${
        recommended ? "border-orange-500/60 scale-105" : "border-purple-500/30 "
      } rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/60 ${
        recommended ? "shadow-2xl shadow-orange-500/20" : ""
      }`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full border border-orange-400/50">
            <span className="text-white text-sm font-bold">РЕКОМЕНДУЕМЫЙ</span>
          </div>
        </div>
      )}

      {test && (
        <div className="absolute -top-4 right-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/30 border border-purple-500/50 rounded-full">
            <span className="text-purple-400 text-xs font-bold">Тестовый доступ</span>
          </div>
        </div>
      )}

      {limited && (
        <div className="absolute -top-4 right-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/30 border border-purple-500/50 rounded-full">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-xs font-bold">LIMITED</span>
          </div>
        </div>
      )}

      <div className="mb-6">
        {/* {badge && (
          <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full mb-4">
            <span className="text-purple-400 text-sm font-semibold">
              {badge}
            </span>
          </div>
        )} */}
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        {price && (
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              {price}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1 p-1 bg-purple-500/20 rounded-full">
              <Check className="w-4 h-4 text-purple-400" strokeWidth={3} />
            </div>
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      <button className="group relative w-full px-6 py-4 bg-gradient-to-r mt-auto from-purple-500 to-purple-600 hover:from-purple-600 hover:to-orange-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        <span className="relative flex items-center justify-center gap-2">
          ВЫБРАТЬ ПАКЕТ
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
    </div>
  );
}
