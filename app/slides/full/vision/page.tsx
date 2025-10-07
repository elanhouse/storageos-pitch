'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

export default function VisionSlide() {
  return (
    <SlideLayout title="The Vision">
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            The <span className="text-blue-primary">Vision</span>
          </h2>
          <p className="text-2xl text-gray-light">Beyond self-storage</p>
        </motion.div>

        {/* The Path */}
        <motion.div variants={scaleIn} className="bg-gradient-blue-radial rounded-2xl p-10 border-2 border-blue-primary">
          <h3 className="text-3xl font-bold mb-8 text-center">THE PATH TO AUTONOMOUS REAL ESTATE</h3>
          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-blue-primary rounded-full flex items-center justify-center text-4xl font-bold shrink-0">1</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">Self-Storage (NOW)</h4>
                <p className="text-gray-light mb-2">Analytics-first OS for storage operators</p>
                <p className="text-sm text-white"><span className="font-bold">Timeline:</span> Years 1-2 | <span className="font-bold">Revenue:</span> $15M ARR</p>
              </div>
              <div className="text-6xl">🏢</div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-5xl text-blue-primary">↓</div>
            </div>

            {/* Phase 2 */}
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-blue-dark rounded-full flex items-center justify-center text-4xl font-bold shrink-0">2</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">Hotels & Short-Term Rentals</h4>
                <p className="text-gray-light mb-2">Same playbook: RevPAR optimization, dynamic pricing, occupancy prediction</p>
                <p className="text-sm text-white"><span className="font-bold">Timeline:</span> Years 3-4 | <span className="font-bold">TAM:</span> $2.5B hotel tech market</p>
              </div>
              <div className="text-6xl">🏨</div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-5xl text-blue-primary">↓</div>
            </div>

            {/* Phase 3 */}
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-blue-glow rounded-full flex items-center justify-center text-4xl font-bold shrink-0">3</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">Commercial & Industrial</h4>
                <p className="text-gray-light mb-2">Warehouses, flex space, coworking—any space-as-a-service model</p>
                <p className="text-sm text-white"><span className="font-bold">Timeline:</span> Years 5-7 | <span className="font-bold">TAM:</span> $10B+ PropTech market</p>
              </div>
              <div className="text-6xl">🏭</div>
            </div>
          </div>
        </motion.div>

        {/* The Grand Vision */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-10 border border-blue-primary/20">
          <h3 className="text-3xl font-bold text-blue-primary mb-6 text-center">THE GRAND VISION</h3>
          <p className="text-4xl md:text-5xl font-bold text-center leading-tight mb-6">
            Storage<span className="text-yellow-300">OS</span> becomes the
            <br />
            <span className="text-blue-primary">Operating System for Autonomous Real Estate</span>
          </p>
          <p className="text-xl text-center text-gray-light max-w-3xl mx-auto">
            Every property manager, portfolio operator, and real estate investor runs their operations through StorageOS—
            where AI agents handle pricing, marketing, operations, and customer experience <span className="text-white font-semibold">automatically</span>.
          </p>
        </motion.div>

        {/* Why This Works */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-blue rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🔗</div>
            <h4 className="font-bold text-xl mb-2">Same Core Platform</h4>
            <p className="text-sm text-gray-light">Data integration + analytics + agents = replicable across verticals</p>
          </div>
          <div className="bg-gradient-blue rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="font-bold text-xl mb-2">Same Pain Points</h4>
            <p className="text-sm text-gray-light">Every real estate vertical struggles with spreadsheets and lacks analytics</p>
          </div>
          <div className="bg-gradient-blue rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">💰</div>
            <h4 className="font-bold text-xl mb-2">Same Business Model</h4>
            <p className="text-sm text-gray-light">SaaS per-unit pricing works across all space-as-a-service businesses</p>
          </div>
        </motion.div>

        {/* The Timeline */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
          <h3 className="text-2xl font-bold mb-6 text-center">10-YEAR TRAJECTORY</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">Year 2</div>
              <p className="text-sm text-gray-light">$15M ARR</p>
              <p className="text-xs text-blue-primary">Self-storage leader</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Year 5</div>
              <p className="text-sm text-gray-light">$75M ARR</p>
              <p className="text-xs text-blue-primary">Hotels launched</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Year 7</div>
              <p className="text-sm text-gray-light">$200M ARR</p>
              <p className="text-xs text-blue-primary">Commercial expansion</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Year 10</div>
              <p className="text-sm text-gray-light">$1B+ ARR</p>
              <p className="text-xs text-blue-primary">Category king</p>
            </div>
          </div>
        </motion.div>

        {/* The Moonshot */}
        <motion.div variants={scaleIn} className="text-center py-8">
          <p className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            We're not building <span className="line-through text-gray-mid">a tool</span>.
          </p>
          <p className="text-5xl md:text-6xl font-bold leading-tight">
            We're building the <span className="text-yellow-300">future</span>
            <br />
            of <span className="text-blue-primary">real estate operations</span>.
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
