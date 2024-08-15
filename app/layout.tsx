import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { poppins } from "./styles/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { supabase } from "@/lib/initSupabase";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Soedirman Robotic Team",
  description: "The Future We Make, For The Better life!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
