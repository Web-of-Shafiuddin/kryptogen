import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kryptogen Technology - Building Tomorrow's Technology Today",
  description: "Transform your ideas into cutting-edge digital experiences. Expert software development services including mobile apps, web development, and e-commerce solutions.",
  keywords: ["Kryptogen Technology", "Software Development", "Mobile Apps", "Web Development", "E-commerce", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Kryptogen Technology Team" }],
  openGraph: {
    title: "Kryptogen Technology",
    description: "Building Tomorrow's Technology Today - Expert software development services",
    url: "https://kryptogen.com",
    siteName: "Kryptogen Technology",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kryptogen Technology",
    description: "Building Tomorrow's Technology Today",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground dark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
