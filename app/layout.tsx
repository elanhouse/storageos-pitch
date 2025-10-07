import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import KeyboardNav from '@/components/KeyboardNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StorageOS - Antler Pitch Deck',
  description: 'The Autonomous Operating System for Self-Storage',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <KeyboardNav />
        {children}
      </body>
    </html>
  );
}
