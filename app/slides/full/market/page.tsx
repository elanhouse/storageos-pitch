'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function MarketSlide() {
  return (
    <SlideLayout title="Market & Business Model">
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Market <span className="text-blue-primary">&</span> Business Model
          </h2>
        </motion.div>

        {/* Market Size Funnel */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue-radial rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">MARKET SIZE</h3>
          <div className="space-y-4">
            {/* TAM */}
            <div className="bg-blue-primary/20 rounded-lg p-6 border-l-4 border-blue-primary">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-blue-primary">TAM: $520M</h4>
                  <p className="text-gray-light">Top 200 operators (15,000 facilities)</p>
                </div>
                <div className="text-4xl">🎯</div>
              </div>
            </div>

            {/* SAM */}
            <div className="bg-blue-dark/20 rounded-lg p-6 border-l-4 border-blue-dark ml-8">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-blue-dark">SAM: $250M</h4>
                  <p className="text-gray-light">5+ facility operators (25,000 facilities)</p>
                </div>
                <div className="text-3xl">🎪</div>
              </div>
            </div>

            {/* SOM */}
            <div className="bg-blue-glow/20 rounded-lg p-6 border-l-4 border-blue-glow ml-16">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-blue-glow">SOM (Year 3): $15M ARR</h4>
                  <p className="text-gray-light">300 customers (4,500 facilities)</p>
                </div>
                <div className="text-2xl">🚀</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Business Model & Unit Economics */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
          {/* Business Model */}
          <div className="bg-black-secondary/50 rounded-2xl p-6 border border-blue-primary/20">
            <h3 className="text-xl font-bold text-blue-primary mb-4">BUSINESS MODEL</h3>
            <p className="text-2xl font-bold text-white mb-2">SaaS Subscription</p>
            <p className="text-lg text-gray-light mb-4">$299-399 per facility/month</p>
            <div className="space-y-2 text-sm text-gray-light">
              <p>• Tiered pricing (5-10, 11-50, 50+ facilities)</p>
              <p>• 85% gross margin</p>
              <p>• Recurring revenue model</p>
            </div>
          </div>

          {/* Unit Economics */}
          <div className="bg-black-secondary/50 rounded-2xl p-6 border border-blue-primary/20">
            <h3 className="text-xl font-bold text-blue-primary mb-4">UNIT ECONOMICS</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-light">CAC</span>
                <span className="text-2xl font-bold text-white">$8K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-light">LTV</span>
                <span className="text-2xl font-bold text-white">$188K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-light">LTV:CAC Ratio</span>
                <span className="text-3xl font-bold text-blue-primary">23x</span>
              </div>
              <div className="text-center pt-2 border-t border-blue-primary/30">
                <p className="text-sm text-green-400">✓ Payback &lt; 12 months</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Revenue Projection */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
          <h3 className="text-2xl font-bold text-blue-primary mb-6 text-center">3-YEAR REVENUE PROJECTION</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-gradient-blue rounded-xl p-6">
              <div className="text-5xl font-bold text-white mb-2">$1.2M</div>
              <p className="text-lg mb-2">Year 1 ARR</p>
              <p className="text-sm text-gray-light">30 customers</p>
            </div>
            <div className="text-center bg-gradient-blue rounded-xl p-6">
              <div className="text-5xl font-bold text-white mb-2">$6.5M</div>
              <p className="text-lg mb-2">Year 2 ARR</p>
              <p className="text-sm text-gray-light">150 customers</p>
            </div>
            <div className="text-center bg-gradient-blue rounded-xl p-6">
              <div className="text-5xl font-bold text-white mb-2">$15M</div>
              <p className="text-lg mb-2">Year 3 ARR</p>
              <p className="text-sm text-gray-light">300 customers</p>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div variants={fadeInUp} className="flex justify-center gap-8 flex-wrap">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-primary">52,000</div>
            <div className="text-sm text-gray-light">US Facilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-primary">$48B</div>
            <div className="text-sm text-gray-light">Industry Size</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-primary">3-4%</div>
            <div className="text-sm text-gray-light">Annual Growth</div>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
