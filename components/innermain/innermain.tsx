import Image from "next/image";

export default function Innermain(props) {
  return (
    <>
      <section className="main">
        <div className="main__bg">
          <Image
            src="/img/main/bg-hands.png"
            alt=""
            width={1903}
            height={1084}
          />
        </div>
        <div className="main__container">
          <div className="main__content">
            <h1 className="main__title">{props.link}</h1>
            <div className="main__subtitle subtitle">
              Мы научим пользоваться протезом и окажем{" "}
              <span>профессиональную помощь</span>
            </div>
            <a data-topopup="#popup" href="#" className="main__button button">
              оставить заявку
            </a>
          </div>
          <div className="main__body">
            <h3>ПОЛНЫЙ КОМПЛЕКС УСЛУГ</h3>
            <p>
              Изготавливаем любые виды протезов рук (протезы верхних
              конечностей) по индивидуальным параметрам каждого пациента
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
