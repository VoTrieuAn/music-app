"use client";

import { dbFirebase } from "@/app/firebase.config";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { CardItem } from "../../Card/CardItem";

interface Singer {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export const HomeSingerItem = () => {
  const [dataSectionThree, setDataSectionThree] = useState<Singer[]>([]);

  useEffect(() => {
    const newDataSectionThree: Singer[] = [];
    const singersRef = ref(dbFirebase, "singers");
    onValue(singersRef, (items) => {
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();
        if (newDataSectionThree.length < 5) {
          newDataSectionThree.push({
            id: key,
            image: data.image,
            title: data.title,
            description: data.description,
            link: `/singers/${key}`,
          });
        }
      });
      setDataSectionThree(newDataSectionThree);
    });
  }, []);
  return (
    <>
      {dataSectionThree.length > 0 &&
        dataSectionThree.map((item: Singer, index: number) => (
          <CardItem key={index} item={item} />
        ))}
    </>
  );
};
