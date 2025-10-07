'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

export default function SolutionSlide() {
  return (
    <SlideLayout title="The Solution">
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Storage<span className="text-yellow-300">OS</span>
          </h2>
          <p className="text-2xl text-gray-light mb-2">
            The <span className="text-blue-primary font-bold">Analytics-First</span> Operating System
          </p>
          <p className="text-xl text-gray-mid">
            Data Integration → Insights → Autonomous Action
          </p>
        </motion.div>

        {/* 4-Layer Architecture */}
        <motion.div variants={fadeInUp} className="space-y-4">
          {/* Layer 4: Autonomous Agent Layer */}
          <div className="bg-gradient-blue-radial rounded-2xl p-6 border-2 border-blue-primary">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-primary rounded-full flex items-center justify-center text-2xl font-bold">4</div>
              <div>
                <h3 className="text-2xl font-bold">AUTONOMOUS AGENT LAYER</h3>
                <p className="text-sm text-gray-light">AI agents that act on insights</p>
              </div>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="bg-black-primary rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📢</div>
                <p className="font-bold text-sm mb-1">Marketing Agent</p>
                <p className="text-xs text-gray-light">Auto-adjusts ad spend by channel ROI</p>
              </div>
              <div className="bg-black-primary rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">💰</div>
                <p className="font-bold text-sm mb-1">Pricing Agent</p>
                <p className="text-xs text-gray-light">Dynamic rates per unit demand</p>
              </div>
              <div className="bg-black-primary rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🔧</div>
                <p className="font-bold text-sm mb-1">Operations Agent</p>
                <p className="text-xs text-gray-light">Predictive maintenance scheduling</p>
              </div>
              <div className="bg-black-primary rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">💬</div>
                <p className="font-bold text-sm mb-1">Customer Agent</p>
                <p className="text-xs text-gray-light">Proactive churn prevention</p>
              </div>
              <div className="bg-black-primary rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📊</div>
                <p className="font-bold text-sm mb-1">Finance Agent</p>
                <p className="text-xs text-gray-light">Cash flow forecasting</p>
              </div>
            </div>
          </div>

          {/* Layer 3: Analytics Intelligence Layer */}
          <div className="bg-blue-dark/30 rounded-2xl p-6 border-2 border-blue-dark ml-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-dark rounded-full flex items-center justify-center text-2xl font-bold">3</div>
              <div>
                <h3 className="text-2xl font-bold">ANALYTICS INTELLIGENCE LAYER</h3>
                <p className="text-sm text-gray-light">AI that generates insights</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black-primary rounded-lg p-4">
                <p className="font-bold mb-2 text-blue-primary">🎯 Attribution Engine</p>
                <ul className="text-xs text-gray-light space-y-1">
                  <li>• Multi-touch attribution</li>
                  <li>• Channel performance</li>
                  <li>• CAC by source</li>
                </ul>
              </div>
              <div className="bg-black-primary rounded-lg p-4">
                <p className="font-bold mb-2 text-blue-primary">🔮 Predictive Models</p>
                <ul className="text-xs text-gray-light space-y-1">
                  <li>• Churn prediction</li>
                  <li>• Demand forecasting</li>
                  <li>• Pricing optimization</li>
                </ul>
              </div>
              <div className="bg-black-primary rounded-lg p-4">
                <p className="font-bold mb-2 text-blue-primary">📈 Performance Analytics</p>
                <ul className="text-xs text-gray-light space-y-1">
                  <li>• RevPAU (Revenue per available unit)</li>
                  <li>• Portfolio benchmarking</li>
                  <li>• Cohort analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Layer 2: Data Transformation Layer */}
          <div className="bg-blue-glow/20 rounded-2xl p-6 border-2 border-blue-glow ml-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-glow rounded-full flex items-center justify-center text-2xl font-bold">2</div>
              <div>
                <h3 className="text-2xl font-bold">DATA TRANSFORMATION LAYER</h3>
                <p className="text-sm text-gray-light">Cleaning, enrichment & normalization</p>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap justify-center text-sm">
              <span className="bg-black-primary px-4 py-2 rounded-full">📋 Data validation</span>
              <span className="bg-black-primary px-4 py-2 rounded-full">🔄 Format standardization</span>
              <span className="bg-black-primary px-4 py-2 rounded-full">🔗 Entity resolution</span>
              <span className="bg-black-primary px-4 py-2 rounded-full">⚡ Real-time processing</span>
            </div>
          </div>

          {/* Layer 1: Data Integration Layer */}
          <div className="bg-gray-mid/20 rounded-2xl p-6 border-2 border-gray-mid ml-24">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-mid rounded-full flex items-center justify-center text-2xl font-bold text-black-primary">1</div>
              <div>
                <h3 className="text-2xl font-bold">DATA INTEGRATION LAYER</h3>
                <p className="text-sm text-gray-light">Connect to everything</p>
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 text-center text-xs">
              <div className="bg-black-primary p-3 rounded-lg">
                <p className="font-bold mb-1">Yardi</p>
                <p className="text-gray-light">PMS</p>
              </div>
              <div className="bg-black-primary p-3 rounded-lg">
                <p className="font-bold mb-1">SiteLink</p>
                <p className="text-gray-light">PMS</p>
              </div>
              <div className="bg-black-primary p-3 rounded-lg">
                <p className="font-bold mb-1">Google Ads</p>
                <p className="text-gray-light">Marketing</p>
              </div>
              <div className="bg-black-primary p-3 rounded-lg">
                <p className="font-bold mb-1">Meta Ads</p>
                <p className="text-gray-light">Marketing</p>
              </div>
              <div className="bg-black-primary p-3 rounded-lg">
                <p className="font-bold mb-1">GA4</p>
                <p className="text-gray-light">Analytics</p>
              </div>
              <div className="bg-black-primary p-3 rounded-lg">
                <p className="font-bold mb-1">Radius+</p>
                <p className="text-gray-light">Calls/CRM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Live Example */}
        <motion.div variants={scaleIn} className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
          <h3 className="text-2xl font-bold text-blue-primary mb-6 text-center">LIVE EXAMPLE: AUTONOMOUS PRICING</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📊</div>
              <div className="flex-1">
                <p className="font-bold mb-1">Layer 1: Data flows in</p>
                <p className="text-sm text-gray-light">Current occupancy 67%, competitor rates $125, website traffic +23%</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🔄</div>
              <div className="flex-1">
                <p className="font-bold mb-1">Layer 2: Data normalized</p>
                <p className="text-sm text-gray-light">Unified format, validated, enriched with historical trends</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🧠</div>
              <div className="flex-1">
                <p className="font-bold mb-1">Layer 3: AI analyzes</p>
                <p className="text-sm text-gray-light">Predicts 82% occupancy in 2 weeks, identifies $15 revenue opportunity per unit</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">⚡</div>
              <div className="flex-1">
                <p className="font-bold mb-1">Layer 4: Agent acts</p>
                <p className="text-sm text-gray-light bg-green-400/20 border border-green-400 rounded p-2">
                  <span className="text-green-400 font-bold">ACTION:</span> Pricing Agent raises rates $110 → $118 for 10x10 units, adjusts promo discounts, updates website
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-blue-primary/30 text-center">
            <p className="text-xl font-bold">Result: <span className="text-green-400">+$3,600 additional monthly revenue</span> from one facility</p>
          </div>
        </motion.div>

        {/* Key Differentiator */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">THE BREAKTHROUGH</h3>
          <p className="text-3xl md:text-4xl font-bold mb-6">
            We're not building <span className="line-through text-gray-mid">reporting dashboards</span>.
          </p>
          <p className="text-4xl md:text-5xl font-bold leading-tight">
            We're building an <span className="text-yellow-300">autonomous organism</span>
            <br />
            that <span className="text-blue-glow">learns</span>, <span className="text-blue-glow">decides</span>, and <span className="text-blue-glow">acts</span>.
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
