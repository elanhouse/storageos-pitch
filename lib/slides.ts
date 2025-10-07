export interface SlideData {
  id: string;
  title: string;
  path: string;
  number: number;
}

export const slides: SlideData[] = [
  {
    id: 'problem',
    title: 'The Problem',
    path: '/slides/problem',
    number: 1,
  },
  {
    id: 'solution',
    title: 'The Solution',
    path: '/slides/solution',
    number: 2,
  },
  {
    id: 'market',
    title: 'Market & Business',
    path: '/slides/market',
    number: 3,
  },
  {
    id: 'team',
    title: 'The Team',
    path: '/slides/team',
    number: 4,
  },
  {
    id: 'ask',
    title: 'The Ask',
    path: '/slides/ask',
    number: 5,
  },
];

export const getSlideByPath = (path: string): SlideData | undefined => {
  return slides.find((slide) => slide.path === path);
};

export const getNextSlide = (currentPath: string): SlideData | null => {
  const currentIndex = slides.findIndex((slide) => slide.path === currentPath);
  if (currentIndex === -1 || currentIndex === slides.length - 1) return null;
  return slides[currentIndex + 1];
};

export const getPrevSlide = (currentPath: string): SlideData | null => {
  const currentIndex = slides.findIndex((slide) => slide.path === currentPath);
  if (currentIndex <= 0) return null;
  return slides[currentIndex - 1];
};
