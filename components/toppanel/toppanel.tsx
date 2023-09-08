import { TopPanel } from "@/interfaces/page";
export default function Toppanel({ title, content }: TopPanel) {
  return (
    <>
      <div className="main__body">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </>
  );
}
