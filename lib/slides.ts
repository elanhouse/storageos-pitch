export interface SlideData {
  id: string;
  title: string;
  path: string;
  number: number;
  version: 'quick' | 'full';
}

// Quick Pitch Version (5 slides - original)
export const quickSlides: SlideData[] = [
  {
    id: 'problem',
    title: 'The Problem',
    path: '/slides/quick/problem',
    number: 1,
    version: 'quick',
  },
  {
    id: 'solution',
    title: 'The Solution',
    path: '/slides/quick/solution',
    number: 2,
    version: 'quick',
  },
  {
    id: 'market',
    title: 'Market & Business',
    path: '/slides/quick/market',
    number: 3,
    version: 'quick',
  },
  {
    id: 'team',
    title: 'The Team',
    path: '/slides/quick/team',
    number: 4,
    version: 'quick',
  },
  {
    id: 'ask',
    title: 'The Ask',
    path: '/slides/quick/ask',
    number: 5,
    version: 'quick',
  },
];

// Full Deck Version (13 slides - analytics-focused)
export const fullSlides: SlideData[] = [
  {
    id: 'problem',
    title: 'Problem: Flying Blind',
    path: '/slides/full/problem',
    number: 1,
    version: 'full',
  },
  {
    id: 'shift',
    title: 'The Analytics Shift',
    path: '/slides/full/shift',
    number: 2,
    version: 'full',
  },
  {
    id: 'solution',
    title: 'StorageOS Platform',
    path: '/slides/full/solution',
    number: 3,
    version: 'full',
  },
  {
    id: 'dashboard',
    title: 'Command Center',
    path: '/slides/full/dashboard',
    number: 4,
    version: 'full',
  },
  {
    id: 'why-now',
    title: 'Why Now',
    path: '/slides/full/why-now',
    number: 5,
    version: 'full',
  },
  {
    id: 'market',
    title: 'Market & Model',
    path: '/slides/full/market',
    number: 6,
    version: 'full',
  },
  {
    id: 'competition',
    title: 'Competition & Moats',
    path: '/slides/full/competition',
    number: 7,
    version: 'full',
  },
  {
    id: 'go-to-market',
    title: 'Go-to-Market',
    path: '/slides/full/go-to-market',
    number: 8,
    version: 'full',
  },
  {
    id: 'traction',
    title: 'Traction',
    path: '/slides/full/traction',
    number: 9,
    version: 'full',
  },
  {
    id: 'team',
    title: 'The Team',
    path: '/slides/full/team',
    number: 10,
    version: 'full',
  },
  {
    id: 'ask',
    title: 'The Ask',
    path: '/slides/full/ask',
    number: 11,
    version: 'full',
  },
  {
    id: 'vision',
    title: 'The Vision',
    path: '/slides/full/vision',
    number: 12,
    version: 'full',
  },
  {
    id: 'closing',
    title: 'Analytics Revolution',
    path: '/slides/full/closing',
    number: 13,
    version: 'full',
  },
];

export const getSlidesByVersion = (version: 'quick' | 'full'): SlideData[] => {
  return version === 'quick' ? quickSlides : fullSlides;
};

export const getSlideByPath = (path: string): SlideData | undefined => {
  const allSlides = [...quickSlides, ...fullSlides];
  return allSlides.find((slide) => slide.path === path);
};

export const getNextSlide = (currentPath: string, version: 'quick' | 'full'): SlideData | null => {
  const slides = getSlidesByVersion(version);
  const currentIndex = slides.findIndex((slide) => slide.path === currentPath);
  if (currentIndex === -1 || currentIndex === slides.length - 1) return null;
  return slides[currentIndex + 1];
};

export const getPrevSlide = (currentPath: string, version: 'quick' | 'full'): SlideData | null => {
  const slides = getSlidesByVersion(version);
  const currentIndex = slides.findIndex((slide) => slide.path === currentPath);
  if (currentIndex <= 0) return null;
  return slides[currentIndex - 1];
};
