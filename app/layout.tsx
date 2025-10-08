import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MaxGrip - Premium Dart Equipment & Custom Points",
  description: "Premium darts, custom points, and accessories. Crafted for grip, balance, and performance. Shop MaxGrip's professional dart equipment.",
  keywords: ["darts", "dart equipment", "custom points", "dart accessories", "premium darts"],
  authors: [{ name: "MaxGrip" }],
  openGraph: {
    title: "MaxGrip - Premium Dart Equipment",
    description: "Premium darts, custom points, and accessories. Crafted for grip, balance, and performance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
