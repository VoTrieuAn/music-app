"use client";

import { dbFirebase } from "@/app/firebase.config";
import { off, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { CardItem } from "../../Card/CardItem";

export const SingerItem = () => {
  const [data, setDataSectionThree] = useState<any[]>([]);

  useEffect(() => {
    const newData: any[] = [];
    const singersRef = ref(dbFirebase, "singers");
    onValue(singersRef, (items) => {
      items.forEach((item) => {
        const key = item.key;
        const dataSinger = item.val();
        newData.push({
          id: key,
          image: dataSinger.image,
          title: dataSinger.title,
          description: dataSinger.description,
          link: `/singers/${key}`,
        });
      });
      setDataSectionThree(newData);
    });
    // Trả về clean up function
    return () => {
      off(singersRef);
    };
  }, []);
  return (
    <>
      {data.length > 0 &&
        data.map((item: any, index: Number) => (
          <CardItem key={index} item={item} />
        ))}
    </>
  );
};
