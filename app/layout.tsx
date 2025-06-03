import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { GlobalContextProvider } from "@/context/themeContext";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saiyan Drinks",
  description: "The best cola in the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <GlobalContextProvider>
      <Navbar/>
      {children}
      </GlobalContextProvider>
      </body>
    </html>
  );
}
