'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';

export default function ShiftSlide() {
  return (
    <SlideLayout title="The Analytics Shift">
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Every Industry Made <span className="text-blue-primary">The Shift</span>
          </h2>
          <p className="text-2xl text-gray-light">From gut feel to <span className="text-white font-semibold">data-driven excellence</span></p>
        </motion.div>

        {/* Industry Examples */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hotels */}
          <motion.div variants={slideInLeft} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🏨</div>
              <div>
                <h3 className="text-3xl font-bold">HOTELS</h3>
                <p className="text-sm text-gray-light">1990s → RevPAR Analytics</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-black-primary rounded-lg p-4">
                <p className="text-red-400 font-bold mb-2">❌ BEFORE</p>
                <p className="text-sm text-gray-light">Fixed pricing, seasonal guesses, spreadsheet chaos</p>
              </div>

              <div className="bg-black-primary rounded-lg p-4">
                <p className="text-green-400 font-bold mb-2">✓ AFTER</p>
                <p className="text-sm text-white mb-2">Dynamic pricing, demand forecasting, competitive intelligence</p>
                <div className="flex gap-4 text-xs text-gray-light">
                  <span>• RevPAR optimization</span>
                  <span>• Channel attribution</span>
                  <span>• Predictive booking</span>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-primary/30">
                <p className="text-center font-bold text-blue-primary text-lg">Result: +25-40% revenue</p>
              </div>
            </div>
          </motion.div>

          {/* Ecommerce */}
          <motion.div variants={slideInRight} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🛒</div>
              <div>
                <h3 className="text-3xl font-bold">ECOMMERCE</h3>
                <p className="text-sm text-gray-light">2000s → Attribution + Personalization</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-black-primary rounded-lg p-4">
                <p className="text-red-400 font-bold mb-2">❌ BEFORE</p>
                <p className="text-sm text-gray-light">Spray & pray marketing, no customer insights, batch & blast emails</p>
              </div>

              <div className="bg-black-primary rounded-lg p-4">
                <p className="text-green-400 font-bold mb-2">✓ AFTER</p>
                <p className="text-sm text-white mb-2">Multi-touch attribution, customer lifetime value, personalized journeys</p>
                <div className="flex gap-4 text-xs text-gray-light">
                  <span>• CAC by channel</span>
                  <span>• Conversion funnels</span>
                  <span>• Churn prediction</span>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-primary/30">
                <p className="text-center font-bold text-blue-primary text-lg">Result: 5-10x ROAS</p>
              </div>
            </div>
          </motion.div>

          {/* Logistics */}
          <motion.div variants={slideInLeft} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">📦</div>
              <div>
                <h3 className="text-3xl font-bold">LOGISTICS</h3>
                <p className="text-sm text-gray-light">2010s → Route Optimization</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-black-primary rounded-lg p-4">
                <p className="text-red-400 font-bold mb-2">❌ BEFORE</p>
                <p className="text-sm text-gray-light">Static routes, manual dispatch, reactive maintenance</p>
              </div>

              <div className="bg-black-primary rounded-lg p-4">
                <p className="text-green-400 font-bold mb-2">✓ AFTER</p>
                <p className="text-sm text-white mb-2">Real-time optimization, predictive analytics, fleet intelligence</p>
                <div className="flex gap-4 text-xs text-gray-light">
                  <span>• Route efficiency</span>
                  <span>• Demand heatmaps</span>
                  <span>• Preventive alerts</span>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-primary/30">
                <p className="text-center font-bold text-blue-primary text-lg">Result: -30% operating costs</p>
              </div>
            </div>
          </motion.div>

          {/* Retail */}
          <motion.div variants={slideInRight} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🏪</div>
              <div>
                <h3 className="text-3xl font-bold">RETAIL</h3>
                <p className="text-sm text-gray-light">2010s → Inventory Intelligence</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-black-primary rounded-lg p-4">
                <p className="text-red-400 font-bold mb-2">❌ BEFORE</p>
                <p className="text-sm text-gray-light">Overstocking, understocking, seasonal surprises</p>
              </div>

              <div className="bg-black-primary rounded-lg p-4">
                <p className="text-green-400 font-bold mb-2">✓ AFTER</p>
                <p className="text-sm text-white mb-2">Demand forecasting, smart replenishment, trend detection</p>
                <div className="flex gap-4 text-xs text-gray-light">
                  <span>• Stock optimization</span>
                  <span>• Sell-through rates</span>
                  <span>• Basket analysis</span>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-primary/30">
                <p className="text-center font-bold text-blue-primary text-lg">Result: +20% margins</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Pattern */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
          <h3 className="text-2xl font-bold text-blue-primary mb-6 text-center">THE PATTERN</h3>
          <div className="flex items-center justify-center gap-6 flex-wrap text-center">
            <div>
              <div className="text-3xl mb-2">📊</div>
              <p className="font-bold">Data Integration</p>
              <p className="text-sm text-gray-light">Unified sources</p>
            </div>
            <div className="text-3xl text-blue-primary">→</div>
            <div>
              <div className="text-3xl mb-2">🤖</div>
              <p className="font-bold">Analytics Layer</p>
              <p className="text-sm text-gray-light">Insights engine</p>
            </div>
            <div className="text-3xl text-blue-primary">→</div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-bold">Automated Action</p>
              <p className="text-sm text-gray-light">AI execution</p>
            </div>
            <div className="text-3xl text-blue-primary">→</div>
            <div>
              <div className="text-3xl mb-2">📈</div>
              <p className="font-bold">Massive Gains</p>
              <p className="text-sm text-gray-light">20-40% lift</p>
            </div>
          </div>
        </motion.div>

        {/* The Opportunity */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold mb-6">SELF-STORAGE IS NEXT</h3>
          <p className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We're bringing <span className="text-yellow-300">hotel-grade analytics</span>
            <br />
            to a <span className="text-blue-glow">$48B industry</span> that's
            <br />
            still using <span className="text-red-400">spreadsheets</span>
          </p>
          <div className="inline-block bg-black-primary rounded-full px-8 py-4 mt-4">
            <p className="text-2xl font-bold">
              The window is <span className="text-green-400">NOW</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
