import type { Metadata } from 'next'
import { Cinzel, Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '600', '700', '900'],
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "The Most Anticipated Reveal at Dusk 2026. Witness the Crowning of This Year's King & Queen.",
  description: 'Grand Reveal at Dusk 2026. Witness the Crowning of the King & Queen.',
  generator: 'v0.app',
}

function ThemeInitializer() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          try {
            const savedTheme = localStorage.getItem('kingqueen-theme') || 'dark';
            document.documentElement.classList.remove('theme-dark', 'theme-light', 'theme-gradient');
            document.documentElement.classList.add('theme-' + savedTheme);
            
            // Apply background immediately
            if (savedTheme === 'dark') {
              document.documentElement.style.background = 'oklch(0.08 0 0)';
            } else if (savedTheme === 'light') {
              document.documentElement.style.background = 'linear-gradient(135deg, oklch(0.98 0.01 0) 0%, oklch(0.95 0.02 280) 50%, oklch(0.92 0.03 85) 100%)';
            } else if (savedTheme === 'gradient') {
              document.documentElement.style.background = 'linear-gradient(135deg, oklch(0.12 0.02 280) 0%, oklch(0.08 0 0) 50%, oklch(0.10 0.02 85) 100%)';
            }
          } catch (e) {}
        `,
      }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${raleway.variable} bg-background theme-dark`}>
      <head>
        <ThemeInitializer />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
