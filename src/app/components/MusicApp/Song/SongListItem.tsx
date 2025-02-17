"use client";

import { useEffect, useState } from "react";
import { SongItemPlay } from "../../Song/SongItemPlay";
import { off, onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebase.config";

export const SongListItem = (props: { id: String }) => {
  const { id } = props;
  const [dataSong, setDataSong] = useState<any>(null);
  const [data, setData] = useState<any[]>([]);

  // Lấy dữ liệu bài hát hiện tại
  useEffect(() => {
    const refSongs = ref(dbFirebase, `/songs/${id}`);
    const unsubscribeSongs = onValue(refSongs, (snapshot) => {
      if (snapshot.exists()) {
        setDataSong(snapshot.val());
      }
    });

    return () => {
      off(refSongs);
    };
  }, []);

  // Lấy danh sách bài hát cùng category
  useEffect(() => {
    if (!dataSong || !dataSong.categoryId) return; // Chỉ chạy khi có dữ liệu

    const songRef = ref(dbFirebase, "songs");
    const unsubscribeSongs = onValue(songRef, async (snapshot) => {
      const songPromises: Promise<any>[] = [];

      snapshot.forEach((item) => {
        const key = item.key;
        const songData = item.val();

        // Nếu bài hát đó có danh mục khác danh mục của bài hiện tại thì bỏ qua
        // Hoặc id của bài hát đó bằng id của bài hát hiện tại thì không lấy
        if (songData.categoryId !== dataSong.categoryId || key === id) return;

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
            });

            // Hủy listener
            off(singerRef);
          });
        });

        songPromises.push(singerPromise);
      });

      const newDataSection = await Promise.all(songPromises);
      setData(newDataSection);
    });

    return () => {
      off(songRef);
    };
  }, [dataSong]); // Thêm `dataSong` vào dependency array

  return (
    <>
      {data.length > 0 &&
        data.map((item, index) => <SongItemPlay key={index} item={item} />)}
    </>
  );
};
