import type { Metadata } from "next";
import { Poppins, Dongle } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { NavHeader } from "../components/nav-header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const dongle = Dongle({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-dongle",
});

export const metadata: Metadata = {
  title: "Vishal BV | Senior Frontend Developer",
  description:
    "Portfolio website of Vishal BV - Senior Frontend Developer specializing in React, Next.js and Node.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" type="image/png" href="nu.png" />
      </head>
      <body
        className={`${poppins.variable} font-sans bg-[#1a1d23] ${dongle.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <NavHeader />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
