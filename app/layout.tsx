import type { Metadata } from "next";
import "./globals.css";
import { Preloader } from "@/components/layout/Preloader";
import SmoothScroll from "@/components/ui/smooth-scroll";

export const metadata: Metadata = {
  title: "Bloopha - Digital Marketing Agency",
  description: "Transform your brand with innovative digital marketing strategies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll />
        <Preloader />
        <div id="main-content" style={{ opacity: 0 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
