'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';

export default function TeamSlide() {
  return (
    <SlideLayout title="The Team">
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Built by <span className="text-blue-primary">Operators</span>,
            <br />
            for <span className="text-blue-primary">Operators</span>
          </h2>
        </motion.div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Antoni */}
          <motion.div variants={slideInLeft} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-blue-primary rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                👨‍💻
              </div>
              <h3 className="text-3xl font-bold mb-1">Antoni Watts</h3>
              <p className="text-blue-primary text-lg font-semibold">Co-Founder & CEO</p>
              <p className="text-gray-light text-sm">Technical / Product</p>
            </div>
            <div className="space-y-3 text-gray-light">
              <p>• <span className="text-white font-semibold">Storage operator:</span> Owns Storage Star & Peak</p>
              <p>• <span className="text-white font-semibold">AI expert:</span> Claude, Vapi, n8n automation</p>
              <p>• <span className="text-white font-semibold">Proof of concept:</span> 14% occupancy ↑ with AI</p>
              <p>• <span className="text-white font-semibold">Technical execution:</span> Built entire MVP solo</p>
            </div>
            <div className="mt-6 pt-6 border-t border-blue-primary/30">
              <p className="text-sm text-center text-blue-primary font-semibold">Unfair Advantage: Domain + Technical</p>
            </div>
          </motion.div>

          {/* Marcus */}
          <motion.div variants={slideInRight} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-blue-primary rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                📈
              </div>
              <h3 className="text-3xl font-bold mb-1">Marcus Whelan</h3>
              <p className="text-blue-primary text-lg font-semibold">Co-Founder & President</p>
              <p className="text-gray-light text-sm">Commercial / Growth</p>
            </div>
            <div className="space-y-3 text-gray-light">
              <p>• <span className="text-white font-semibold">Enterprise sales:</span> B2B SaaS experience</p>
              <p>• <span className="text-white font-semibold">Strategic thinking:</span> Market positioning expert</p>
              <p>• <span className="text-white font-semibold">Communication:</span> Translates tech to C-suite</p>
              <p>• <span className="text-white font-semibold">Network building:</span> Partnerships & relationships</p>
            </div>
            <div className="mt-6 pt-6 border-t border-blue-primary/30">
              <p className="text-sm text-center text-blue-primary font-semibold">Unfair Advantage: Sales + Strategy</p>
            </div>
          </motion.div>
        </div>

        {/* Complementary Skills */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
          <h3 className="text-2xl font-bold text-blue-primary mb-6 text-center">COMPLEMENTARY SKILLS</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-xl font-semibold mb-2">Technical <span className="text-blue-primary">↔</span> Commercial</p>
              <p className="text-sm text-gray-light">Product + Go-to-Market</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2">Builder <span className="text-blue-primary">↔</span> Seller</p>
              <p className="text-sm text-gray-light">Make it + Market it</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2">Deep Focus <span className="text-blue-primary">↔</span> External</p>
              <p className="text-sm text-gray-light">Product + Partnerships</p>
            </div>
          </div>
        </motion.div>

        {/* First 5 Hires */}
        <motion.div variants={fadeInUp} className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
          <h3 className="text-2xl font-bold text-blue-primary mb-6">FIRST 5 HIRES</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-primary rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <p className="font-semibold text-lg">Full-Stack Engineer</p>
                <p className="text-sm text-gray-light">Support product development & integrations</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-primary rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <p className="font-semibold text-lg">Customer Success Manager</p>
                <p className="text-sm text-gray-light">Ensure customer success & feedback loop</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-primary rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <p className="font-semibold text-lg">Sales Development Rep</p>
                <p className="text-sm text-gray-light">Outbound prospecting & pipeline building</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-primary rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <p className="font-semibold text-lg">AI/ML Engineer</p>
                <p className="text-sm text-gray-light">Optimize agent decision-making & learning</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-primary rounded-full flex items-center justify-center font-bold text-xl">5</div>
              <div>
                <p className="font-semibold text-lg">Integration Engineer</p>
                <p className="text-sm text-gray-light">Scale PMS/CRM connector ecosystem</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Value Prop */}
        <motion.div variants={fadeInUp} className="text-center">
          <div className="inline-block bg-gradient-blue rounded-full px-8 py-4 shadow-[0_0_40px_rgba(0,174,239,0.6)]">
            <p className="text-xl font-bold">Perfect Founder-Market Fit: <span className="text-yellow-300">Operator</span> + <span className="text-yellow-300">AI Expert</span> + <span className="text-yellow-300">Sales Pro</span></p>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
