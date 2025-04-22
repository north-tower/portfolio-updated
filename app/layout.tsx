import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// In your page or layout file
export const metadata = {
  title: 'Mike Munene',
  description: 'Mike Munene Portfolio',
  keywords: 'mike, munene, porfolio',
  openGraph: {
    title: 'Mike Munene',
    description: 'Mike Munene Portfolio',
    images: ['/some-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
