import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./offerings.css";
import "./service-pages.css";
import "./how-it-works.css";
import "./image-content-layout.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clearway | Junk removal, made simple",
  description: "Fast, thoughtful junk removal for homes and businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={roboto.variable}><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
