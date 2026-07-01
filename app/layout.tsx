import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingNav from "@/components/FloatingNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aritraray.dev"),
  title: "Aritra Ray — Full-Stack Software Engineer",
  description:
    "Full-stack software engineer based in West Bengal, India. Building scalable web apps, backend systems, and shipping fast.",
  keywords: [
    "Aritra Ray",
    "Full-Stack Engineer",
    "Software Engineer",
    "Next.js",
    "Node.js",
    "React",
    "West Bengal",
    "India",
  ],
  authors: [{ name: "Aritra Ray" }],
  openGraph: {
    title: "Aritra Ray — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer based in West Bengal, India. Building scalable web apps, backend systems, and shipping fast.",
    url: "https://aritraray.dev",
    siteName: "Aritra Ray",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aritra Ray — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aritra Ray — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer based in West Bengal, India. Building scalable web apps, backend systems, and shipping fast.",
    creator: "@Aritraray2005",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent dark mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t==null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <FloatingNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
