import Innerheader from "@/components/innerheader/innerheader";
import Innermain from "@/components/innermain/innermain";
interface PageData {
  id: number;
  pagename: string;
  name: string;
  link: string;
  header: string;
}
const getPage = async (): Promise<PageData> => {
  const res = await fetch("http://webapi.a-test.ru/pages.php", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ page: "handsprosthetics" }),
  });
  const data = await res.json();
  return data;
};
export default async function Handsprosthetics() {
  let page = await getPage();

  return (
    <>
      <Innermain {...page} />
    </>
  );
}
