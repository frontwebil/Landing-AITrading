import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  text: string;
  rating?: number;
}

export default function Testimonial({ name, text, rating = 5 }: TestimonialProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
        ))}
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">{text}</p>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">{name.charAt(0)}</span>
        </div>
        <div>
          <div className="text-white font-semibold">{name}</div>
          <div className="text-gray-500 text-sm">Verified User</div>
        </div>
      </div>
    </div>
  );
}
