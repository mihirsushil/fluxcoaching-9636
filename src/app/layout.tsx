import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FluxCoaching — Intelligence that moves at the speed of your ambition',
  description: 'FluxCoaching is the AI-native platform that automates complex workflows, surfaces actionable insights, and helps teams achieve more with less effort. Built for the future, available today.',
  openGraph: {
    title: 'FluxCoaching',
    description: 'Intelligence that moves at the speed of your ambition',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
