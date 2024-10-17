import type { Metadata } from "next";
import localFont, { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  icons:'/favicon.svg',
  title: "Foodies",
  description:
    "Foodies is your ultimate guide to discovering the world of cuisine. Explore a wide range of food categories, dive into detailed descriptions, and find delicious dishes that suit your taste. From local favorites to international delights, we’ve got you covered with all the information you need to explore new flavors!",
};

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className}`}
      >
        
        {children}
      </body>
    </html>
  );
}
