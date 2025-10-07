'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { quickSlides, fullSlides } from '@/lib/slides';
import { useState } from 'react';

export default function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  // Determine which version we're viewing
  const isQuickVersion = pathname.includes('/quick/');
  const isFullVersion = pathname.includes('/full/');
  const currentSlides = isQuickVersion ? quickSlides : fullSlides;
  const currentVersion = isQuickVersion ? 'quick' : 'full';

  return (
    <>
      {/* Toggle Button (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 left-4 z-50 md:hidden bg-blue-primary text-white p-2 rounded-lg"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Side Navigation */}
      <nav
        className={`fixed left-0 top-0 h-full bg-black-secondary border-r border-blue-primary/30 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } w-64 pt-24 overflow-y-auto`}
      >
        <div className="p-6">
          {/* Version Badge */}
          <div className="mb-6">
            <div className="text-xs text-gray-mid mb-2">VIEWING</div>
            <div className="bg-blue-primary/20 border border-blue-primary/50 rounded-lg px-3 py-2 text-sm font-semibold">
              {currentVersion === 'quick' ? '⚡ Quick Pitch' : '📊 Full Deck'}
            </div>
          </div>

          {/* Slide List */}
          <div className="space-y-1">
            {currentSlides.map((slide) => {
              const isActive = pathname === slide.path;
              return (
                <Link
                  key={slide.path}
                  href={slide.path}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-primary text-white shadow-[0_0_15px_rgba(0,174,239,0.5)]'
                      : 'text-gray-light hover:bg-black-primary hover:text-blue-primary'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        isActive ? 'bg-white text-blue-primary' : 'bg-blue-primary/20 text-blue-primary'
                      }`}
                    >
                      {slide.number}
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm font-medium ${isActive ? 'text-white' : ''}`}>
                        {slide.title}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 pt-6 border-t border-blue-primary/30">
            <div className="text-xs text-gray-mid mb-2">PROGRESS</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-black-primary rounded-full h-2">
                <div
                  className="bg-gradient-blue h-2 rounded-full transition-all"
                  style={{
                    width: `${((currentSlides.findIndex((s) => s.path === pathname) + 1) / currentSlides.length) * 100}%`,
                  }}
                />
              </div>
              <div className="text-xs font-medium text-blue-primary">
                {currentSlides.findIndex((s) => s.path === pathname) + 1}/{currentSlides.length}
              </div>
            </div>
          </div>

          {/* Switch Version Link */}
          <div className="mt-6 pt-6 border-t border-blue-primary/30">
            <Link
              href={currentVersion === 'quick' ? '/slides/full/problem' : '/slides/quick/problem'}
              className="block text-center px-4 py-3 rounded-lg bg-blue-primary/10 border border-blue-primary/30 hover:bg-blue-primary/20 transition-all text-sm font-semibold text-blue-primary"
            >
              {currentVersion === 'quick' ? '📊 Switch to Full Deck' : '⚡ Switch to Quick Pitch'}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
