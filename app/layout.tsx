import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Ashlyn Jewel Charters - Family Fishing Charters in Chincoteague",
  description: "Experience the best fishing charters in Chincoteague with Captain Todd. Morning, afternoon, 4-hour, and shark fishing trips available. Professional gear included.",
  keywords: "fishing charters, Chincoteague, Virginia, Captain Todd, family fishing, shark fishing, flounder, fluke",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <div className="main-card">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
