'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function ProblemSlide() {
  return (
    <SlideLayout title="The Problem">
      <motion.div
        className="space-y-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 glow-text">
            Even the Biggest Storage Companies
            <br />
            Are <span className="text-blue-primary">Flying Blind</span>
          </h2>
        </motion.div>

        {/* WHO Section */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
          <h3 className="text-2xl font-bold text-blue-primary mb-4">WHO</h3>
          <div className="space-y-3 text-gray-light text-lg">
            <p>• <span className="text-white font-semibold">CEOs, VPs of Operations, VPs of Marketing</span> at top 100-200 self-storage portfolios</p>
            <p>• Multi-location operators (<span className="text-white">5+ facilities</span>, <span className="text-white">$10M+ revenue</span>)</p>
            <p>• Decision makers managing <span className="text-white">thousands of units</span> and <span className="text-white">millions in revenue</span></p>
          </div>
        </motion.div>

        {/* WHAT Section */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
          <h3 className="text-2xl font-bold text-blue-primary mb-4">WHAT</h3>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
              &ldquo;Multi-location storage executives make <span className="text-blue-primary">million-dollar decisions</span> on pricing, marketing, and expansion
              <span className="text-red-400"> without unified visibility</span> — wasting up to <span className="text-red-400 font-bold">20% of potential revenue</span> every month.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
          {/* Pain Point 1 */}
          <div className="bg-gradient-blue-radial p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
            <div className="text-4xl mb-3">🔌</div>
            <h4 className="text-xl font-bold mb-2">Data Silos</h4>
            <p className="text-gray-light text-sm">
              Google Ads, PMS, Radius+, Analytics all disconnected
            </p>
          </div>

          {/* Pain Point 2 */}
          <div className="bg-gradient-blue-radial p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
            <div className="text-4xl mb-3">🎲</div>
            <h4 className="text-xl font-bold mb-2">Blind Decisions</h4>
            <p className="text-gray-light text-sm">
              Can't answer: "Which dollar drives occupancy?"
            </p>
          </div>

          {/* Pain Point 3 */}
          <div className="bg-gradient-blue-radial p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
            <div className="text-4xl mb-3">💸</div>
            <h4 className="text-xl font-bold mb-2">20% Revenue Loss</h4>
            <p className="text-gray-light text-sm">
              $2M+ annually per portfolio in missed revenue
            </p>
          </div>
        </motion.div>

        {/* Evidence */}
        <motion.div variants={fadeInUp} className="text-center">
          <div className="inline-flex items-center gap-4 bg-black-secondary/70 rounded-full px-6 py-3 border border-blue-primary/30">
            <span className="text-gray-light">Industry data:</span>
            <span className="text-blue-primary font-semibold">70% use spreadsheets</span>
            <span className="text-gray-mid">|</span>
            <span className="text-blue-primary font-semibold">8+ disconnected tools</span>
            <span className="text-gray-mid">|</span>
            <span className="text-blue-primary font-semibold">15-25% occupancy variance</span>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
