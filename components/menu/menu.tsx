import { ReactNode, useEffect, useState } from "react";
import { json } from "stream/consumers";

interface MenuItem {
  id: number;
  pagename: string;
  name: string;
  link: string;
  hedaer: string;
}

// const getMenu = async () => {
//   let resp = await fetch("http://webapi.a-test.ru/menu.php", {
//     next: { revalidate: 10 },
//   });
//   if (resp.ok) {
//     return resp.json();
//   } else return [];
// };

export default async function Menu() {
  const [loaded, setLoaded] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    // const getMenu = async () => {
    //   let resp = await fetch("http://webapi.a-test.ru/menu.php", {
    //     next: { revalidate: 10 },
    //   });
    //   if (resp.ok) {
    //     const loadedMenuItems = await resp.json();
    //     setMenuItems(loadedMenuItems);
    //     setLoaded(true);
    //   } else return [];
    // };
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
