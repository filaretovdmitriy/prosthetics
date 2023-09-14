import Innerheader from "@/components/innerheader/innerheader";
import Innermain from "@/components/innermain/innermain";
import { PageData } from "@/interfaces/page";

const getPage = async (): Promise<PageData> => {
  const data: PageData = await fetch("http://webapi.a-test.ru/page.php", {
    next: { revalidate: 10 },
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ page: "handsprosthetics" }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
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
