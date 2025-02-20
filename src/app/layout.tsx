import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Caveat, Open_Sans, Ubuntu } from "next/font/google";
import { Suspense } from "react";
import Footer from "./_components/Footer";
import { Header } from "./_components/Header";
import Loading from "./_components/Loading";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Webster • Software Engineer",
  description: "Senior Software Engineer, Solutions Architect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://avatars.githubusercontent.com/u/29043511" />
      </head>
      <body
        className={cn(
          ubuntu.variable,
          caveat.variable,
          openSans.variable,
          "font-sans font-medium"
        )}
      >
        <Suspense fallback={<Loading />}>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
