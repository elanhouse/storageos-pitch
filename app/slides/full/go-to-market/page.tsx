'use client';

import { motion } from 'framer-motion';
import SlideLayout from '@/components/SlideLayout';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function GoToMarketSlide() {
  return (
    <SlideLayout title="Go-To-Market">
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Go-To-Market <span className="text-blue-primary">Strategy</span>
          </h2>
          <p className="text-2xl text-gray-light">Analytics-first sales motion</p>
        </motion.div>

        {/* ICP */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue-radial rounded-2xl p-8 border-2 border-blue-primary">
          <h3 className="text-2xl font-bold mb-6 text-center">IDEAL CUSTOMER PROFILE</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black-primary rounded-xl p-6">
              <h4 className="font-bold text-lg text-blue-primary mb-4">WHO</h4>
              <ul className="space-y-2 text-sm">
                <li>• <span className="font-bold">Regional VPs</span> managing 5-50 facilities</li>
                <li>• <span className="font-bold">Portfolio CEOs</span> at top 200 operators</li>
                <li>• <span className="font-bold">CFOs</span> at growth-stage portfolios</li>
              </ul>
            </div>
            <div className="bg-black-primary rounded-xl p-6">
              <h4 className="font-bold text-lg text-blue-primary mb-4">SIGNALS</h4>
              <ul className="space-y-2 text-sm">
                <li>• Recently acquired facilities (integration pain)</li>
                <li>• Spending $20K+/mo on marketing (waste detection)</li>
                <li>• Using Yardi/SiteLink (API-ready)</li>
                <li>• Attending industry conferences (early adopters)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 3-Phase GTM */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <h3 className="text-3xl font-bold text-center text-blue-primary">3-PHASE PLAYBOOK</h3>

          {/* Phase 1 */}
          <div className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center text-3xl font-bold">1</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-3">MONTHS 1-3: PROOF OF CONCEPT</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold mb-2 text-blue-primary">Strategy</p>
                    <ul className="text-sm space-y-1 text-gray-light">
                      <li>• 5 "lighthouse" customers (friendly operators)</li>
                      <li>• Free 60-day pilot with success metrics</li>
                      <li>• White-glove onboarding & support</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-blue-primary">Success Criteria</p>
                    <ul className="text-sm space-y-1 text-gray-light">
                      <li>• 3 signed LOIs (Letters of Intent)</li>
                      <li>• Documented 15%+ revenue lift</li>
                      <li>• Case study testimonials</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center text-3xl font-bold">2</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-3">MONTHS 4-12: LAND & EXPAND</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold mb-2 text-blue-primary">Inbound Engine</p>
                    <ul className="text-sm space-y-1 text-gray-light">
                      <li>• SEO: "storage analytics", "self storage ROI"</li>
                      <li>• Content: Benchmarking reports, ROI calculators</li>
                      <li>• Webinars at industry conferences (ISS, SSA)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-blue-primary">Outbound Targets</p>
                    <ul className="text-sm space-y-1 text-gray-light">
                      <li>• Top 200 operator list (manually curated)</li>
                      <li>• LinkedIn outreach: "We helped [customer] +18%..."</li>
                      <li>• Partner with Yardi/SiteLink resellers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-black-secondary/50 rounded-2xl p-8 border border-blue-primary/20">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center text-3xl font-bold">3</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-3">YEAR 2+: SCALE & CATEGORY DOMINANCE</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold mb-2 text-blue-primary">Sales Team</p>
                    <ul className="text-sm space-y-1 text-gray-light">
                      <li>• Hire 3 SDRs (outbound pipeline)</li>
                      <li>• 2 AEs (deal closing)</li>
                      <li>• 1 Solutions Engineer (demos & technical)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-blue-primary">Ecosystem</p>
                    <ul className="text-sm space-y-1 text-gray-light">
                      <li>• Official Yardi/SiteLink integration partner</li>
                      <li>• Speak at every major conference</li>
                      <li>• Industry thought leadership (podcasts, articles)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Strategy */}
        <motion.div variants={fadeInUp} className="bg-gradient-blue rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">PRICING TIERS</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black-primary rounded-xl p-6 text-center">
              <p className="text-sm text-gray-light mb-2">STARTER</p>
              <p className="text-4xl font-bold mb-2">$299</p>
              <p className="text-xs text-gray-light mb-4">per facility/month</p>
              <p className="text-xs">5-10 facilities</p>
            </div>
            <div className="bg-black-primary rounded-xl p-6 text-center border-2 border-blue-primary">
              <p className="text-sm text-blue-primary mb-2">PROFESSIONAL</p>
              <p className="text-4xl font-bold mb-2">$349</p>
              <p className="text-xs text-gray-light mb-4">per facility/month</p>
              <p className="text-xs">11-50 facilities</p>
            </div>
            <div className="bg-black-primary rounded-xl p-6 text-center">
              <p className="text-sm text-gray-light mb-2">ENTERPRISE</p>
              <p className="text-4xl font-bold mb-2">$399</p>
              <p className="text-xs text-gray-light mb-4">per facility/month</p>
              <p className="text-xs">50+ facilities</p>
            </div>
          </div>
        </motion.div>

        {/* Key Message */}
        <motion.div variants={fadeInUp} className="text-center">
          <p className="text-3xl font-bold">
            We sell <span className="text-blue-primary">outcomes</span>, not features.
            <br />
            <span className="text-2xl text-gray-light">"See 15-25% revenue lift in 90 days, guaranteed."</span>
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
