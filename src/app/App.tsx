import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import "./classes.scss";
import StoreProvider from "./redux/StoreProvider";
import Navbar from "@/widgets/general/Navbar/Navbar";
import Footer from "@/widgets/general/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EMi Print",
  description: "Распечатай свои воспоминания!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
