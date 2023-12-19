import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import StoreProvider from "./redux/StoreProvider";
import Navbar from "@/widgets/Navbar/Navbar";

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
        </StoreProvider>
      </body>
    </html>
  );
}
