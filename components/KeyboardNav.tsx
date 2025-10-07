'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getNextSlide, getPrevSlide, getSlidesByVersion } from '@/lib/slides';

export default function KeyboardNav() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Determine version
      const isQuickVersion = pathname.includes('/quick/');
      const version = isQuickVersion ? 'quick' : 'full';
      const slides = getSlidesByVersion(version);

      switch (e.key) {
        case 'ArrowRight':
        case ' ': // Space
          e.preventDefault();
          const nextSlide = getNextSlide(pathname, version);
          if (nextSlide) {
            router.push(nextSlide.path);
          }
          break;

        case 'ArrowLeft':
          e.preventDefault();
          const prevSlide = getPrevSlide(pathname, version);
          if (prevSlide) {
            router.push(prevSlide.path);
          }
          break;

        case 'Home':
          e.preventDefault();
          router.push(slides[0].path);
          break;

        case 'End':
          e.preventDefault();
          router.push(slides[slides.length - 1].path);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pathname, router]);

  return null; // This component doesn't render anything
}
