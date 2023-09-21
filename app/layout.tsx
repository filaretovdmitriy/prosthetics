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
import { createContext } from "vm";
import Popup from "@/components/popup/popup";
import React from "react";
import { GlobalContextProvider } from "@/context/store";
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
          <GlobalContextProvider>
            <Header />

            <main className="main-wrapper">{children}</main>
            <Gallery />
            <Feedback />
            <Footer />
            <footer className="footer">
              <div className="footer__container">
                <div className="footer__left">
                  <h5 className="footer__title">
                    <span>НАШ</span> ТЕЛЕФОН И АДРЕС
                  </h5>
                  <div className="footer__block">
                    <p>Телефон:</p>
                    <a href="tel:+79212482222">+7 921 248 22 22</a>
                    <a href="tel:+78182482222">+7 818 248 22 22</a>
                  </div>
                  <div className="footer__block">
                    <p>Адрес:</p>
                    <span>
                      Архангельск, <br />
                      ул.Урицкого д.20
                    </span>
                  </div>
                  <div className="footer__socials">
                    <a href="#" target="_blank">
                      <img src="img/footer/1.svg" alt="" />
                    </a>
                    <a href="#" target="_blank">
                      <img src="img/footer/2.svg" alt="" />
                    </a>
                    <a href="#" target="_blank">
                      <img src="img/footer/3.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="footer__map">
                  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad25ed77024bb19859c47284e9129f62a2a02b54983163e9ec87846cee0a9a544&amp;source=constructor"></iframe>
                </div>
              </div>
            </footer>

            <Popup />
          </GlobalContextProvider>
        </div>
      </body>
    </html>
  );
}
