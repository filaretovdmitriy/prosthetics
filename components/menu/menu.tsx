import { ReactNode, useEffect, useState } from "react";
import { json } from "stream/consumers";

interface MenuItem {
  id: number;
  name: string;
  link: string;
}

const getMenu = async () => {
  let resp = await fetch("http://webapi.a-test.ru/menu.php", {
    next: { revalidate: 10 },
  });
  if (resp.ok) {
    return resp.json();
  } else return [];
};

export default async function Menu() {
  const menuItems = await getMenu();
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
