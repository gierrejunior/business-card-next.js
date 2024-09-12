import Header from '@/components/commons/header';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Metadados da página
export const metadata: Metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio de Gierre',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.svg',
  },
};

const jetbrains = JetBrains_Mono({
  weight: ['400'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={jetbrains.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
