'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

export default function ProblemSlide() {
  return (
    <SlideLayout title="Problem: Flying Blind">
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Self-Storage Operators Are <span className="text-red-500">Flying Blind</span>
          </h2>
          <p className="text-2xl text-gray-light">
            No analytics. No insights. Just <span className="text-white font-semibold">guesswork</span>.
          </p>
        </motion.div>

        {/* Visual Metaphor */}
        <motion.div variants={scaleIn} className="text-center py-8">
          <div className="text-8xl mb-4">✈️🌫️</div>
          <p className="text-xl text-gray-mid italic">
            "We manage $50M+ portfolios with <span className="text-red-400">zero visibility</span> into what's actually working."
          </p>
        </motion.div>

        {/* The Reality Grid */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
          {/* Left: What They Don't Know */}
          <div className="bg-red-500/10 border-2 border-red-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-red-400 mb-6 text-center">WHAT THEY DON'T KNOW</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-red-400 text-2xl">❌</div>
                <div>
                  <p className="font-bold text-lg">Which marketing $ actually work?</p>
                  <p className="text-sm text-gray-light">Spending $50K/mo with no attribution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-red-400 text-2xl">❌</div>
                <div>
                  <p className="font-bold text-lg">Is pricing optimized per unit?</p>
                  <p className="text-sm text-gray-light">Same rate for all 10x10s regardless of demand</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-red-400 text-2xl">❌</div>
                <div>
                  <p className="font-bold text-lg">Which customers will churn?</p>
                  <p className="text-sm text-gray-light">No early warning system</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-red-400 text-2xl">❌</div>
                <div>
                  <p className="font-bold text-lg">What drives occupancy patterns?</p>
                  <p className="text-sm text-gray-light">Seasonal trends invisible</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-red-400 text-2xl">❌</div>
                <div>
                  <p className="font-bold text-lg">Portfolio performance vs market?</p>
                  <p className="text-sm text-gray-light">Flying blind on benchmarks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Cost */}
          <div className="bg-gradient-blue-radial border-2 border-blue-primary rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-blue-primary mb-6 text-center">THE COST</h3>
            <div className="space-y-6">
              <div className="bg-black-primary rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-red-400 mb-2">20%</div>
                <p className="text-lg">Revenue Left on Table</p>
                <p className="text-sm text-gray-light">Poor pricing + ineffective marketing</p>
              </div>
              <div className="bg-black-primary rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-red-400 mb-2">$2.4M</div>
                <p className="text-lg">Lost Per 50-Property Portfolio</p>
                <p className="text-sm text-gray-light">Annually at 70% occupancy</p>
              </div>
              <div className="bg-black-primary rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-red-400 mb-2">70%</div>
                <p className="text-lg">Still Use Spreadsheets</p>
                <p className="text-sm text-gray-light">Manual exports, zero automation</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why This Exists */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
          <h3 className="text-2xl font-bold text-blue-primary mb-6 text-center">WHY THIS PROBLEM EXISTS</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏚️</div>
              <p className="font-bold text-lg mb-2">Legacy Industry</p>
              <p className="text-sm text-gray-light">Built in the 1970s, tools haven't evolved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <p className="font-bold text-lg mb-2">Data Silos</p>
              <p className="text-sm text-gray-light">PMS, CRM, marketing all disconnected</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">👴</div>
              <p className="font-bold text-lg mb-2">Old Playbook</p>
              <p className="text-sm text-gray-light">"This is how we've always done it"</p>
            </div>
          </div>
        </motion.div>

        {/* Target Customer */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">WHO FEELS THIS PAIN MOST?</h3>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-6xl mb-2">👔</div>
              <p className="font-bold text-xl">Regional VPs</p>
              <p className="text-sm text-gray-light">Managing 5-50 properties</p>
            </div>
            <div className="text-4xl text-blue-primary">+</div>
            <div className="text-center">
              <div className="text-6xl mb-2">💼</div>
              <p className="font-bold text-xl">Portfolio CEOs</p>
              <p className="text-sm text-gray-light">Top 200 operators</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20 text-center">
            <p className="text-lg">
              <span className="text-white font-bold">15,000 facilities</span> operated by decision-makers who <span className="text-yellow-300 font-bold">know they're leaving money on the table</span>
            </p>
          </div>
        </motion.div>

        {/* Transition Hint */}
        <motion.div variants={fadeInUp} className="text-center">
          <p className="text-xl text-gray-mid">
            But what if storage operators had the same analytics as <span className="text-blue-primary font-semibold">hotels</span>, <span className="text-blue-primary font-semibold">airlines</span>, and <span className="text-blue-primary font-semibold">ecommerce</span>?
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
