import Image from "next/image";
import styles from "./page.module.css";
import Maincontainer from "@/components/maincontainer/maincontainer";

export default function Home() {
  return (
    <>
      <Maincontainer />
      <div className="block gradientbg">
        <section className="approach">
          <div className="approach__container">
            <div className="approach__top">
              <h3 className="approach__title">
                НАХОДИМ <span>ИНДИВИДУАЛЬНЫЙ</span>
                <br /> ПОДХОД <span>К КАЖДОМУ</span> КЛИЕНТУ
              </h3>
            </div>
            <div className="approach__subtitle subtitle">
              <span>Сопровождаем</span> на всех этапах от первой
              <br /> консультации до получения <span>готового изделия</span>
            </div>
            <div className="approach__cards">
              <div className="approach__card">
                <div className="approach__image">
                  <img src="img/approach/1.png" alt="" />
                </div>
                <p>
                  <span>Послеоперационная помощь</span> в подготовке к
                  протезированию
                </p>
              </div>
              <div className="approach__card">
                <div className="approach__image">
                  <img src="img/approach/2.png" alt="" />
                </div>
                <p>
                  Наши техники-протезисты помогут в кратчайшие сроки вновь
                  приобрести <span>естественную походку</span> и научат
                  пользоваться <span>всеми возможностями протеза</span>
                </p>
              </div>
              <div className="approach__card">
                <div className="approach__image">
                  <img src="img/approach/3.png" alt="" />
                </div>
                <p>
                  Мы поможем собрать <span>полный пакет документов</span> для
                  подачи в органы ОСФР
                </p>
              </div>
              <div className="approach__card">
                <div className="approach__image">
                  <img src="img/approach/4.png" alt="" />
                </div>
                <p>
                  <span>Иногородних клиентов</span> встречаем в аэропорту или на
                  железнодорожном/автовокзале, поможем с жильем
                </p>
              </div>
              <div className="approach__card">
                <div className="approach__image">
                  <img src="img/approach/5.png" alt="" />
                </div>
                <p>
                  Мы непрерывно работаем над <span>повышением качества</span>{" "}
                  услуг
                </p>
              </div>
              <div className="approach__card">
                <div className="approach__image">
                  <img src="img/approach/6.png" alt="" />
                </div>
                <p>
                  Предприятие делает все для{" "}
                  <span>профессионального роста</span> как рядовых сотрудников,
                  так и узких специалистов
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="experience">
          <div className="experience__container">
            <h4 className="experience__title">
              КАКОЙ У НАС <span>ОПЫТ</span>
            </h4>
            <div className="experience__cards">
              <div className="experience__card">
                <div className="experience__icon">
                  <img src="img/experience/1.svg" alt="" />
                </div>
                <p>
                  <span>Производим</span>
                  <br /> собственные протезы
                </p>
              </div>
              <div className="experience__card">
                <div className="experience__icon">
                  <img src="img/experience/2.svg" alt="" />
                </div>
                <p>
                  <span>Следим</span> за новейшими тенденциями в ортезировании и
                  протезировании
                </p>
              </div>
              <div className="experience__card">
                <div className="experience__icon">
                  <img src="img/experience/3.svg" alt="" />
                </div>
                <p>
                  <span>Участвуем</span>
                  <br /> в мировой научной работе
                </p>
              </div>
            </div>
            <div className="experience__items">
              <div className="experience__item">
                <b>2004</b>
                <p>
                  Основатель медицинского центра Сколиолоджик.ру привез в Россию
                  первый корсет Шено и создал первое производство корсетов Шено.
                  Поэтому у нас{" "}
                  <span>самый большой опыт по лечению сколиозов</span> в России.
                  Наши врачи сделали уже <span>более 30 000</span> корсетов,
                  которые победили <span> более 10 000</span> сколиозов.
                </p>
              </div>
              <div className="experience__item">
                <b>2009</b>
                <p>
                  Начали производство туторов и аппаратов.{" "}
                  <span>Развиваем</span> направление ортопедических изделий при
                  ДЦП и других заболеваниях.{" "}
                  <span>Изобретаем и производим</span> собственные шарниры для
                  аппаратов на нижние конечности и туловище.
                </p>
              </div>
              <div className="experience__item">
                <b>2013</b>
                <p>
                  <span>Начали производство</span> собственных протезов.{" "}
                  <span>Разработали</span> силиконовые культеприемные гильзы и
                  оборудование для их создания.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <form action="#" className="form">
        <div className="form__container">
          <h5 className="form__title">НАПИШИТЕ ВАШИ КОНТАКТНЫЕ ДАННЫЕ</h5>
          <div className="form__subtitle subtitle">
            Вы получите подробную консультацию по интересующим вас вопросам
          </div>
          <div className="form__row">
            <input required type="text" placeholder="Введите ваше имя:" />
            <input required type="tel" placeholder="Введите ваш телефон:" />
            <button className="button">БЕСПЛАТНАЯ Консультация</button>
          </div>
        </div>
      </form>

      <div className="block gradientbg">
        <article className="work">
          <div className="work__container">
            <h3 className="work__title">
              <span>ЧТО</span> МЫ ДЕЛАЕМ
            </h3>
            <div className="work__card">
              <div className="work__image">
                <img src="img/work/1.png" alt="" />
              </div>
              <div className="work__content">
                <span>Мы производим</span> индивидуальные ортопедические изделия
                для реабилитации взрослых и детей с различными заболеваниями
                позвоночника и нервной системы.
              </div>
            </div>
            <div className="work__card">
              <div className="work__image">
                <img src="img/work/2.png" alt="" />
              </div>
              <div className="work__content">
                <span>Мы занимаемся лечением</span> сколиоза, кифоза, лордоза.
                Наш профиль – лечение сколиоза с помощью корсета по типу Шено и
                гимнастики по методу Катарины Шрот. Сочетание корсета и
                гимнастики – единственный в мире доказанный метод лечения
                сколиоза.
              </div>
            </div>
            <div className="work__card other">
              <div className="work__image">
                <img src="img/work/3.png" alt="" />
              </div>
              <div className="work__content">
                <span>
                  Мы производим самые современные протезы верхних и нижних
                  конечностей.
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="how">
        <div className="how__container">
          <h5 className="how__title">как МЫ ДЕЛАЕМ</h5>
          <ul>
            <li>Мы делаем 3d-сканирование тела пациента; </li>
            <li>
              обрабатываем снимки в специальной программе, которую сами
              разработали вместе с французскими и немецкими коллегами;{" "}
            </li>
            <li>а вытачивает все робот; </li>
            <li>
              в результате чего корсеты, протезы, аппараты и туторы точны до
              миллиметра!
            </li>
          </ul>
        </div>
      </div>

      <div className="block gradientbg">
        <section className="sertificate">
          <div className="sertificate__container">
            <h4 className="sertificate__title">
              НАШИ <span>НАГРАДЫ</span> И <span>СЕРТИФИКАТЫ</span>
            </h4>
            <div className="sertificate__body">
              <div className="sertificate__arrow-left">
                <img src="img/sertificate/arrow.svg" alt="" />
              </div>
              <div className="sertificate__swiper swiper">
                <div className="swiper-wrapper">
                  <a
                    href="img/sertificate/1.png"
                    data-fancybox="sertificate"
                    className="swiper-slide"
                  >
                    <img src="img/sertificate/1.png" alt="" />
                  </a>
                  <a
                    href="img/sertificate/2.png"
                    data-fancybox="sertificate"
                    className="swiper-slide"
                  >
                    <img src="img/sertificate/2.png" alt="" />
                  </a>
                  <a
                    href="img/sertificate/3.png"
                    data-fancybox="sertificate"
                    className="swiper-slide"
                  >
                    <img src="img/sertificate/3.png" alt="" />
                  </a>
                  <a
                    href="img/sertificate/4.png"
                    data-fancybox="sertificate"
                    className="swiper-slide"
                  >
                    <img src="img/sertificate/4.png" alt="" />
                  </a>
                  <a
                    href="img/sertificate/5.png"
                    data-fancybox="sertificate"
                    className="swiper-slide"
                  >
                    <img src="img/sertificate/5.png" alt="" />
                  </a>
                  <a
                    href="img/sertificate/3.png"
                    data-fancybox="sertificate"
                    className="swiper-slide"
                  >
                    <img src="img/sertificate/3.png" alt="" />
                  </a>
                  <a
                    href="img/sertificate/4.png"
                    data-fancybox="sertificate"
                    className="swiper-slide"
                  >
                    <img src="img/sertificate/4.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="sertificate__arrow-right">
                <img src="img/sertificate/arrowRight.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="clients">
          <div className="clients__container">
            <div className="clients__top">
              <h4 className="clients__title">
                <span>ФОТО</span> НАШИХ
                <br /> ДОРОГИХ КЛИЕНТОВ
              </h4>
            </div>
            <div className="clients__body">
              <div className="clients__arrow-left">
                <img src="img/sertificate/arrow.svg" alt="" />
              </div>
              <div className="clients__swiper swiper">
                <div className="swiper-wrapper">
                  <a
                    href="img/clients/1.png"
                    data-fancybox="clients"
                    className="swiper-slide"
                  >
                    <img src="img/clients/1.png" alt="" />
                  </a>
                  <a
                    href="img/clients/2.png"
                    data-fancybox="clients"
                    className="swiper-slide"
                  >
                    <img src="img/clients/2.png" alt="" />
                  </a>
                  <a
                    href="img/clients/3.png"
                    data-fancybox="clients"
                    className="swiper-slide"
                  >
                    <img src="img/clients/3.png" alt="" />
                  </a>
                  <a
                    href="img/clients/4.png"
                    data-fancybox="clients"
                    className="swiper-slide"
                  >
                    <img src="img/clients/4.png" alt="" />
                  </a>
                  <a
                    href="img/clients/5.png"
                    data-fancybox="clients"
                    className="swiper-slide"
                  >
                    <img src="img/clients/5.png" alt="" />
                  </a>
                  <a
                    href="img/clients/6.png"
                    data-fancybox="clients"
                    className="swiper-slide"
                  >
                    <img src="img/clients/6.png" alt="" />
                  </a>
                  <a
                    href="img/clients/7.png"
                    data-fancybox="clients"
                    className="swiper-slide"
                  >
                    <img src="img/clients/7.png" alt="" />
                  </a>
                  <a
                    href="img/clients/8.png"
                    data-fancybox="clients"
                    className="swiper-slide"
                  >
                    <img src="img/clients/8.png" alt="" />
                  </a>
                  <a
                    href="img/clients/9.png"
                    data-fancybox="clients"
                    className="swiper-slide"
                  >
                    <img src="img/clients/9.png" alt="" />
                  </a>
                  <a
                    href="img/clients/10.png"
                    data-fancybox="clients"
                    className="swiper-slide"
                  >
                    <img src="img/clients/10.png" alt="" />
                  </a>
                  <a
                    href="img/clients/11.png"
                    data-fancybox="clients"
                    className="swiper-slide"
                  >
                    <img src="img/clients/11.png" alt="" />
                  </a>
                  <a
                    href="img/clients/12.png"
                    data-fancybox="clients"
                    className="swiper-slide"
                  >
                    <img src="img/clients/12.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="clients__arrow-right">
                <img src="img/sertificate/arrowRight.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="love">
          <div className="love__container">
            <h5 className="love__title">
              ЛЮБОВЬ В КАЖДОМ ШАГЕ, К <span>НОВОЙ ЖИЗНИ</span>
            </h5>
            <div className="love__cards">
              <div className="love__card">
                <div className="love__icon">
                  <img src="img/love/1.svg" alt="" />
                </div>
                <p>
                  <b>Забота о людях,</b> а не о пациентах
                </p>
              </div>
              <div className="love__card">
                <div className="love__icon">
                  <img src="img/love/2.svg" alt="" />
                </div>
                <p>
                  <b>Протезы</b> 2023 года
                </p>
              </div>
              <div className="love__card">
                <div className="love__icon">
                  <img src="img/love/3.svg" alt="" />
                </div>
                <p>
                  <b>Опытная</b> команда
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="clients">
          <div className="clients__container">
            <div className="clients__top">
              <h4 className="clients__title">
                <span>ОТЗЫВЫ</span> НАШИХ
                <br /> КИБЕРЛЮДЕЙ
              </h4>
            </div>

            <div className="clients__body">
              <div className="reviews__arrow-left">
                <img src="img/sertificate/arrow.svg" alt="" />
              </div>
              <div className="reviews__swiper swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide"></div>
                  <div className="swiper-slide"></div>
                  <div className="swiper-slide"></div>
                  <div className="swiper-slide"></div>
                  <div className="swiper-slide"></div>
                  <div className="swiper-slide"></div>
                </div>
              </div>
              <div className="reviews__arrow-right">
                <img src="img/sertificate/arrowRight.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
