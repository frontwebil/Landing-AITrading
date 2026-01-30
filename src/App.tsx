import {
  Brain,
  Shield,
  Zap,
  Eye,
  Users,
  Target,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import LiveTerminal from "./components/LiveTerminal";
import RegistrationForm from "./components/RegistrationForm";
import TechFeature from "./components/TechFeature";
import Testimonial from "./components/Testimonial";
import PricingCard from "./components/PricingCard";
import ChartCard from "./components/HumanChart";

const humanData = [
  { x: 1, value: 1 },
  { x: 2, value: 13 },
  { x: 3, value: 3 },
  { x: 4, value: 13 },
  { x: 5, value: 7 },
  { x: 6, value: 43 },
  { x: 7, value: 3 },
  { x: 8, value: 13 },
  { x: 9, value: 7 },
  { x: 10, value: 7 },
];

const aiData = [
  { x: 1, value: 50 },
  { x: 2, value: 50 },
  { x: 3, value: 50 },
  { x: 4, value: 60 },
  { x: 5, value: 65 },
  { x: 6, value: 70 },
  { x: 7, value: 72 },
  { x: 8, value: 75 },
  { x: 9, value: 80 },
  { x: 10, value: 100 },
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <header className="border-b border-purple-500/20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-orange-500 rounded-xl">
                  <Brain className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  SMARTCHAIN AI
                </span>
              </div>
              <div className="hidden md:flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-purple-400">
                  <span className="font-mono">AI-powered</span>
                </div>
                <div className="flex items-center gap-2 text-orange-400">
                  <span className="font-mono">Crypto</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="font-mono">Automation</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    АИ работает.
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                      Вы наблюдаете.
                    </span>
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    Начните с тестового доступа всего от{" "}
                    <span className="text-orange-400 font-bold">250 €</span> и
                    посмотрите, как AI-система работает в реальном времени.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-purple-500/20 rounded-full">
                        <Zap className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-gray-300">
                        AI анализирует рынок 24/7
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-purple-500/20 rounded-full">
                        <Brain className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-gray-300">
                        Принимает решения на основе данных и алгоритмов
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-purple-500/20 rounded-full">
                        <Target className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-gray-300">
                        Работает автоматически
                      </span>
                    </div>
                  </div>

                  <div className="inline-block p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                    <p className="text-sm text-gray-400">
                      <span className="text-orange-400 font-semibold">
                        Рынок меняется каждую миллисекунду
                      </span>{" "}
                      — AI реагирует быстрее человека.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <RegistrationForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Сегодня рынок — это{" "}
                <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  скорость и данные
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-red-900/20 to-black/80 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-red-400" />
                  <h3 className="text-2xl font-bold text-white">Человек</h3>
                </div>
                <ChartCard
                  title="Человек"
                  icon={<Users className="w-8 h-8 text-red-400" />}
                  color="border-red-500/30 text-red-400"
                  data={humanData}
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">сомневается</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">реагирует с задержкой</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">подвержен эмоциям</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-black/80 backdrop-blur-xl border border-purple-500/40 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <Brain className="w-8 h-8 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">
                      AI-система
                    </h3>
                  </div>
                  <ChartCard
                    title="AI-система"
                    icon={<Brain className="w-8 h-8 text-purple-400" />}
                    color="border-purple-500/40 text-purple-400"
                    data={aiData}
                  />
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-1 bg-green-500/20 rounded-full">
                        <Zap className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300">
                        анализирует рынок в реальном времени
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-1 bg-green-500/20 rounded-full">
                        <Zap className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300">
                        действует по алгоритмам
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-1 bg-green-500/20 rounded-full">
                        <Zap className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300">работает без пауз</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                    <p className="text-purple-300 font-semibold">
                      Это вычисления, логика и технологии.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Полностью автоматизированный
                </span>
                <br />
                процесс
              </h2>
              <p className="text-xl text-gray-400">
                Технология, которой доверяют
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <TechFeature
                icon={Brain}
                title="AI Market Analysis Engine"
                description="AI анализирует рынок в реальном времени и выявляет оптимальные точки входа и выхода."
                badge="ENGINE"
              />
              <TechFeature
                icon={Shield}
                title="Security by Design"
                description="Банковское шифрование и архитектура без передачи средств."
                badge="SECURITY"
              />
              <TechFeature
                icon={Target}
                title="Smart Trading Logic"
                description="Алгоритмы, работающие на исторических и текущих рыночных данных."
                badge="LOGIC"
              />
              <TechFeature
                icon={Eye}
                title="Live Performance Dashboard"
                description="АI сопровождает сделку по стратегии. Вы наблюдаете процесс и результат."
                badge="MONITORING"
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/60 backdrop-blur-xl border border-purple-500/40 rounded-full mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-purple-400 font-mono font-semibold text-lg">
                  AI CORE — ONLINE
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  LIVE EXECUTION MODE
                </span>
              </h2>
              <p className="text-gray-400">
                Система активна 24/7. Данные обновляются в реальном времени
              </p>
            </div>

            <LiveTerminal />
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Отзывы{" "}
                <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  пользователей
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Testimonial
                name="Anna Kovács"
                text="Подключилась без опыта. За первый месяц накопила на поездку мечты. Очень удобно, что все автоматизировано."
              />
              <Testimonial
                name="Marek Novák"
                text="Использую как дополнительный источник дохода. Понравилось, что система сразу понятна и не требует постоянного контроля."
              />
              <Testimonial
                name="Peter Marek"
                text="Использую Al уже 5 месяцев. Работает автономно, без моего участия. Удобный формат и стабильная работа системы."
              />
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <AlertCircle className="w-4 h-4" />
              <span>Результаты индивидуальны и зависят от рынка</span>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Выберите формат{" "}
                <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  подключения к AI
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <PricingCard
                name="START"
                price="250 €"
                badge="Тестовый доступ"
                features={[
                  "Знакомство с логикой AI",
                  "Полная автоматизация",
                  "Наблюдение за работой системы",
                ]}
              />
              <PricingCard
                name="PRO"
                recommended
                features={[
                  "Расширенные AI-стратегии",
                  "Приоритетная обработка данных",
                  "Быстрый доступ к обновлениям",
                ]}
              />
              <PricingCard
                name="ELITE"
                limited
                features={[
                  "Расширенные функции",
                  "Персональная конфигурация AI",
                  "Ограниченный доступ",
                ]}
              />
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/20 border border-orange-500/40 rounded-full mb-6">
                <AlertCircle className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold">
                  Количество подключений ограничено
                </span>
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-2xl text-gray-300 mb-8">
                Рынок уже работает на алгоритмах.
                <br />
                <span className="text-purple-400 font-semibold">
                  Вопрос — подключаетесь ли вы.
                </span>
              </p>

              <button className="group relative px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center gap-3">
                  АКТИВИРОВАТЬ ДОСТУП К AI
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-purple-500/20 backdrop-blur-xl py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-orange-500 rounded-xl">
                  <Brain className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  SMARTCHAIN AI
                </span>
              </div>
              <div className="text-sm text-gray-500">
                © 2026 SmartChain AI. Все права защищены.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
