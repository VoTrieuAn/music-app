"use client";

import { dbFirebase } from "@/app/firebase.config";
import { off, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { SongItemPlay } from "../../Song/SongItemPlay";
import { useSearchParams } from "next/navigation";

interface Song {
  id: string;
  image: string;
  title: string;
  singer: string;
  link: string;
  time: string;
  audio: string;
}

export const SearchItem = () => {
  const [data, setData] = useState<Song[]>([]);
  const searchParams = useSearchParams();
  const defaultParam = searchParams.get("keyword") || "";
  useEffect(() => {
    const songRef = ref(dbFirebase, "songs");

    const unsubscribeSongs = onValue(songRef, async (snapshot) => {
      const fetchData = async () => {
        const songPromises: Promise<Song>[] = [];

        snapshot.forEach((item) => {
          const key = item.key;
          const songData = item.val();

          // Lấy thông tin ca sĩ
          const singerRef = ref(dbFirebase, "/singers/" + songData.singerId[0]);
          const singerPromise: Promise<Song> = new Promise((resolve) => {
            onValue(singerRef, (singerSnapshot) => {
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

        setData(
          defaultParam
            ? newDataSection.filter((item) =>
                item.title.toLowerCase().includes(defaultParam.toLowerCase())
              )
            : newDataSection
        );
      };

      fetchData();
    });

    // Cleanup function khi component unmount
    return () => {
      off(songRef);
      unsubscribeSongs();
    };
  }, [defaultParam]);

  return (
    <>
      {data &&
        data.map((item, index) => <SongItemPlay key={index} item={item} />)}
    </>
  );
};
