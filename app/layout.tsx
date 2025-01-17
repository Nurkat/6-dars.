import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./images/logo.svg"
import Link from "next/link";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full px-3 mx-auto bg-green-400 py-5 flex items-center justify-center gap-5">
        <Link href="/" className="text-[23px] text-white rounded-md bg-slate-500 p-2">Home</Link>
          <Link href="/about" className="text-[23px] text-white rounded-md bg-slate-500 p-2">About</Link>
          <Link href="/contact" className="text-[23px] text-white rounded-md bg-slate-500 p-2">Contact</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
