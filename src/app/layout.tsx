import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { TabNav } from "@/components/TabNav";

const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Game Arena",
  description: "Compare your favorite Games!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-linear-to-b from-bg to-bg-deep font-sans text-ink">
        <div className="relative">
          <h1 className="font-serif text-4xl text-ink text-center pt-10">
            Game <span className="italic text-accent">Arena</span>
          </h1>
          <div className="mt-6 flex justify-center">
            <TabNav />
          </div>
          <main className="mx-auto w-full max-w-3xl px-4 pb-16 pt-10">
            {children}
          </main>
          <footer className="space-y-1 px-4 pb-8 text-center text-xs text-muted">
            <p>Demo data. Real data coming soon.</p>
            <p>© 2026 Game Arena</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
