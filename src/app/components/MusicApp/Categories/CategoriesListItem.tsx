"use client";

import { dbFirebase } from "@/app/firebase.config";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { CardItem } from "../../Card/CardItem";

interface CategoriesListItem {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export const CategoriesListItem = () => {
  const [data, setData] = useState<CategoriesListItem[]>([]);

  useEffect(() => {
    const categoriesRef = ref(dbFirebase, "categories");
    onValue(categoriesRef, (items) => {
      const dataSection: CategoriesListItem[] = [];
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
      setData(dataSection);
    });
  }, []);

  return (
    <>
      {data.length > 0 &&
        data.map((item, index) => <CardItem key={index} item={item} />)}
    </>
  );
};
