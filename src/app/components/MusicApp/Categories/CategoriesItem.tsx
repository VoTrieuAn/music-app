"use client";

import { dbFirebase } from "@/app/firebase.config";
import { off, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { SongItemPlay } from "../../Song/SongItemPlay";

export const CategoriesItem = (props: { id: String }) => {
  const { id } = props;
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const songRef = ref(dbFirebase, "songs");

    const unsubscribeSongs = onValue(songRef, async (snapshot) => {
      const fetchData = async () => {
        const songPromises: Promise<any>[] = [];

        snapshot.forEach((item) => {
          const key = item.key;
          const songData = item.val();
          if (songData.categoryId !== id) return;

          // Lấy thông tin ca sĩ
          const singerRef = ref(dbFirebase, "/singers/" + songData.singerId[0]);
          const singerPromise = new Promise((resolve) => {
            const unsubscribeSinger = onValue(singerRef, (singerSnapshot) => {
              const dataSinger = singerSnapshot.val();
              resolve({
                id: key,
                image: songData.image,
                title: songData.title,
                singer: dataSinger?.title || "Unknown",
                link: `/songs/${key}`,
                time: "4:32", // Thời gian này do backend trả ra
                audio: songData.audio,
              });

              // Hủy listener sau khi lấy dữ liệu
              off(singerRef);
            });
          });

          songPromises.push(singerPromise);
        });

        // Đợi tất cả singers được lấy về trước khi cập nhật state
        const newDataSection = await Promise.all(songPromises);
        setData(newDataSection);
      };

      fetchData();
    });

    // Cleanup function khi component unmount
    return () => {
      off(songRef);
      unsubscribeSongs();
    };
  }, []);
  return (
    <>
      {data.length > 0 &&
        data.map((item, index) => <SongItemPlay key={index} item={item} />)}
    </>
  );
};
