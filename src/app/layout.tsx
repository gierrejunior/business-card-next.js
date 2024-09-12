import Header from '@/components/commons/header';
import type { Metadata } from 'next';
import { Fira_Code, Roboto, Source_Code_Pro } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// Carregando fontes locais com `localFont`
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Carregando Google Fonts via `@next/font/google`
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const firaCode = Fira_Code({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-fira-code',
});

const sourceCodePro = Source_Code_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});

// Metadados da página
export const metadata: Metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio de Gierre',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${roboto.variable} 
          ${firaCode.variable} 
          ${sourceCodePro.variable} 
          antialiased
        `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
