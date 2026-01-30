import { LucideIcon } from 'lucide-react';

interface TechFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
}

export default function TechFeature({ icon: Icon, title, description, badge }: TechFeatureProps) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 rounded-2xl p-8 transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-orange-600/0 group-hover:from-purple-600/10 group-hover:to-orange-600/10 rounded-2xl transition-all duration-300"></div>

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
            <Icon className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
          </div>
          <div className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full">
            <span className="text-orange-400 text-xs font-mono font-semibold">{badge}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>

        <div className="mt-6 h-1 bg-gradient-to-r from-purple-500/50 to-orange-500/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
}
