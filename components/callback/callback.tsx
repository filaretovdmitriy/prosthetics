"use client";
import { useGlobalContext } from "@/context/store";
import { useEffect } from "react";
export default function Callback(props: any): JSX.Element {
  const { isPopupOpen, setIsPopupOpen } = useGlobalContext();

  const showForm = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    setIsPopupOpen(!isPopupOpen);
    return true;
  };

  return (
    <a
      data-topopup="#popup"
      className="menu__button"
      href="#"
      onClick={showForm}
    >
      обратный звонок
    </a>
  );
}
