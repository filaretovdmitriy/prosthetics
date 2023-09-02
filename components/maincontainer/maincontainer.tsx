export default function Maincontainer() {
  return (
    <section className="main">
      <div className="main__bg">
        <img src="img/main/bg-main.png" alt="" />
      </div>
      <div className="main__container">
        <div className="main__content">
          <h1 className="main__title">
            <span>Протезирование</span>
            <br /> рук и ног за 1 рубль
          </h1>
          <div className="main__subtitle subtitle">
            Архангельское <br />
            <span>протезно-ортопедическое</span> предприятие
          </div>
          <a data-topopup="#popup" href="#" className="main__button button">
            Консультация в 1 клик
          </a>
        </div>
        <div className="main__body hasimg">
          <img src="img/main/dec1.png" alt="" />
          <h3>Кто мы</h3>
          <p>
            <span>Архангельское ПрОП </span>– современное предприятие по
            протезированию верхних и нижних конечностей, ортезированию и
            реабилитации
          </p>
        </div>
      </div>
    </section>
  );
}
