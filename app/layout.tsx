import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GymPro - Transform Your Body, Transform Your Life',
  description: 'Join GymPro and start your fitness journey today. We offer a variety of programs including strength training, cardio blast, and yoga & flexibility.',
  keywords: ['gym', 'fitness', 'strength training', 'cardio', 'yoga'],
  authors: [{ name: 'GymPro Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export const revalidate = 3600; // Revalidate content every hour

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}