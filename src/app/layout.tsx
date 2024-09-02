import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 800,
};

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
        <main className="min-h-[calc(100vh-111px)] py-5 px-2 md:container md:mx-auto">
          {children}
        </main>
        <Footer />
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
