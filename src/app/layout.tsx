import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Components/Navbar";
import localFont from "next/font/local";
import Footer from "@/Components/Footer";
const myFont = localFont({
  src: "../../public/fonts/CalSans-SemiBold.woff2",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wow Health",
  description: "We Give Healthy Diet and Minimal Cost Services To The Client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <div className="static bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
