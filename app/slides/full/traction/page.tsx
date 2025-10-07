'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

export default function TractionSlide() {
  return (
    <SlideLayout title="Traction & Validation">
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-blue-primary">Traction</span> & Validation
          </h2>
          <p className="text-2xl text-gray-light">We've already proven this works</p>
        </motion.div>

        {/* Proof of Concept */}
        <motion.div variants={scaleIn} className="bg-gradient-blue-radial rounded-2xl p-10 border-2 border-blue-primary text-center">
          <h3 className="text-3xl font-bold mb-6">STORAGE STAR: LIVE PROOF OF CONCEPT</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <div className="text-6xl font-bold text-green-400 mb-2">14%</div>
              <p className="text-lg">Occupancy Increase</p>
              <p className="text-sm text-gray-light">In 6 months with AI agents</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-blue-primary mb-2">$42K</div>
              <p className="text-lg">Additional Revenue</p>
              <p className="text-sm text-gray-light">Single facility annual lift</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-yellow-300 mb-2">100%</div>
              <p className="text-lg">Built by Founders</p>
              <p className="text-sm text-gray-light">Technical execution proven</p>
            </div>
          </div>
          <div className="bg-black-primary rounded-xl p-6">
            <p className="text-lg">
              <span className="text-blue-primary font-bold">Antoni built the MVP solo</span> and deployed it at his own facility.
              <br />
              <span className="text-white font-semibold">Result: Occupancy 56% → 70%</span> through automated marketing optimization & dynamic pricing.
            </p>
          </div>
        </motion.div>

        {/* What We've Built */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
          <h3 className="text-2xl font-bold text-blue-primary mb-6 text-center">WHAT WE'VE ALREADY BUILT</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-3">✓ Working Integrations</h4>
              <ul className="space-y-2 text-sm text-gray-light">
                <li>• Yardi API (property data)</li>
                <li>• Google Ads API (marketing attribution)</li>
                <li>• Vapi AI (voice agents)</li>
                <li>• n8n workflows (automation engine)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">✓ Core Features</h4>
              <ul className="space-y-2 text-sm text-gray-light">
                <li>• AI marketing agent (live)</li>
                <li>• Dynamic pricing logic (tested)</li>
                <li>• Call tracking & transcription</li>
                <li>• Basic analytics dashboard</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Customer Discovery */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
          <h3 className="text-2xl font-bold text-blue-primary mb-6 text-center">CUSTOMER DISCOVERY (IN PROGRESS)</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gradient-blue rounded-lg p-6">
              <div>
                <p className="font-bold text-xl mb-1">Target: 20 Operator Interviews</p>
                <p className="text-sm text-gray-light">Validating pain points, willingness to pay, and feature priorities</p>
              </div>
              <div className="text-5xl font-bold">5/20</div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black-primary rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-400 mb-2">100%</p>
                <p className="text-sm">Confirmed analytics pain</p>
              </div>
              <div className="bg-black-primary rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-primary mb-2">80%</p>
                <p className="text-sm">Would pay $300+/mo</p>
              </div>
              <div className="bg-black-primary rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-yellow-300 mb-2">3</p>
                <p className="text-sm">Letters of Intent (LOIs)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pipeline */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-blue rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-center">IMMEDIATE PIPELINE</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>Storage Star & Peak:</strong> 2 facilities (founder-owned, immediate deploy)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">→</span>
                <span><strong>Warm intros:</strong> 8 operators via industry network</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">→</span>
                <span><strong>Conference pipeline:</strong> ISS World Expo (April 2025)</span>
              </li>
            </ul>
          </div>

          <div className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
            <h3 className="text-xl font-bold text-blue-primary mb-4 text-center">NEXT 90 DAYS</h3>
            <ul className="space-y-3 text-sm text-gray-light">
              <li>• Complete 20 customer interviews</li>
              <li>• Sign 3 pilot customers (LOIs → contracts)</li>
              <li>• Launch full analytics dashboard v1</li>
              <li>• Document 15%+ revenue lift case studies</li>
              <li>• Build integration marketplace (Yardi + SiteLink)</li>
            </ul>
          </div>
        </motion.div>

        {/* Key Validation */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue rounded-2xl p-10 text-center">
          <p className="text-4xl md:text-5xl font-bold leading-tight">
            We're not <span className="line-through text-gray-mid">just an idea</span>.
            <br />
            We're a <span className="text-yellow-300">working system</span> generating
            <br />
            <span className="text-green-400">real revenue</span> for <span className="text-blue-glow">real operators</span>.
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
