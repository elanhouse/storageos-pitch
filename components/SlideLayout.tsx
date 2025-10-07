'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SlideNav from './SlideNav';
import SideNav from './SideNav';
import { fadeIn } from '@/lib/animations';

interface SlideLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function SlideLayout({ children, title }: SlideLayoutProps) {
  const pathname = usePathname();
  const isQuickVersion = pathname.includes('/quick/');

  return (
    <div className="min-h-screen bg-black-primary flex relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-dark/5 rounded-full blur-[120px]" />

      {/* Side Navigation */}
      <SideNav />

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col">
        {/* Header */}
        <header className="fixed top-0 right-0 left-0 md:left-64 z-30 bg-black-primary/80 backdrop-blur-md border-b border-blue-primary/20">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-blue rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,174,239,0.4)]">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-white">
                Storage<span className="text-blue-primary">OS</span>
              </h1>
            </div>

            {/* Version Toggle Button in Header */}
            <Link
              href={isQuickVersion ? '/slides/full/problem' : '/slides/quick/problem'}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-primary/10 border border-blue-primary/30 hover:bg-blue-primary/20 transition-all text-sm font-semibold text-blue-primary"
            >
              {isQuickVersion ? (
                <>
                  <span>📊</span>
                  <span>Full Deck</span>
                </>
              ) : (
                <>
                  <span>⚡</span>
                  <span>Quick Pitch</span>
                </>
              )}
            </Link>

            {title && (
              <div className="hidden lg:block text-gray-light text-sm font-medium">
                {title}
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <motion.main
          className="flex-1 flex items-center justify-center px-8 py-24 md:py-20 relative z-10 mt-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="w-full max-w-6xl">
            {children}
          </div>
        </motion.main>

        {/* Bottom Navigation */}
        <SlideNav />
      </div>
    </div>
  );
}
