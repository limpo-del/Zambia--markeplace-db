import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zambia Marketplace DB',
  description: 'Mobile marketplace database schema for Zambia - downloadable SQL setup for phone users',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
