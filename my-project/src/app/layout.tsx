import type { Metadata } from "next";
import { Header, Footer } from "@components/index";
import "./globals.css";

export const metadata: Metadata = {
  title: "FiscalNote Employee Directory",
  description: "FiscalNote Employee Directory",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <Header />
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

