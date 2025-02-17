"use client";

import { dbFirebase } from "@/app/firebase.config";
import { onValue, ref } from "firebase/database";
import { CardInfo } from "../../Card/CardInfo";
import { useEffect, useState } from "react";

export const CategoriesInfo = (props: { id: String }) => {
  const { id } = props;
  const [info, setInfo] = useState<any>({});
  useEffect(() => {
    onValue(ref(dbFirebase, "/categories/" + id), (item) => {
      console.log(item.val());

      setInfo(item.val());
    });
  }, []);

  return (
    <>
      {info && (
        <CardInfo
          image={info.image}
          title={info.title}
          description={info.description}
        />
      )}
    </>
  );
};
