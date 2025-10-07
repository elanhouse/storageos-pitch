'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { quickSlides, fullSlides, getNextSlide, getPrevSlide, getSlidesByVersion } from '@/lib/slides';

export default function SlideNav() {
  const pathname = usePathname();

  // Determine version
  const isQuickVersion = pathname.includes('/quick/');
  const version = isQuickVersion ? 'quick' : 'full';
  const slides = getSlidesByVersion(version);

  const currentSlide = slides.find((s) => s.path === pathname);
  const nextSlide = getNextSlide(pathname, version);
  const prevSlide = getPrevSlide(pathname, version);

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black-secondary/80 backdrop-blur-md rounded-full px-6 py-4 flex items-center gap-6 border border-blue-primary/30">
        {/* Previous Button */}
        {prevSlide ? (
          <Link
            href={prevSlide.path}
            className="text-blue-primary hover:text-blue-glow transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden md:inline">Prev</span>
          </Link>
        ) : (
          <div className="w-20 opacity-30">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        )}

        {/* Slide Dots */}
        <div className="flex items-center gap-3">
          {slides.map((slide) => (
            <Link
              key={slide.id}
              href={slide.path}
              className={`w-2 h-2 rounded-full transition-all ${
                slide.path === pathname
                  ? 'w-8 bg-blue-primary shadow-[0_0_10px_rgba(0,174,239,0.8)]'
                  : 'bg-gray-mid hover:bg-blue-primary/60'
              }`}
              title={slide.title}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-gray-light text-sm font-medium min-w-[50px] text-center">
          {currentSlide?.number || 1} / {slides.length}
        </div>

        {/* Next Button */}
        {nextSlide ? (
          <Link
            href={nextSlide.path}
            className="text-blue-primary hover:text-blue-glow transition-colors flex items-center gap-2"
          >
            <span className="hidden md:inline">Next</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <Link
            href="/slides/problem"
            className="text-blue-primary hover:text-blue-glow transition-colors flex items-center gap-2"
          >
            <span className="hidden md:inline">Restart</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </Link>
        )}
      </div>
    </nav>
  );
}
