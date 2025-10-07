'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function WhyNowSlide() {
  return (
    <SlideLayout title="Why Now">
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Why <span className="text-blue-primary">NOW</span>?
          </h2>
          <p className="text-2xl text-gray-light">5 megatrends converging at once</p>
        </motion.div>

        {/* Megatrends */}
        <div className="space-y-6">
          <motion.div variants={fadeInUp} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🤖</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">1. AI Cost Collapse</h3>
                <p className="text-lg text-gray-light mb-4">
                  LLM API costs dropped <span className="text-white font-bold">90% since 2023</span>. What cost $1,000/mo now costs $100/mo.
                </p>
                <div className="bg-black-primary rounded-lg p-4">
                  <p className="text-sm"><span className="text-green-400 font-bold">Impact:</span> Autonomous agents are now economically viable for mid-market operators</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🔗</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">2. API Unification</h3>
                <p className="text-lg text-gray-light mb-4">
                  Yardi, SiteLink, Google, Meta, Radius+ all have <span className="text-white font-bold">modern APIs</span> now (2022-2024).
                </p>
                <div className="bg-black-primary rounded-lg p-4">
                  <p className="text-sm"><span className="text-green-400 font-bold">Impact:</span> Data integration is no longer a 6-month engineering nightmare</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🏢</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">3. Industry Consolidation</h3>
                <p className="text-lg text-gray-light mb-4">
                  Top 200 operators now control <span className="text-white font-bold">35% of all facilities</span>, up from 22% in 2018.
                </p>
                <div className="bg-black-primary rounded-lg p-4">
                  <p className="text-sm"><span className="text-green-400 font-bold">Impact:</span> Larger portfolios = bigger pain points = stronger willingness to pay</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-start gap-6">
              <div className="text-6xl">📊</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">4. Spreadsheet Fatigue</h3>
                <p className="text-lg text-gray-light mb-4">
                  <span className="text-white font-bold">70% of operators</span> still manually export data to Excel. They're exhausted.
                </p>
                <div className="bg-black-primary rounded-lg p-4">
                  <p className="text-sm"><span className="text-green-400 font-bold">Impact:</span> Market is desperate for automated intelligence</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-start gap-6">
              <div className="text-6xl">💰</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">5. Revenue Pressure</h3>
                <p className="text-lg text-gray-light mb-4">
                  New supply + inflation squeeze margins. Operators need <span className="text-white font-bold">every optimization edge</span>.
                </p>
                <div className="bg-black-primary rounded-lg p-4">
                  <p className="text-sm"><span className="text-green-400 font-bold">Impact:</span> CFOs now approve analytics tools that show clear ROI</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Window */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold mb-6">THE WINDOW IS OPEN</h3>
          <p className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We have a <span className="text-yellow-300">12-24 month window</span>
            <br />
            before competitors catch up
          </p>
          <div className="inline-block bg-black-primary rounded-full px-8 py-4">
            <p className="text-2xl font-bold">
              First mover = <span className="text-green-400">category definer</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
