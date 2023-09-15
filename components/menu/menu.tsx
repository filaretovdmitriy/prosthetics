import { ReactNode, useEffect, useState } from "react";
import { json } from "stream/consumers";

interface MenuItem {
  id: number;
  pagename: string;
  name: string;
  link: string;
  hedaer: string;
}

const getMenu = async (): Promise<Array<MenuItem>> => {
  const data: Array<MenuItem> = await fetch(
    "http://webapi.a-test.ru/menu.php",
    {
      next: { revalidate: 10 },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return data;
};

export default async function Menu() {
  let menuItems: Array<MenuItem> = await getMenu();
  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuItems.map((menuElement: MenuItem) => (
          <li className="menu__item" key={menuElement.id}>
            <a href={menuElement.link} className="menu__link">
              {menuElement.name}
            </a>
          </li>
        ))}
        <li className="menu__item">
          <a data-topopup="#popup" className="menu__button" href="#">
            обратный звонок
          </a>
        </li>
      </ul>
    </nav>
  );
}
