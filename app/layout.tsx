import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Ashlyn Jewel Charters - Family Fishing Charters in Chincoteague",
  description: "Experience the best fishing charters in Chincoteague with Captain Todd. Morning, afternoon, 4-hour, and shark fishing trips available. Professional gear included.",
  keywords: "fishing charters, Chincoteague, Virginia, Captain Todd, family fishing, shark fishing, flounder, fluke",
  icons: {
    icon: [
      {
        url: "/just the fish.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/just the fish.png",
        sizes: "16x16", 
        type: "image/png",
      },
    ],
    shortcut: "/just the fish.png",
    apple: "/just the fish.png",
  },
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
