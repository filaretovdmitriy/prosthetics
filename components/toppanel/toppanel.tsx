import { TopPanel } from "@/interfaces/page";
export default function Toppanel(props: TopPanel) {
  return (
    <>
      <div className="main__body">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </>
  );
}
