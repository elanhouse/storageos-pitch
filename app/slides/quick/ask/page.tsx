'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function AskSlide() {
  return (
    <SlideLayout title="The Ask">
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            The <span className="text-blue-primary">Ask</span>
          </h2>
        </motion.div>

        {/* Funding */}
        <motion.div variants={fadeInUp} className="text-center bg-gradient-blue rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">FUNDING</h3>
          <p className="text-6xl font-bold mb-2">$750K - $1M</p>
          <p className="text-xl text-white/90">Seed Round</p>
        </motion.div>

        {/* Use of Funds */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
          <h3 className="text-2xl font-bold text-blue-primary mb-6">USE OF FUNDS</h3>
          <div className="space-y-4">
            {/* Product */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-lg">Product Development</span>
                <span className="text-blue-primary font-bold">40%</span>
              </div>
              <div className="w-full bg-black-primary rounded-full h-3">
                <div className="bg-gradient-blue h-3 rounded-full" style={{width: '40%'}}></div>
              </div>
            </div>

            {/* Sales & Marketing */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-lg">Sales & Marketing</span>
                <span className="text-blue-primary font-bold">35%</span>
              </div>
              <div className="w-full bg-black-primary rounded-full h-3">
                <div className="bg-gradient-blue h-3 rounded-full" style={{width: '35%'}}></div>
              </div>
            </div>

            {/* Operations */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-lg">Operations & Infrastructure</span>
                <span className="text-blue-primary font-bold">15%</span>
              </div>
              <div className="w-full bg-black-primary rounded-full h-3">
                <div className="bg-gradient-blue h-3 rounded-full" style={{width: '15%'}}></div>
              </div>
            </div>

            {/* Runway */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-lg">Runway & Buffer</span>
                <span className="text-blue-primary font-bold">10%</span>
              </div>
              <div className="w-full bg-black-primary rounded-full h-3">
                <div className="bg-gradient-blue h-3 rounded-full" style={{width: '10%'}}></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 12-Month Milestones */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
          <h3 className="text-2xl font-bold mb-6 text-center">12-MONTH MILESTONES</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Mo 3</div>
              <p className="text-lg">3 paying customers</p>
              <p className="text-sm text-gray-light">MVP validated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Mo 6</div>
              <p className="text-lg">10 customers</p>
              <p className="text-sm text-gray-light">$500K ARR</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Mo 12</div>
              <p className="text-lg">30 customers</p>
              <p className="text-sm text-gray-light">$1.8M ARR</p>
            </div>
          </div>
        </motion.div>

        {/* Path to Series A */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-6 border border-blue-primary/20">
          <h3 className="text-xl font-bold text-blue-primary mb-4 text-center">PATH TO SERIES A</h3>
          <div className="flex justify-center gap-8 flex-wrap text-center">
            <div>
              <div className="text-3xl font-bold text-white">50+ customers</div>
              <div className="text-sm text-gray-light">Scale proven</div>
            </div>
            <div className="text-3xl text-blue-primary">|</div>
            <div>
              <div className="text-3xl font-bold text-white">$3M+ ARR</div>
              <div className="text-sm text-gray-light">Revenue milestone</div>
            </div>
            <div className="text-3xl text-blue-primary">|</div>
            <div>
              <div className="text-3xl font-bold text-white">Year 2</div>
              <div className="text-sm text-gray-light">Timing</div>
            </div>
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div variants={fadeInUp} className="text-center py-8">
          <p className="text-3xl md:text-4xl font-bold leading-relaxed max-w-4xl mx-auto">
            &ldquo;We're not building <span className="line-through text-gray-mid">software</span>.
            <br />
            We're building an <span className="text-blue-primary">autonomous organism</span>
            <br />
            that <span className="text-blue-primary">learns</span>, <span className="text-blue-primary">acts</span>, and <span className="text-blue-primary">earns</span>.&rdquo;
          </p>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={fadeInUp} className="text-center">
          <div className="inline-block bg-gradient-blue rounded-2xl px-12 py-6 shadow-[0_0_60px_rgba(0,174,239,0.8)] animate-glow-pulse">
            <p className="text-4xl font-bold mb-2">Storage<span className="text-yellow-300">OS</span></p>
            <p className="text-xl text-white/90">The Future of Real Estate Operations</p>
          </div>
        </motion.div>

        {/* Sub text */}
        <motion.div variants={fadeInUp} className="text-center">
          <p className="text-sm text-gray-mid">
            Press <span className="text-blue-primary font-semibold">Space</span> or <span className="text-blue-primary font-semibold">→</span> to restart | <span className="text-blue-primary font-semibold">Home</span> to go to beginning
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
