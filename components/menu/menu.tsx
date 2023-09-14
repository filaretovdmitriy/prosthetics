"use client";
import { ReactNode, useEffect, useState } from "react";
import { json } from "stream/consumers";

interface MenuItem {
  id: number;
  name: string;
  link: string;
}

export default function Menu() {
  //   const menuItems = await
  const [loaded, setLoaded] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    const getMenu = () => {};
    fetch("http://webapi.a-test.ru/menu.php", {
      next: { revalidate: 3600 },
    })
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
        setLoaded(true);
      });
  }, []);

  return (
    <nav className="menu">
      <ul className="menu__list">
        {loaded &&
          menuItems.map((menuElement: MenuItem) => (
            <li className="menu__item" key={menuElement.id}>
              <a href={menuElement.link} className="menu__link">
                {menuElement.name}
              </a>
            </li>
          ))}
        {/* {menuItems.map((menuElement: MenuItem) => (
          <li className="menu__item" key={menuElement.id}>
            <a href={menuElement.link} className="menu__link">
              {menuElement.name}
            </a>
          </li>
        ))} */}
        <li className="menu__item">
          <a data-topopup="#popup" className="menu__button" href="#">
            обратный звонок
          </a>
        </li>
      </ul>
    </nav>
  );
}
