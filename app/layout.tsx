import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CVIBE - Ride the Meme Wave",
  description:
    "Community-driven meme token celebrating good vibes, decentralization, and ocean-sized memes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-transparent`}>
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://videos.pexels.com/video-files/3576395/3576395-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/20" />
        </div>
        {children}
      </body>
    </html>
  );
}
