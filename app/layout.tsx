import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hunter Home Ventilation | Ventilation Solutions in Northern Ireland',
  description:
    'Improve your indoor air quality with Hunter Home Ventilation. We specialize in condensation control, mould prevention, and energy-efficient ventilation systems in Northern Ireland.',
  keywords: [
    'home ventilation Northern Ireland',
    'condensation control Northern Ireland',
    'mould prevention Northern Ireland',
    'positive input ventilation',
    'Drimaster installation Northern Ireland',
    'whole house ventilation',
    'energy-efficient ventilation',
    'indoor air quality solutions',
    'radon reduction Northern Ireland',
    'asthma-friendly ventilation',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
