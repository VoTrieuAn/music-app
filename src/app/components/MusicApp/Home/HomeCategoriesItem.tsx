"use client";

import { dbFirebase } from "@/app/firebase.config";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { CardItem } from "../../Card/CardItem";

export const HomeCategoriesItem = () => {
  const [dataSectionTwo, setDataSectionTwo] = useState<any[]>([]);
  useEffect(() => {
    // Section two
    const newDataSectionTwo: any[] = [];
    const categoriesRef = ref(dbFirebase, "categories");
    onValue(categoriesRef, (items) => {
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();
        if (newDataSectionTwo.length < 5) {
          newDataSectionTwo.push({
            id: key,
            image: data.image,
            title: data.title,
            description: data.description,
            link: `/categories/${key}`,
          });
        }
      });
      setDataSectionTwo(newDataSectionTwo);
    });
    // End section two
  }, []);
  return (
    <>
      {dataSectionTwo.length > 0 &&
        dataSectionTwo.map((item: any, index: Number) => (
          <CardItem key={index} item={item} />
        ))}
    </>
  );
};
