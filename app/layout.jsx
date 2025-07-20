import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://alfreddev.com'),
  title: {
    default: "Senior Full Stack Developer Portfolio | Professional Software Development",
    template: "%s | Full Stack Developer Portfolio"
  },
  description: "Professional portfolio showcasing full stack development skills, experience, and innovative projects. Specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["full stack developer", "react developer", "next.js", "javascript", "typescript", "node.js", "web development", "software engineer", "portfolio"],
  authors: [{ name: "John Alfred Reyes" }],
  creator: "John Alfred Reyes",
  publisher: "John Alfred Reyes",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alfreddev.com',
    title: 'Senior Full Stack Developer Portfolio | Professional Software Development',
    description: 'Professional portfolio showcasing full stack development skills, experience, and innovative projects. Specializing in React, Next.js, Node.js, and modern web technologies.',
    siteName: 'Full Stack Developer Portfolio',
    images: [
      {
        url: '/images/dp.jpg', // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: 'Senior Full Stack Developer Portfolio',
      },
    ],
  },
  verification: {
    google: 'google-site-verification=sujTxwyZsFRduW48n9fAUNl7WrAGqLzvWx7GH1Obicg',
  },
  alternates: {
    canonical: 'https://alfreddev.com',
  },
  icons: {
    icon: [
      { url: '/logo.png?v=1', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png?v=1', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo.png?v=1',
  },
  manifest: '/manifest.json',
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
