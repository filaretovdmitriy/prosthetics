"use client";
export default function Callback(props: any): JSX.Element {
  const showForm = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
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
