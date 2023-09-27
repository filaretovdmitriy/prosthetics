"use client";
import { useGlobalContext } from "@/context/store";
export default function Popup() {
  const { isPopupOpen, setIsPopupOpen } = useGlobalContext();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    setIsPopupOpen(false);
  };

  return (
    isPopupOpen && (
      <div className="popup" id="popup">
        <p className="popup__close" onClick={handleClick}></p>
        <form className="popup__content">
          <div className="popup__title">
            БЕСПЛАТНАЯ <br />
            КОНСУЛЬТАЦИЯ
          </div>
          <div className="popup__inputs">
            <input required type="text" placeholder="Введите ваше имя:" />
            <input required type="tel" placeholder="Введите ваш телефон:" />
            <input required type="email" placeholder="Введите вашу почту:" />
          </div>
          <div className="popup__bottom">
            <button className="button">ПРОКОНСУЛЬТИРОВАТЬСЯ</button>
            <p>
              Нажимая на кнопку, вы соглашаетесь с условиями{" "}
              <a href="#">Политики Конфиденциальности</a>
            </p>
          </div>
        </form>
      </div>
    )
  );
}
