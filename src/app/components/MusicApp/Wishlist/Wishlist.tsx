"use client";

import { SongItemPlay } from "@/app/components/Song/SongItemPlay";
import { Title } from "@/app/components/Title/Title";
import { authFirebase, dbFirebase } from "@/app/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { off, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

interface Song {
  id: string;
  image: string;
  title: string;
  singer: string;
  listen: number;
  link: string;
  audio: string;
  time: string;
  wishlist: {
    uid: boolean;
  };
}

export const Wishlist = () => {
  const [dataFinal, setDataFinal] = useState<Song[]>([]);
  useEffect(() => {
    let clear = undefined;
    onAuthStateChanged(authFirebase, (user) => {
      if (!user) return;
      const uid = user.uid;
      const songRef = ref(dbFirebase, "songs");

      // Lắng nghe dữ liệu từ "songs"
      const unsubscribeSongs = onValue(songRef, async (snapshot) => {
        const fetchData = async () => {
          const songPromises: Promise<Song>[] = [];

          snapshot.forEach((item) => {
            const key = item.key;
            const data = item.val();
            const wishlist = data.wishlist;

            if (!wishlist || !wishlist[uid]) return;
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
                  time: "4:30",
                  wishlist: data.wishlist,
                });

                // Hủy listener để tránh gọi lại nhiều lần
                off(singerRef);
              });
            });

            songPromises.push(singerPromise);
          });

          // Đợi tất cả singers được lấy về
          const newDataFinal = await Promise.all(songPromises);
          setDataFinal(newDataFinal); // Chỉ lấy 3 bài hát đầu tiên
        };

        fetchData();
      });

      clear = () => {
        off(songRef);
        unsubscribeSongs();
      };
    });
    return clear;
  }, []);
  return (
    <>
      <Title text="Bài hát yêu thích" />
      <div className="grid grid-cols-1 gap-[10px]">
        {/* Song Item Play */}
        {dataFinal &&
          dataFinal.map((item, index) => (
            <SongItemPlay key={index} item={item} />
          ))}
        {/* End Song Item Play */}
      </div>
    </>
  );
};
