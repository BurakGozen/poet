import { Providers } from "@/components/layouts/providers";
import { Footer } from "@/components/navigation/footer";
import { Navigation } from "@/components/navigation/navigation";
import { cn } from "@/lib/utils/classnames";
import { fontSans, fontSerif } from "@/lib/utils/fonts";
import { Metadata, Viewport } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poet",
  description: "Poet is a poetry website.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body
        className={cn(
          "relative min-h-[100dvh] bg-background font-sans antialiased",
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
