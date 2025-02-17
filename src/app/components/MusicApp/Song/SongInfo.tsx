"use client";

import { useEffect, useState } from "react";
import { CardInfo } from "../../Card/CardInfo";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebase.config";

export const SongInfo = (props: { id: String }) => {
  const [info, setInfo] = useState<any>({});
  const { id } = props;
  useEffect(() => {
    onValue(ref(dbFirebase, `/songs/${id}`), (item) => {
      const data = item.val();
      onValue(ref(dbFirebase, `/singers/${data.singerId[0]}`), (item) => {
        data.singer = item.val().title;
        setInfo(data);
      });
    });
  }, []);

  return (
    <>
      {info && (
        <CardInfo
          image={info.image}
          title={info.title}
          description={info.singer}
        />
      )}
    </>
  );
};
