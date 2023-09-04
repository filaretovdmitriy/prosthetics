"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "../menu/menu";
export default function Header(): JSX.Element {
  const [fixHeader, setFixHeader] = useState(false);
  const scrollFix: number = 200;
  useEffect(() => {
    const handleScroll = () => {
      setFixHeader(document.body.scrollTop > scrollFix);
    };

    document.body.addEventListener("scroll", handleScroll);
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${fixHeader == true ? "show" : ""}`}>
        <div className="header__container">
          <a href="/" className="header__logo">
            <Image src="/img/header/logo.svg" width={69} height={89} alt="" />

            <span>
              Архангельское
              <br />
              протезно-ортопедическое
              <br />
              предприятие
            </span>
          </a>
          <Menu />
          <div className="header__burger">
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
}
