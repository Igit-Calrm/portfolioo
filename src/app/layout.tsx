import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carl Vincent Maloles - Portfolio",
  description: "Portfolio of Carl Vincent Maloles - Web Developer and CRM Specialist",
  icons: {
    icon: "/479721165_1011534714162033_2282319409625192657_n.png",
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
