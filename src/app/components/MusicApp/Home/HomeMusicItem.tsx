"use client";

import { useEffect, useState } from "react";
import { SongItem } from "../../Song/SongItem";
import { off, onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebase.config";

interface Song {
  id: string;
  image: string;
  title: string;
  singer: string;
  listen: number;
  link: string;
  audio: string;
  wishlist: {
    uid: boolean;
  };
}

export const HomeMusicItem = () => {
  const [dataSectionOne, setDataSectionOne] = useState<Song[]>([]);

  useEffect(() => {
    const songRef = ref(dbFirebase, "songs");

    // Lắng nghe dữ liệu từ "songs"
    const unsubscribeSongs = onValue(songRef, async (snapshot) => {
      const fetchData = async () => {
        const songPromises: Promise<Song>[] = [];

        snapshot.forEach((item) => {
          const key = item.key;
          const data = item.val();
          if (!data?.singerId || data.singerId.length === 0) return;

          // Lấy dữ liệu singer
          const singerRef = ref(dbFirebase, "/singers/" + data.singerId[0]);
          const singerPromise: Promise<Song> = new Promise((resolve) => {
            onValue(singerRef, (singerSnapshot) => {
              const dataSinger = singerSnapshot.val();
              resolve({
                id: key,
                image: data.image,
                title: data.title,
                singer: dataSinger?.title || "Unknown",
                listen: data.listen,
                link: `/songs/${key}`,
                audio: data.audio,
                wishlist: data.wishlist,
              });

              // Hủy listener để tránh gọi lại nhiều lần
              off(singerRef);
            });
          });

          songPromises.push(singerPromise);
        });

        // Đợi tất cả singers được lấy về
        const newDataSectionOne = await Promise.all(songPromises);
        setDataSectionOne(newDataSectionOne.slice(0, 3)); // Chỉ lấy 3 bài hát đầu tiên
      };

      fetchData();
    });

    // Cleanup function để tránh rò rỉ bộ nhớ
    return () => {
      off(songRef);
      unsubscribeSongs();
    };
  }, []);

  return (
    <>
      {dataSectionOne.length > 0 &&
        dataSectionOne.map((item: Song, index: number) => (
          <SongItem key={index} item={item} />
        ))}
    </>
  );
};
