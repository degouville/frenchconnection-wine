import type { Metadata } from "next";
import { Forum, Inter } from "next/font/google";
import "./globals.css";

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "French Connection Wines — Premium French Wines in Vietnam",
  description:
    "Discover our curated selection of premium French wines imported directly from the South of France. Available for delivery across Vietnam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${forum.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
