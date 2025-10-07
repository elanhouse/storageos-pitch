'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function DashboardSlide() {
  return (
    <SlideLayout title="Command Center">
      <motion.div
        className="space-y-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            The <span className="text-blue-primary">Command Center</span>
          </h2>
          <p className="text-2xl text-gray-light">One dashboard. Complete visibility. Total control.</p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* KPI Cards */}
            <div className="bg-black-primary rounded-xl p-6">
              <p className="text-sm text-gray-light mb-2">Portfolio Revenue</p>
              <p className="text-4xl font-bold text-green-400 mb-2">$8.2M</p>
              <p className="text-xs text-green-400">↑ 23% vs last month</p>
            </div>
            <div className="bg-black-primary rounded-xl p-6">
              <p className="text-sm text-gray-light mb-2">Occupancy Rate</p>
              <p className="text-4xl font-bold text-blue-primary mb-2">84.3%</p>
              <p className="text-xs text-blue-primary">↑ 5.2% vs target</p>
            </div>
            <div className="bg-black-primary rounded-xl p-6">
              <p className="text-sm text-gray-light mb-2">Marketing ROI</p>
              <p className="text-4xl font-bold text-yellow-300 mb-2">6.8x</p>
              <p className="text-xs text-yellow-300">↑ 2.1x vs industry avg</p>
            </div>
          </div>

          {/* Charts Mockup */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black-primary rounded-xl p-6">
              <p className="font-bold mb-4">📊 Revenue Trend (12 months)</p>
              <div className="h-32 bg-blue-primary/10 rounded flex items-end gap-2 p-4">
                <div className="flex-1 bg-blue-primary/50 rounded-t" style={{height: '40%'}}></div>
                <div className="flex-1 bg-blue-primary/60 rounded-t" style={{height: '55%'}}></div>
                <div className="flex-1 bg-blue-primary/70 rounded-t" style={{height: '65%'}}></div>
                <div className="flex-1 bg-blue-primary/80 rounded-t" style={{height: '75%'}}></div>
                <div className="flex-1 bg-blue-primary rounded-t" style={{height: '85%'}}></div>
              </div>
            </div>
            <div className="bg-black-primary rounded-xl p-6">
              <p className="font-bold mb-4">🎯 Channel Attribution</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-24 text-sm text-gray-light">Google Ads</div>
                  <div className="flex-1 bg-gray-mid/20 rounded-full h-6">
                    <div className="bg-blue-primary h-6 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <div className="w-12 text-right font-bold">65%</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24 text-sm text-gray-light">Organic</div>
                  <div className="flex-1 bg-gray-mid/20 rounded-full h-6">
                    <div className="bg-green-400 h-6 rounded-full" style={{width: '22%'}}></div>
                  </div>
                  <div className="w-12 text-right font-bold">22%</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24 text-sm text-gray-light">Referral</div>
                  <div className="flex-1 bg-gray-mid/20 rounded-full h-6">
                    <div className="bg-yellow-300 h-6 rounded-full" style={{width: '13%'}}></div>
                  </div>
                  <div className="w-12 text-right font-bold">13%</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
          <div className="bg-black-secondary/50 rounded-2xl p-6 border border-blue-primary/20">
            <h3 className="text-xl font-bold text-blue-primary mb-4">📈 ANALYTICS YOU ACTUALLY NEED</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>RevPAU:</strong> Revenue per available unit (like hotel RevPAR)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>Customer LTV:</strong> Lifetime value by acquisition channel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>Churn Risk:</strong> Predictive alerts 30 days before move-out</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>Market Positioning:</strong> Competitive rate intelligence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>Demand Forecasting:</strong> 90-day occupancy predictions</span>
              </li>
            </ul>
          </div>

          <div className="bg-black-secondary/50 rounded-2xl p-6 border border-blue-primary/20">
            <h3 className="text-xl font-bold text-blue-primary mb-4">⚡ AUTONOMOUS ACTIONS</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">⚡</span>
                <span><strong>Auto-bid optimization:</strong> Shifts budget to winning keywords</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">⚡</span>
                <span><strong>Dynamic pricing:</strong> Adjusts rates every 6 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">⚡</span>
                <span><strong>Retention campaigns:</strong> Triggered for high-risk customers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">⚡</span>
                <span><strong>Promo automation:</strong> Adjusts discounts by facility demand</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">⚡</span>
                <span><strong>Alert routing:</strong> Sends insights to right stakeholder</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Value Prop */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue rounded-2xl p-8 text-center">
          <p className="text-3xl md:text-4xl font-bold leading-tight">
            From <span className="line-through text-gray-mid">Excel hell</span> to
            <br />
            <span className="text-yellow-300">AI-powered intelligence</span> in <span className="text-blue-glow">48 hours</span>
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
