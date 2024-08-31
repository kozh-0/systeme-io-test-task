import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "systeme-io-test-task",
  description: "Completed By Dmitry Kozhevnikov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-red`}>
        <Header />
        <main className="h-[calc(100vh-79px)] py-5 md:container md:mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
