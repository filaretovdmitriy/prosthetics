import { PageData } from "@/interfaces/page";

const getGallery = (page: string) => {
  const pageGallery = async (): Promise<PageData> => {};
  return pageGallery;
};

// const getPage = async (): Promise<PageData> => {
//     const data: PageData = await fetch("http://webapi.a-test.ru/page.php", {
//       next: { revalidate: 10 },
//       method: "POST",
//       headers: { "Content-Type": "application/json;charset=utf-8" },
//       body: JSON.stringify({ page: "handsprosthetics" }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         return data;
//       });
//     return data;
//   };
