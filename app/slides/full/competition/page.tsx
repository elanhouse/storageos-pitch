'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function CompetitionSlide() {
  return (
    <SlideLayout title="Competition & Moats">
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Competitive <span className="text-blue-primary">Moats</span>
          </h2>
          <p className="text-2xl text-gray-light">Why we win and keep winning</p>
        </motion.div>

        {/* Competitive Landscape */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
          <h3 className="text-2xl font-bold text-blue-primary mb-6">COMPETITIVE LANDSCAPE</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-3">🏢 Legacy PMS Providers</h4>
              <p className="text-sm text-gray-light mb-2">Yardi, SiteLink, Storable</p>
              <p className="text-xs text-red-400">❌ No analytics layer</p>
              <p className="text-xs text-red-400">❌ Built for transaction management</p>
              <p className="text-xs text-red-400">❌ Slow to innovate</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">📊 BI/Reporting Tools</h4>
              <p className="text-sm text-gray-light mb-2">Tableau, Looker, custom reports</p>
              <p className="text-xs text-red-400">❌ Require data teams</p>
              <p className="text-xs text-red-400">❌ Passive dashboards only</p>
              <p className="text-xs text-red-400">❌ No autonomous action</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">🤖 Point Solutions</h4>
              <p className="text-sm text-gray-light mb-2">Marketing automation, chatbots</p>
              <p className="text-xs text-red-400">❌ Single-feature tools</p>
              <p className="text-xs text-red-400">❌ Don't integrate data</p>
              <p className="text-xs text-red-400">❌ Fragmented experience</p>
            </div>
          </div>
        </motion.div>

        {/* Our Moats */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <h3 className="text-3xl font-bold text-center text-blue-primary">OUR 4 MOATS</h3>

          {/* Moat 1 */}
          <div className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🏰</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-3">1. Domain Expertise Moat</h4>
                <p className="text-lg text-gray-light mb-4">
                  We're not software engineers guessing. <span className="text-white font-bold">We're operators who lived the pain</span>.
                </p>
                <div className="bg-black-primary rounded-lg p-4">
                  <p className="text-sm"><span className="text-green-400 font-bold">Advantage:</span> We know which metrics matter, which workflows break, and what operators will actually pay for.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Moat 2 */}
          <div className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🔗</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-3">2. Data Network Effect</h4>
                <p className="text-lg text-gray-light mb-4">
                  Every customer makes our models smarter. <span className="text-white font-bold">More data = better predictions</span>.
                </p>
                <div className="bg-black-primary rounded-lg p-4">
                  <p className="text-sm"><span className="text-green-400 font-bold">Advantage:</span> By customer 100, our benchmarks and forecasts will be unbeatable.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Moat 3 */}
          <div className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🧠</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-3">3. Compound AI Moat</h4>
                <p className="text-lg text-gray-light mb-4">
                  5 agents learning together. <span className="text-white font-bold">Each agent improves the others</span>.
                </p>
                <div className="bg-black-primary rounded-lg p-4">
                  <p className="text-sm"><span className="text-green-400 font-bold">Advantage:</span> Point solutions can't compete with a full orchestrated system.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Moat 4 */}
          <div className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🔒</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-3">4. Integration Lock-In</h4>
                <p className="text-lg text-gray-light mb-4">
                  Once we're embedded in PMS, CRM, ads, and analytics, <span className="text-white font-bold">ripping us out is painful</span>.
                </p>
                <div className="bg-black-primary rounded-lg p-4">
                  <p className="text-sm"><span className="text-green-400 font-bold">Advantage:</span> High switching costs = sticky revenue.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why We Win */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue rounded-2xl p-10 text-center">
          <p className="text-4xl md:text-5xl font-bold leading-tight">
            We're not building <span className="line-through text-gray-mid">another tool</span>.
            <br />
            We're building the <span className="text-yellow-300">category-defining</span> platform.
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
