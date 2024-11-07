import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import "../styles/commonStyles.css";
import Header from "@/components/header/Header";

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
  title: "Hoang's Portfolio",
  description: "This is Hoang!",
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
        <header>
          <Header />
        </header>
        <main style={{maxHeight: 'calc(100vh - var(--header-height)) '}}>
          {children}
        </main>
        {/* <footer>foot</footer> */}
      </body>
    </html>
  );
}
