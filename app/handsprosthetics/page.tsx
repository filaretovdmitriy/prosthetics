import Innerheader from "@/components/innerheader/innerheader";
import Innermain from "@/components/innermain/innermain";
let page = {};
const getPage = async () => {
  fetch("http://webapi.a-test.ru/pages", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ page: "handsprosthetics" }),
  })
    .then((res) => res.json())
    .then((data) => {
      page = data;
      console.log(data);
    });
};
export default function Handsprosthetics() {
  return (
    <>
      <Innermain {...page} />
    </>
  );
}
