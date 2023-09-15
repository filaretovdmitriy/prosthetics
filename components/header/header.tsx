import Image from "next/image";
import Menu from "../menu/menu";
export default function Header(): JSX.Element {
  return (
    <>
      <header className="header">
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
