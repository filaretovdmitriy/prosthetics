import { Roboto } from "next/font/google";
import Menu from "@/components/menu/menu";
import Image from "next/image";
import "./globals.css";
import type { Metadata } from "next";
import Maincontainer from "@/components/maincontainer/maincontainer";
import Header from "@/components/header/header";
import Gallery from "@/components/gallery/gallery";
import Feedback from "@/components/feedback/feedback";
import Footer from "@/components/footer/footer";

const font = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic"],
  variable: "--font-roboto",
});

export { font };

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.variable}>
        <div className="wrapper">
          <Header />
          <main className="main-wrapper">{children}</main>
          <Gallery />
          <Feedback />
          <Footer />
        </div>
      </body>
    </html>
  );
}
