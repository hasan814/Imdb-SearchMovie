import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Providers from "@/providers/providers";
import Navbar from "@/components/elements/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imdb-movie",
  description: "Search movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <main style={{ height: "80vh" }}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
