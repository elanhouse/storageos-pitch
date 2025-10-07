'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

export default function ClosingSlide() {
  return (
    <SlideLayout title="Join Us">
      <motion.div
        className="space-y-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Main Message */}
        <motion.div variants={scaleIn} className="text-center py-10">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Storage<span className="text-yellow-300">OS</span>
          </h2>
          <p className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            The <span className="text-blue-primary">Analytics Revolution</span>
            <br />
            for Real Estate
          </p>
        </motion.div>

        {/* What We're Building */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue-radial rounded-2xl p-10 border-2 border-blue-primary">
          <h3 className="text-3xl font-bold mb-8 text-center">WHAT WE'RE BUILDING</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-6xl mb-4">🧠</div>
              <h4 className="text-2xl font-bold mb-3">Intelligence Layer</h4>
              <p className="text-gray-light">Turn data silos into actionable insights</p>
            </div>
            <div>
              <div className="text-6xl mb-4">🤖</div>
              <h4 className="text-2xl font-bold mb-3">Autonomous Agents</h4>
              <p className="text-gray-light">AI that acts, not just reports</p>
            </div>
            <div>
              <div className="text-6xl mb-4">📈</div>
              <h4 className="text-2xl font-bold mb-3">Revenue Impact</h4>
              <p className="text-gray-light">15-25% lift proven at scale</p>
            </div>
          </div>
        </motion.div>

        {/* Why Now Summary */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
          <div className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
            <h3 className="text-2xl font-bold text-blue-primary mb-4">THE OPPORTUNITY</h3>
            <ul className="space-y-3 text-lg">
              <li>✓ <span className="font-semibold">$48B</span> industry flying blind</li>
              <li>✓ <span className="font-semibold">70%</span> still use spreadsheets</li>
              <li>✓ <span className="font-semibold">AI costs ↓ 90%</span> since 2023</li>
              <li>✓ <span className="font-semibold">12-24 month</span> first-mover window</li>
            </ul>
          </div>

          <div className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
            <h3 className="text-2xl font-bold text-blue-primary mb-4">THE TEAM</h3>
            <ul className="space-y-3 text-lg">
              <li>✓ <span className="font-semibold">Operator-founder</span> with domain expertise</li>
              <li>✓ <span className="font-semibold">Working product</span> generating revenue</li>
              <li>✓ <span className="font-semibold">14% lift</span> proven at own facility</li>
              <li>✓ <span className="font-semibold">Sales + technical</span> complementary skills</li>
            </ul>
          </div>
        </motion.div>

        {/* The Ask */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold mb-6">THE ASK</h3>
          <p className="text-6xl font-bold mb-4">$750K - $1M</p>
          <p className="text-2xl text-white/90 mb-8">To build the category-defining analytics platform for self-storage</p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <p className="font-bold text-xl mb-2">12-Month Goal</p>
              <p className="text-3xl font-bold text-yellow-300">30 customers</p>
              <p className="text-sm text-gray-light">$1.8M ARR</p>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">Series A Target</p>
              <p className="text-3xl font-bold text-yellow-300">$3M+ ARR</p>
              <p className="text-sm text-gray-light">Year 2</p>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">10-Year Vision</p>
              <p className="text-3xl font-bold text-yellow-300">$1B+ ARR</p>
              <p className="text-sm text-gray-light">Real estate OS</p>
            </div>
          </div>
        </motion.div>

        {/* Final Statement */}
        <motion.div variants={scaleIn} className="text-center py-10">
          <p className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We're not building <span className="line-through text-gray-mid">software</span>.
          </p>
          <p className="text-5xl md:text-6xl font-bold leading-tight">
            We're building an <span className="text-yellow-300">autonomous organism</span>
            <br />
            that <span className="text-blue-primary">learns</span>, <span className="text-blue-primary">acts</span>, and <span className="text-blue-primary">earns</span>.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="text-center">
          <div className="inline-block bg-gradient-blue rounded-2xl px-16 py-8 shadow-[0_0_80px_rgba(0,174,239,0.9)] animate-glow-pulse">
            <p className="text-5xl font-bold mb-3">Let's build the future</p>
            <p className="text-2xl text-white/90">Storage<span className="text-yellow-300">OS</span></p>
          </div>
        </motion.div>

        {/* Navigation Hint */}
        <motion.div variants={fadeInUp} className="text-center">
          <p className="text-sm text-gray-mid">
            Press <span className="text-blue-primary font-semibold">Home</span> to restart | Use <span className="text-blue-primary font-semibold">⚡ Quick Pitch</span> button for 5-slide version
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
