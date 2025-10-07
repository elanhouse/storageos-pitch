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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Storage<span className="text-blue-primary">OS</span>
          </h2>
          <p className="text-3xl text-gray-light">
            AI Agents That Run Your Business <span className="text-blue-primary">Autonomously</span>
          </p>
        </motion.div>

        {/* Core Concept */}
        <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
          <p className="text-2xl font-semibold text-white leading-relaxed">
            &ldquo;We're not building <span className="line-through text-gray-mid">dashboards</span>.
            <br />
            We're building the <span className="text-blue-primary">AI brain</span> that <span className="text-blue-primary">runs storage</span>.&rdquo;
          </p>
        </motion.div>

        {/* AI Brain Visualization */}
        <motion.div variants={scaleIn} className="relative">
          <div className="flex justify-center items-center mb-8">
            {/* Central Brain */}
            <div className="w-32 h-32 bg-gradient-blue rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(0,174,239,0.8)] animate-glow-pulse relative z-10">
              <span className="text-5xl">🧠</span>
            </div>
          </div>

          {/* Five Agents */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Marketing Agent */}
            <div className="bg-black-secondary/70 rounded-xl p-6 border border-blue-primary/30 hover:border-blue-primary transition-all glow-box text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="text-lg font-bold text-blue-primary mb-2">[M] Marketing</h4>
              <p className="text-sm text-gray-light">Daily ad optimization & ROI tracking</p>
            </div>

            {/* Pricing Agent */}
            <div className="bg-black-secondary/70 rounded-xl p-6 border border-blue-primary/30 hover:border-blue-primary transition-all glow-box text-center">
              <div className="text-3xl mb-2">💰</div>
              <h4 className="text-lg font-bold text-blue-primary mb-2">[P] Pricing</h4>
              <p className="text-sm text-gray-light">Yield management like hotels</p>
            </div>

            {/* Operations Agent */}
            <div className="bg-black-secondary/70 rounded-xl p-6 border border-blue-primary/30 hover:border-blue-primary transition-all glow-box text-center">
              <div className="text-3xl mb-2">🏢</div>
              <h4 className="text-lg font-bold text-blue-primary mb-2">[O] Operations</h4>
              <p className="text-sm text-gray-light">Predictive analytics & forecasting</p>
            </div>

            {/* Finance Agent */}
            <div className="bg-black-secondary/70 rounded-xl p-6 border border-blue-primary/30 hover:border-blue-primary transition-all glow-box text-center">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="text-lg font-bold text-blue-primary mb-2">[F] Finance</h4>
              <p className="text-sm text-gray-light">Portfolio ROI & budget allocation</p>
            </div>

            {/* Customer Agent */}
            <div className="bg-black-secondary/70 rounded-xl p-6 border border-blue-primary/30 hover:border-blue-primary transition-all glow-box text-center md:col-span-1 col-span-2">
              <div className="text-3xl mb-2">💬</div>
              <h4 className="text-lg font-bold text-blue-primary mb-2">[C] Customer</h4>
              <p className="text-sm text-gray-light">Churn prevention & AI voice</p>
            </div>
          </div>
        </motion.div>

        {/* Live Example */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
          <h3 className="text-2xl font-bold mb-4 text-center">LIVE EXAMPLE</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 text-white rounded-full px-4 py-2 font-bold text-sm">TRIGGER</div>
              <p className="text-lg">Dallas occupancy drops <span className="font-bold">15%</span></p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-yellow-500 text-black rounded-full px-4 py-2 font-bold text-sm">AI DETECTS</div>
              <p className="text-lg">Competitor lowered price</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-primary text-white rounded-full px-4 py-2 font-bold text-sm">AI ACTS</div>
              <p className="text-lg">Cuts price 7%, adds $400 to ads, triggers emails</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-500 text-white rounded-full px-4 py-2 font-bold text-sm">RESULT</div>
              <p className="text-lg"><span className="font-bold">+12% occupancy</span> in 3 weeks — <span className="text-yellow-300 font-bold">ZERO humans involved</span></p>
            </div>
          </div>
        </motion.div>

        {/* Key Differentiator */}
        <motion.div variants={fadeInUp} className="text-center">
          <div className="inline-block bg-black-secondary/80 rounded-full px-8 py-4 border border-blue-primary/50 shadow-[0_0_30px_rgba(0,174,239,0.3)]">
            <p className="text-xl font-semibold">
              <span className="text-blue-primary">Network Effect:</span> Every facility makes <span className="text-white">all facilities</span> smarter
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
