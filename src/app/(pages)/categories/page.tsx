import { CardItem } from "@/app/components/Card/CardItem";
import { Title } from "@/app/components/Title/Title";
import { dbFirebase } from "@/app/firebase.config";
import { DataSnapshot, onValue, ref } from "firebase/database";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết danh mục bài hát",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function CategoriesPage() {
  const data = getData();

  return (
    <>
      {/* Section two: Danh mục nổi bật */}
      <div className="mt-[30px]">
        <Title text="Danh mục nổi bật" />
        <div className="grid grid-cols-5 gap-[20px]">
          {/* Card Item */}
          {data.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
          {/* End Card Item */}
        </div>
      </div>
      {/* End Section two: Danh mục nổi bật */}
    </>
  );
}

const getData = () => {
  const dataSection: any[] = [];
  const categoriesRef = ref(dbFirebase, "categories");
  onValue(categoriesRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      dataSection.push({
        id: key,
        image: data.image,
        title: data.title,
        description: data.description,
        link: `/categories/${key}`,
      });
    });
  });
  return dataSection;
};
